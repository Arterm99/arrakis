<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// Добавляем из папки Models класс Post, исп use
use App\Models\AdminPanel;

// Добавялем обработчик ошибкок
use App\Http\Requests\lcRequets;
use Illuminate\Support\Facades\Storage;

class AdminPanelController extends Controller {
    public function admin(lcRequets $row) {

        $tables = $row->validated();
        $previewImage = $tables['profile_image'];
        $img = Storage::put('/images', $previewImage);
        
        $table = new AdminPanel();
        $table->login = session('login');
        $table->company = $row->input('company');
        $table->name = $row->input('name');
        $table->description = $row->input('description');
        $table->product = $row->input('product');
        $table->category = $row->input('category');
        $table->price = $row->input('price');
        $table->weght = $row->input('weght');
        $table->profile_image = $img;


        $table->save();

        return redirect('/lc');
    }

   
    public function JsonCodeProduct() {
        header('Content-Type: application/json');
        $json_code = AdminPanel::all();
        
        echo json_encode($json_code, JSON_UNESCAPED_UNICODE);
        // foreach ($a as $k) {
        //     echo $k->name ;
        //     echo $k->description; 
        //      echo $k->product;
        // }

    } 


}
