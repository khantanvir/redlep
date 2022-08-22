<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;

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


Route::view('/{path?}', 'welcome');
//Route::view('{path}', 'welcome')->where('path', '([A-z\d\-\/_.]+)?');


//Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);

Route::get('admin/home', [App\Http\Controllers\HomeController::class, 'home']);
Route::get('admin/login', [App\Http\Controllers\HomeController::class, 'login']);
Route::post('alt/admin/loginaction', [App\Http\Controllers\HomeController::class, 'loginaction']);

Route::get('admin/logout', [App\Http\Controllers\HomeController::class, 'logout']);
//catagory
Route::get('catagory/add', [App\Http\Controllers\CatagoryController::class, 'add']); 
Route::get('catagory/add/{id}', [App\Http\Controllers\CatagoryController::class, 'add']);
Route::get('catagory/all', [App\Http\Controllers\CatagoryController::class, 'all']);
Route::post('catagory/store', [App\Http\Controllers\CatagoryController::class, 'store']);
//blog routes
Route::get('blog/add', [App\Http\Controllers\BlogController::class, 'create']);
Route::get('blog/add/{id}', [App\Http\Controllers\BlogController::class, 'create']);
Route::get('blog/all', [App\Http\Controllers\BlogController::class, 'all']);
Route::post('blog/store', [App\Http\Controllers\BlogController::class, 'store']);
//Auth::routes();
//contact list item
Route::get('contact/list', [App\Http\Controllers\ContactController::class, 'list']);

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/user/get', [AuthController::class, 'user']);


Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    return "Cache is cleared";
});

Route::get('/clear-view', function() {
    Artisan::call('view:clear');
    return "View is cleared";
});
Route::get('/clear-route', function() {
    Artisan::call('route:clear');
    return "Routes is cleared";
});