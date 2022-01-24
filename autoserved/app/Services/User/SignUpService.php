<?php

namespace App\Services\User;

use Laravel\Passport\ApiTokenCookieFactory;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use App\Contracts\Repository\UserRepositoryContract as UserRepository;

class SignUpService
{
    private $validator;
    private $response;
    private $cookie;
    private $user;

    public function __construct(
        Validator $validator,
        UserRepository $user,
        Response $response,
        ApiTokenCookieFactory $cookie
    ) {
        $this->user = $user;
        $this->cookie = $cookie;
        $this->response = $response;
        $this->validator = $validator;
    }

    public function validateCustomerData($data)
    {
        return $this->validator->make($data, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'mobile' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:11'
        ]);
    }

    public function validateShopData($data)
    {
        return $this->validator->make($data, [
            'shop_name' => 'required|regex:/^[a-zA-Z0-9\s]+$/',
            'first_name' => 'required|alpha',
            'last_name' => 'required|alpha',
            'email' => 'required|email|unique:users,email',
            'mobile' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10'
        ]);
    }

    public function validateFleetData($data)
    {
        return $this->validator->make($data, [
            'fleet_name' => 'required|regex:/^[a-zA-Z0-9\s]+$/',
            'first_name' => 'required|alpha',
            'last_name' => 'required|alpha',
            'email' => 'required|email|unique:users,email',
            'mobile' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10'
        ]);
    }

    public function signUpResponse($userInfo, $csrfToken)
    {
        try {
            $newUser = $this->signUp($userInfo);
            $apiCookie = $this->cookie->make($newUser->id, $csrfToken);

            return $this->response->success(['message' => 'User successfully signed up'])->withCookie($apiCookie);
        } catch (ValidationException $e) {
            return $this->response->validateError($e->errors());
        }
    }

    public function signUp($userInfo)
    {
        if ( $userInfo['type'] == 'shop') {
            $validator = $this->validateShopData($userInfo);
        } elseif ( $userInfo['type'] == 'fleet') {
            $validator = $this->validateFleetData($userInfo);
        } else {
            $validator = $this->validateCustomerData($userInfo);
        }
        
        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
        
        $newUser = $this->user->register($userInfo);
        // Add Credit here

        // Run event if user was referred
        // event(new \App\Events\UserReferred(request()->cookie('ref'), $newUser));
        return $newUser;
    }
}
