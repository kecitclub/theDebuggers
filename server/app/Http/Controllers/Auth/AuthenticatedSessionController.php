<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::where('email', $request->email)->first();
            $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;

            session()->regenerate();

            return response()->json([
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'role' => $user->getRoleNames()[0],
            ]);
        } else {

            return response()->json([
                'message' => 'Invalid Credentials'
            ], 401);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        $user = Auth::user();
        //Delete all old tokens
        $user->tokens()->delete();

        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}
