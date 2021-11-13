<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Форма Регистрации. Подключение к БД
Route::post('/reg', 'UsersController@submit');

// Форма авторизации
Route::post('/auth', 'UsersController@AuthAdmin');

// Добавление товаров в БД
Route::post('/reg-lc', 'AdminPanelController@admin');


// Выйти из ЛК
Route::get('/exit-admin', 'UsersController@ExitSession');




Route::get('/', function () {
    return view('index');
});

// Личный кабинет
Route::get('/lc', function () {
    return view('lc');
});

Route::get('/reg-lc', function () {
    return view('lc');
});

Route::get('/inc/aside', function () {
    return view('lc');
});






// j-son 
Route::get('/json-product', 'AdminPanelController@JsonCodeProduct');

// j-son 
Route::get('/json-users', 'UsersController@JsonCodeUsers');


// О компании
Route::get('/about', function () {
    return view('about');
});

