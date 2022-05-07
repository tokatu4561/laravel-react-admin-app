<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function index(Request $request)
    {
        $orders = Order::with("orderItems")->paginate();
        return OrderResource::collection($orders);
    }

    /**
     * ロール(権限)の更新
     *
     * @param  int  $id
     */
    public function show($id)
    {
        $order = Order::with("orderItems")->find($id);
        return new OrderResource($order);
    }
}
