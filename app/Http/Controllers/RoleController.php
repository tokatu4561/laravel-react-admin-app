<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleController extends Controller
{
    public function index()
    {
        return  Role::all();
    }

    public function store(Request $request)
    {
        $role = Role::create([
            "name" => $request->string,
        ]);

        return response($role, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        return Role::find($id);
    }

    /**
     * ロール(権限)の更新
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $role = Role::find($id);

        if ($request->filled("name")) {
            $role->name = $request->name;
        }

        return response($role, Response::HTTP_ACCEPTED);
    }

    /**
     * ロール(権限)の削除
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::find($id);

        $role->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
