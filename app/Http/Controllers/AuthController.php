<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $user = User::create(
            [
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->first_name,
                'password' => Hash::make($request->first_name),
            ]
        );

        return response()->json($user, Response::HTTP_CREATED);
    }

    //
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only("email", "password"))) {
            $request->session()->regenerate();

            $errorMessage = ["error" => "入力値が不正です"];

            return response()->json($errorMessage, Response::HTTP_UNAUTHORIZED);
        }

        /** @var User $user */
        $user = Auth::user();

        $token = $user->createToken("token")->plainTextToken;

        return response()->json([
            "jwt" => $token
        ], 200);
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
