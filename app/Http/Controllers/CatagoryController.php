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

class CatagoryController extends Controller
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
    //create catagory page 
    public function add($id=NULL){
        $data['catagory_main'] = true;
        $data['catagory_add'] = true;
        if(!empty($id)){
            $data['category'] = Catagory::find($id);
        }
        return view('Catagory/add',$data);
    }
    public function all(){
        $data['catagories'] = Catagory::orderBy('id','desc')->paginate(5);
        //return $data;
        return view('Catagory/all',$data);
    }

    public function store(Request $request)
    {
        if(!Auth::check()){
            Session::flash('error','You are not login in this system');
            return redirect('admin/login');
        }
        $rules = [
            'title' => ['required','required:catagories,title'],
            'description' => ['required','required:catagories,description'],
        ];
        $messages = array(
            'title.required' => 'Title is required',
            'description.required' => 'Description is required'
        );
        $valid = Validator::make($request->input(),$rules,$messages);
        if($valid->fails()){
            return redirect()->back()
            ->withErrors($valid)
            ->withInput();
        }else{
            $redlep = new Redlep();
            $catagory_id = $request->input('catagory_id');
            if(!empty($catagory_id)){
                $catagory = Catagory::find($catagory_id);
            }else{
                $catagory = new Catagory();
            }
            
            $catagory->title = $request->input('title');
            $catagory->description = $request->input('description');
            $catagory->time = time();
            $catagory->is_deleted = 0;
            //url modify
            $url_modify = $redlep->slug_create($request->input('title'));
            $checkSlug = Catagory::where('url', 'LIKE', '%' . $url_modify . '%')->count();
            if ($checkSlug > 0) {
                $new_number = $checkSlug + 1;
                $new_slug = $url_modify . '-' . $new_number;
                $catagory->url = $new_slug;
            } else {
                $catagory->url = $url_modify;
            }

            $catagory->save();
            Session::flash('success','Catagory data saved successfully');
            return redirect('catagory/all');
        }
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
