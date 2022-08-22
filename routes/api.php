<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use Illuminate\Auth\AuthenticationException;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;

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

//Auth::routes();
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'login']);

Route::post('/user/contact', [ContactController::class, 'usercontact']);
//get home page blog list
Route::get('/get/blog', [BlogController::class,'getblog']);
Route::get('/get/blog/list', [BlogController::class,'getBlogList']);
//blog detail
Route::get('/get/blog/detail', [BlogController::class,'getBlogDetail']);
//comment route
Route::post('/blog/comment', [CommentController::class, 'store']);
//search blog list 
//Route::get('/search/blog/{id}', [BlogController::class,'searchBlogList']);

Route::get('/search/blog/list', [BlogController::class,'searchBlogList']);

Route::middleware('auth:api')->group(function(){
    Route::get('/user/get', [AuthController::class,'user']);
});