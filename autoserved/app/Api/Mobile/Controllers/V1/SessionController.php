<?php

namespace App\Api\Mobile\Controllers\V1;

use Illuminate\Http\Request;
use App\Traits\Auth;

class SessionController
{

    use Auth;

    public function customerLogin(Request $request)
    {
        $remember = $request->get('remember');
        $loginInfo = $request->only(['email', 'password', 'contact_number']);
        $csrfToken = $request->header('X-CSRF-TOKEN');

        return $this->loginService->attempCustomerLoginResponse($loginInfo, $csrfToken, $remember);
    }
}
