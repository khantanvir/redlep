<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Auth\AuthenticationException;
use App\Models\Redlep;
use App\Models\Catagory;
use App\Models\Blog;
use App\Models\Comment;
use Illuminate\Support\Facades\File;
use Image;
use Illuminate\Support\Facades\Cookie;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment();
        $redlep = new Redlep();
        $url = $request->input('blog_url');
        $checkBlog = Blog::where('url',$url)->first();
        if(empty($checkBlog)){
            $data['result'] = array(
            'key' => '101',
            'val'=> 'Something went wrong, Blog Data not Found'
        );
        return response()->json($data,200);
        }
        //saved comment
        $comment->name = $request->input('name');
        $comment->email = $request->input('email');
        $comment->blog_id = $checkBlog->id;
        $comment->time = time();
        $comment->is_deleted = 0;
        $comment->message = $request->input('message');
        $comment->save();
        //get comment list 
        $commentList = Comment::where('blog_id',$checkBlog->id)->orderBy('id','desc')->get();
        $array = array();
        foreach($commentList as $list){
            $array[] = array(
                'id'=> $list->id,
                'cname'=> $list->name,
                'cemail'=> $list->email,
                'cmessage'=> $list->message,
                'time'=> $list->time,
                'picture'=> $redlep->randomProfileImage()
            );
        }
        $data['result'] = array(
            'key' => '200',
            'count' =>count($array),
            'comments'=>$array
        );
        return response()->json($data,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
