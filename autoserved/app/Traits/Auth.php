<?php

namespace App\Traits;

use App\Contracts\Repository\UserRepositoryContract;
use App\Services\Session\LoginService;
use App\Services\Session\LogoutService;
use Illuminate\Http\Request;

trait Auth {
    private $loginService;
    private $logoutService;
    private $userRepo;

    public function __construct(
        LoginService $loginService,
        LogoutService $logoutService,
        UserRepositoryContract $userRepo
    ) {
        $this->loginService = $loginService;
        $this->logoutService = $logoutService;
        $this->userRepo = $userRepo;
    }



	public function currentUser()
    {
        return $this->userRepo->skipPresenter(false)->currentUser();
    }

    public function login(Request $request)
    {
        $remember = $request->get('remember');
        $loginInfo = $request->only(['email', 'password']);
        $csrfToken = $request->header('X-CSRF-TOKEN');

        return $this->loginService->attemptLoginResponse($loginInfo, $csrfToken, $remember);
    }

    public function logOut()
    {
        return $this->logoutService->logoutResponse();
    }

    public function loginUsingId() 
    {

    }
}