<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }
    public function index()
    {
        return view('welcome');
    }

    public function home()
    {
        $data['page_title'] = "Home | Admin";
        $data['home'] = 'active';
        return view('home/index',$data);
    }

    public function login()
    {
        $data['page_title'] = "Home | Login";
        $data['login'] = 'active';
        return view('home/login',$data);
    }
    public function loginaction(Request $request)
    {
        $rules = [
            'email' => ['required','required:users,email'],
            'password' => ['required','required:users,password'],
        ];
        $messages = array(
            'email.required' => 'Email is required',
            'password.required' => 'Password is required'
        );
        $valid = Validator::make($request->input(),$rules,$messages);
        if($valid->fails()){
            return redirect()->back()
            ->withErrors($valid)
            ->withInput();
        }else{
            if(Auth::attempt($request->only('email','password'))){
                return redirect('admin/home');
            }else{
                Session::flash('error','Invalid Email and Password');
                return Redirect::back();
            }

        }
    }
    //log out 
    public function logout()
    {
        Auth::logout();
        Session::flash('success','Successfully logout');
        return redirect('admin/login');
    }
    
}
