<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
use App\Services\User\SignUpService;
use App\Services\User\WalletService;
use App\Services\User\UpdateUserService;
use App\Services\User\ChangePasswordService;
use Illuminate\Validation\ValidationException;
use App\Contracts\Repository\UserRepositoryContract as UserRepository;
// use App\Validators\UserValidator;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\ApiTokenCookieFactory;
use Illuminate\Http\RedirectResponse;
use App\Services\ImpersonateManager;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Cookie\Factory as Cookie;
use Illuminate\Contracts\Validation\Factory as Validator;

class UserController
{
    private $signUpService;
    private $validator;
    private $walletService;
    private $updateUserService;
    private $changePasswordService;
    private $cookie;
    private $cookieFactory;
    protected $repository;
    protected $manager;
    private $response;
    private $auth;

    public function __construct(
        SignUpService $signUpService,
        Validator $validator,
        WalletService $walletService,
        UpdateUserService $updateUserService,
        ChangePasswordService $changePasswordService,
        UserRepository $repository,
        ApiTokenCookieFactory $cookieFactory,
        Cookie $cookie,
        ImpersonateManager $manager,
        Response $response
        // UserValidator $validator
    ) {
        $this->walletService = $walletService;
        $this->signUpService = $signUpService;
        $this->updateUserService = $updateUserService;
        $this->changePasswordService = $changePasswordService;
        $this->repository = $repository;
        $this->cookieFactory = $cookieFactory;
        $this->cookie = $cookie;
        $this->manager = $manager;
        $this->validator  = $validator;
    }

        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $users = $this->repository->all();
        $users['impersonator'] = Auth::user()->id;
        if (request()->wantsJson()) {

            return response()->json([
                'data' => $users,
            ]);
        }

        return view('users.index', compact('users'));
    }

        /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $user,
            ]);
        }

        return view('users.show', compact('user'));
    }

    public function get_user($email)
    {
        $user= $this->repository->findWhere([$email]);
        return $user;
    }

    public function get_user_by_id($id)
    {
        $user = $this->repository->find($id);
        return $user;
    }

    public function get_user_by_slug($slug)
    {
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        return $user;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $id = $this->repository->decodeSlug($slug);
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'User deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'User deleted.');
    }

    public function signUp(Request $request)
    {
        if ( $request->type == 'shop') {
            $userInfo = $request->only(['shop_name', 'first_name', 'last_name', 'email', 'password', 'mobile', 'country', 'type']);
            $userInfo['user_type'] = config('user.type.vendor');
        } elseif ( $request->type == 'fleet') {
            $userInfo = $request->only(['fleet_name', 'first_name', 'last_name', 'email', 'password', 'mobile', 'country', 'type']);
            $userInfo['user_type'] = config('user.type.fleet');
        } else {
            $userInfo = $request->only(['first_name', 'last_name', 'email', 'password', 'mobile', 'country']);
            $userInfo['user_type'] =  config('user.type.customer');
            $userInfo['type'] = $userInfo['user_type'];
        }
        
        if( !$request->has('country')) {
            $userInfo['country'] = "PH";
        }
        
        if( !$request->has('password')) {
            $userInfo['password'] = Str::random(10);
        }
        $csrfToken = $request->header('X-CSRF-TOKEN');

        // return $userInfo;
        return $this->signUpService->signUpResponse($userInfo, $csrfToken);
    }

    public function update(Request $request)
    {
        $userData = $request->only([
            'slug',
            'first_name',
            'last_name',
            'email',
            'mobile'
        ]);

        return $this->updateUserService->updateUserResponse($userData);
    }

    public function changePassword(Request $request)
    {
        $data = $request->only([
            'slug',
            'old_password',
            'new_password',
            'new_password_confirmation'
        ]);

        return $this->changePasswordService->changePasswordResponse($data);
    }

    public function isImpersonating(Request $request)
    {
        $result = $request->cookie('impersonator');
        // $decrypt = Crypt::decryptString($result);
        // return $decrypt;
        if (!$result) {
            $response = FALSE;
        } else {
            $response = TRUE;
        }
        return response()->json([
            'success' => $response,
        ]);
    }

    public function impersonate(Request $request, $slug, $impersonator)
    {
        $user_id = $this->repository->decodeSlug($slug);
        $user = User::find($user_id);
        $impersonator_id = $this->repository->decodeSlug($impersonator);
        if ($user->id !== ($impersonator_id)) {
            $new_user = auth()->loginUsingId($user->id);
            \Debugbar::info($new_user );
            if ($user) {
                $csrfToken = $request->header('X-CSRF-TOKEN');
                $apiCookie = $this->cookieFactory->make($new_user->getKey(), $csrfToken);
                $new_cookie = setcookie('impersonator', $impersonator_id, 30); 
                $data = array(
                    'data' => $user
                );
                $current = $this->repository->skipPresenter(false)->find($impersonator_id);
                return response()->json($current)->withCookie('impersonator', $impersonator, 30)->withCookie($apiCookie);
            } else {
                return $this->response->unauthorized('Incorrect login details');
            }
        }
    }
    
    public function stopImpersonate(Request $request)
    {
        $impersonator = $request->cookie('impersonator');
        $impersonator_id = $this->repository->decodeSlug($impersonator);
        \Debugbar::info($impersonator_id );
        $user = User::find($impersonator_id);

        $new_user = auth()->loginUsingId($user->id);

        if ($user) {
            $csrfToken = $request->header('X-CSRF-TOKEN');
            $apiCookie = $this->cookieFactory->make($new_user->getKey(), $csrfToken);
            $data = array(
                'data' => $user
            );
            $current = $this->repository->skipPresenter(false)->find($impersonator_id);
            \Cookie::queue(\Cookie::forget('impersonator'));
            setcookie('impersonator', 'Expired', time() - 100000, '/');
            return response()->json($current)->withCookie('impersonator', 'Expired', time() - 100000, '/')->withCookie($apiCookie);
        } else {
            return $this->response->unauthorized('Incorrect login details');
        }

    }  
    


    public function balance($slug) 
    {
        return $this->walletService->check_balance($slug);
    }

    public function deposit(Request $request)
    {
        \Debugbar::info($request );
        $user = Auth::user();
        if( $user->user_type == 'admin')
        {
            $data = $request->only(['slug', 'amount', 'message']);
            $deposit = $this->walletService->deposit($data);
            return $deposit;
        }
    }

    public function withdraw(Request $request)
    {
        \Debugbar::info($request );
        $user = Auth::user();
        if( $user->user_type == 'admin')
        {
            $data = $request->only(['slug', 'amount', 'message']);
            $withdraw = $this->walletService->withdraw($data);
            return $withdraw;
        }        
    }

    public function uploadAvatar(Request $request)
    {
        $slug = $request->slug;
        $file = $request->file('avatar');
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        $fileValidator = $this->validator->make(['avatar' => $file], [
            'avatar' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);

        if ($fileValidator->fails()) {
            throw new ValidationException($fileValidator);
        }
        $user->clearMediaCollection('avatar');
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $avatar = $user->addMedia($file)->usingFileName($newFileName)->toMediaCollection('avatar');

        return [
            'fileUrl' => $avatar->getUrl(),
            'fileName' => $newFileName,
            'message' => 'Avatar successfully saved'
        ];
    }

}
