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

    /**
     * CSVエクスポート
     */
    public function export()
    {
        $header = [
            "Content-type" => "text/csv",
            "Content-Disposition" => "attachment; filename=order.csv",
            "Pragma" => "no-cache",
            "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
            "Expires" => "0",
        ];

        $callback = function () {
            $orders = Order::all();
            $file = fopen('php://output', 'w');

            fputcsv($file, ["ID", "Name", "Email", "Product Title", "Price", "Quantity"]);

            foreach ($orders as $order) {
                fputcsv($file, [$order->id, $order->name, $order->email, "", "", ""]);

                foreach ($order->orderItems as $orderItem) {
                    fputcsv($file, ["", "", "", $order->product_title, $order->price, $order->quantity]);
                }
            }

            fclose($file);
        };

        return \Response::stream($callback, 200, $header);
    }
}
