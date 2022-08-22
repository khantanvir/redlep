<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\AuthenticationException;


class AuthController extends Controller
{

    public function index()
    {
        //
    }
    //register api
    public function register(RegisterRequest $request){
        //return "ggg hello";
        try{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ],400);
            $token = $user->createToken('app')->accessToken;
            return response()->json([
                'message'=> 'Successfully Registered',
                'token' => $token,
                'user' => $user
            ],400);
        }
        catch(Exception $exception){
            return response()->json([
                'message'=> $exception->getMessage()
            ],400);
        }
    }
    //login function 
    public function login(Request $request){
        try{
            if(Auth::attempt($request->only('email','password'))){
                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;
                $data['result'] = array(
                    'key' => '200',
                    'message' => 'successfully login',
                    'token' => $token,
                    'user' => $user
                );
                return response()->json($data,200);
            }else{
                $data['result'] = array(
                    'key' => '101',
                    'message'=> 'Invaid email and password'
                );
                return response()->json($data,200);
            }
        }
        catch(Exception $exception){
            $data['result'] = array(
                    'message'=> $exception->getMessage()
                );
                return response()->json($data,200);
        }
        

    }
    //get loggedin user
    public function user()
    {
        //return "Hello ami valo nai ";
        if(Auth::check()){
            $data['result'] = array(
                'key' => 200,    
                'user'=>Auth::user()
            );
            return response()->json($data,200);    
        }else{
            $data['result'] = array(
                'key'=>101,
                'message' =>'You are not logged in this system'
            );
            return response()->json($data,200);
        }
                
    }
    public function random(){
        //return 'oh';
        $data['result'] = array(
            'key'=>200,
            'val'=>'just test'
        );
        return response()->json($data,200);
    }

    public function create()
    {
        //
    }

}
