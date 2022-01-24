<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class WorkflowMiddleware
{
    protected $auth, $response;

    public function __construct(Auth $auth, Response $response) 
    {
        $this->auth = $auth;
        $this->response = $response;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($this->auth->user() && $this->verify_user_roles()) {
            return $next($request);
        } else {
            return $this->response->unauthorized("You are not allowed for this action.");
        }
    }

    private function verify_user_roles() : bool
    {
        return (
            $this->auth->user()->user_type == config('user.type.admin') ||
            $this->auth->user()->user_type == config('user.type.vendor')
        );
    }
}
