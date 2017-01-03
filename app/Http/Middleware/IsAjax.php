<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class IsAjax
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->ajax()) {
            return response(view('react'));
        }
        return $next($request);
    }
}
