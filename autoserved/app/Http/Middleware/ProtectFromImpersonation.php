<?php

namespace App\Http\Middleware;

use Closure;

use App\Exceptions\ProtectedAgainstImpersonationException;
use App\Services\ImpersonateManager;

class ProtectFromImpersonation
{
    /**
     * Handle an incoming request.
     *
     * @param   \Illuminate\Http\Request $request
     * @param   \Closure $next
     * @return mixed
     * @throws ProtectedAgainstImpersonationException
     */
    public function handle($request, Closure $next)
    {
        $impersonate_manager = app()->make(ImpersonateManager::class);

        if ($impersonate_manager->isImpersonating()) {
            throw new ProtectedAgainstImpersonationException();
        }

        return $next($request);
    }
}
