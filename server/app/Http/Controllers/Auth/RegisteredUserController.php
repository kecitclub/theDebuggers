<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'in:user,organization'],
            'province_id' => ['required', 'exists:provinces,id'],
            'district_id' => ['required', 'exists:districts,id'],
            'municipality_id' => ['required', 'exists:municipalities,id'],
            'address' => ['required', 'string', 'max:255'],
        ]);

        if ($request->role === 'organization') {
            $request->validate([
                'chairman' => ['required', 'string', 'max:255'],
                'pan_card' => ['required', 'file'],
                'stamp' => ['required', 'file'],
                'established_date' => ['required', 'date'],
            ]);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->string('password')),
            'province_id' => $request->province_id,
            'district_id' => $request->district_id,
            'municipality_id' => $request->municipality_id,
            'address' => $request->address,
        ]);

        $user->assignRole($request->role);



        event(new Registered($user));

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
}
