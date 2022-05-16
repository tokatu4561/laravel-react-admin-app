<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [AuthController::class, 'user']);
    Route::put('user/info', [AuthController::class, 'updateInfo']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('users', [UserController::class, 'index']);
    Route::post('users', [UserController::class, 'store']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destrpy']);

    Route::apiResource('roles', RoleController::class);

    Route::apiResource('products', ProductController::class);

    Route::post('permission', [PermissionController::class, 'index']);

    Route::post("upload", [ImageController::class, "upload"]);

    Route::post("orders", [OrderController::class, "index"]);
    Route::post("orders/{id}", [OrderController::class, "show"]);
    Route::get("orders/export", [OrderController::class, "export"]);
});
