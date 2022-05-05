<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    /**
     * 全てのユーザーを取得
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * ユーザーの作成
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::create(
            $request->only("first_name", "last_name", "user")
                + ["password" => Hash::make(1234)]
        );

        return response($user, Response::HTTP_CREATED);
    }

    /**
     * $id　ユーザーの取得
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return $user;
    }

    /**
     * ユーザーの更新
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if ($request->filled("first_name")) {
            $user->first_name = $request->first_name;
        }
        if ($request->filled("last_name")) {
            $user->last_name = $request->last_name;
        }
        if ($request->filled("email")) {
            $user->email = $request->email;
        }

        return response($user, Response::HTTP_ACCEPTED);
    }

    /**
     * ユーザーの削除
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
