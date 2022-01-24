<?php

namespace App\Services\Session;

use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Validation\ValidationException;
use Laravel\Passport\ApiTokenCookieFactory;
use Carbon\Carbon;

class LoginService
{
    private $auth;
    private $validator;
    private $cookie;
    private $response;
    private $repository;

    public function __construct(
        Auth $auth,
        Validator $validator,
        UserRepository $repository,
        ApiTokenCookieFactory $cookie,
        Response $response
    ) {
        $this->auth = $auth;
        $this->cookie = $cookie;
        $this->response = $response;
        $this->validator = $validator;
        $this->repository = $repository;
    }

    public function validateLoginInfo($data)
    {
        return $this->validator->make($data, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
    }

    public function attemptLoginResponse($loginInfo, $csrfToken, $remember)
    {
        try {
            $attempt = $this->attemptLogin($loginInfo, $csrfToken, $remember);

            if ($attempt) {
                return $this->sendLoginResponse($csrfToken);
            } else {
                return $this->response->unauthorized('Incorrect login details');
            }
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    public function attemptLogin($loginInfo, $csrfToken, $remember)
    {
        $validator = $this->validateLoginInfo($loginInfo);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $this->auth->attempt($loginInfo, $remember);
    }


    public function attempCustomerLoginResponse($loginInfo, $csrfToken, $remember)
    {
        try {
            $this->attemptLogin($loginInfo, $csrfToken, $remember);
            if ($this->auth->user() && $this->auth->user()->user_type == 'customer') {
                return $this->sendBearerTokenResponse($this->auth->user());
            } else {
                $this->auth->logout();
                return $this->response->unauthorized('Incorrect customer login details');
            }
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    private function sendLoginResponse($csrfToken)
    {
        $apiCookie = $this->cookie->make($this->auth->user()->getKey(), $csrfToken);

        return $this->response->success(
            $this->repository->skipPresenter(false)->currentUser()
        )->withCookie($apiCookie);
    }

    private function sendBearerTokenResponse($user)
    {
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if (request()->remember) $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
}
