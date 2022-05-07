<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    /**
     * ユーザーの作成
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        $file = $request->file("image");
        $name = Str::random(10);
        $url = \Storage::putFileAs("images", $file, $name . "." . $file->extension());

        return [
            "url" => base_path() . "/" . $url,
        ];
    }
}
