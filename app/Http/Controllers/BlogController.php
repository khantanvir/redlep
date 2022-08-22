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

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id=NULL){
        if(!empty($id)){
            $data['blog'] = Blog::find($id);
        }
        $data['catagories'] = Catagory::where('is_deleted',0)->get();
        $data['page_title'] = 'Blog Create';
        return view('blog/add',$data);
    }
    //all blog function 
    public function all(){
        $data['page_title'] = 'All Blogs';
        $data['blogs'] = Blog::orderBy('id','desc')->paginate(5);
        return view('blog/all',$data);
    }
    public function store(Request $request){
        if(!Auth::check()){
            Session::flash('error','You are not login in this system');
            return redirect('admin/login');
        }
        $rules = [
            'title' => ['required','required:blogs,title'],
            'description' => ['required','required:blogs,description'],
            'long_description' => ['required','required:blogs,long_description'],
        ];
        $messages = array(
            'title.required' => 'Title is required',
            'description.required' => 'Description is required',
            'long_description.required' => 'Long Description is required'
        );
        $valid = Validator::make($request->input(),$rules,$messages);
        if($valid->fails()){
            return redirect()->back()
            ->withErrors($valid)
            ->withInput();
        }else{
            $redlep = new Redlep();
            $blog_id = $request->input('blog_id');
            if(!empty($blog_id)){
                $blog = Blog::find($blog_id);
            }else{
                $blog = new Blog();
            }
            
            $blog->title = $request->input('title');
            $blog->description = $request->input('description');
            $blog->long_description = $request->input('long_description');

            //main image resize and upload
            if($request->hasFile('main_image')){
                if(!empty($blog->main_image)){
                    $updateFileName = base_path().'/public/assets/blog/main/'.$blog->main_image;
                    if(File::exists($updateFileName)){
                        File::delete($updateFileName);
                    }
                }
                $image = $request->file('main_image');
                $ext = $image->getClientOriginalExtension();
                $filename = $image->getClientOriginalName();
                $filename = rand(1000,100000).'.'.$ext;
                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(120,150);
                $image_resize->save(public_path('assets/blog/main/' .$filename));
                $blog->main_image = $filename;
            }
            //detail image resize and upload
            if($request->hasFile('detail_image')){
                if(!empty($blog->detail_image)){
                    $updateDetailFileName = base_path().'/public/assets/blog/'.$blog->detail_image;
                    if(File::exists($updateDetailFileName)){
                        File::delete($updateDetailFileName);
                    }
                }
                $image = $request->file('detail_image');
                $ext = $image->getClientOriginalExtension();
                $filename = $image->getClientOriginalName();
                $filename = rand(1000,100000).'.'.$ext;
                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(800,500);
                $image_resize->save(public_path('assets/blog/' .$filename));
                $blog->detail_image = $filename;
            }
            
            $blog->time = time();
            $blog->view = rand(10, 100);
            $blog->catagory_id = $request->input('catagory_id');
            $blog->create_by = Auth::user()->id;
            $blog->is_deleted = 0;
            //url modify
            $url_modify = $redlep->slug_create($request->input('title'));
            $checkSlug = Blog::where('url', 'LIKE', '%' . $url_modify . '%')->count();
            if ($checkSlug > 0) {
                $new_number = $checkSlug + 1;
                $new_slug = $url_modify . '-' . $new_number;
                $blog->url = $new_slug;
            } else {
                $blog->url = $url_modify;
            }

            $blog->save();
            Session::flash('success','Blog data saved successfully');
            return redirect('blog/all');
        }
    }
    //get blog list for home page
    public function getblog(){
        $getlist = Blog::where('is_deleted',0)->take(6)->orderBy('id','desc')->get();
        //$getlist = Blog::orderBy('id','desc')->paginate(2);
        $getData = array();
        foreach($getlist as $list){
            $getData[] = array(
                'id'=>$list->id,
                'title'=>$list->title,
                'description'=>$list->description,
                'url'=>$list->url,
                'view'=>$list->view,
                'time'=>date('F j, Y',$list->time),
                'create_by'=>User::find($list->create_by)->name,
                'main_image'=>$list->main_image,
                'detail_image'=>$list->detail_image
            );
        }
        
        $data['result'] = array(
            'key' => '200',
            'val'=> $getData
        );
        return response()->json($data,200);
    }
    //get blog list from blog 
    public function getBlogList(){
        $catagories = Catagory::where('is_deleted',0)->get();
        $getBlog = DB::table('blogs')
                        ->join('users','blogs.create_by','=','users.id')
                        ->select('blogs.id','blogs.title','blogs.url','blogs.main_image','blogs.time','blogs.description','blogs.view','users.name')
                        ->paginate(3);
                        
        $data['result'] = array(
            'key' => '200',
            'val'=> $getBlog,
            'catagories'=>$catagories
        );
        return response()->json($data,200);
    }
    //serach blog list 
    public function searchBlogList(){
        
        $cookie = $_COOKIE['urldata'];
        if(empty($cookie)){
            $data['result'] = array(
            'key' => '101',
            'val'=> 'Catagory Url not found!'
        );
        return response()->json($data,200);
        }
        $getCatagory = Catagory::where('url',$cookie)->first();
        if(empty($getCatagory)){
            $data['result'] = array(
            'key' => '101',
            'val'=> 'Catagory data not found!'
        );
        return response()->json($data,200);
        }
        $catagories = Catagory::where('is_deleted',0)->get();
        $getBlog = DB::table('blogs')
                        ->where('catagory_id',$getCatagory->id)
                        ->join('users','blogs.create_by','=','users.id')
                        ->select('blogs.id','blogs.title','blogs.url','blogs.main_image','blogs.time','blogs.description','blogs.view','users.name')
                        ->paginate(3);
                        
        $data['result'] = array(
            'key' => '200',
            'val'=> $getBlog,
            'url'=> Session::get('urldata'),
            'catagories'=>$catagories
        );
        return response()->json($data,200);

    }
    //blog detail function 
    public function getBlogDetail(){
        $cookie = $_COOKIE['blogurl'];
        if(empty($cookie)){
            $data['result'] = array(
            'key' => '101',
            'val'=> 'Blog Url not found!'
        );
        return response()->json($data,200);
        }
        $catagories = Catagory::all();
        $redlep = new Redlep();
        $getBlog1 = Blog::where('url',$cookie)->first();
        //update view data
        $update = Blog::where('id',$getBlog1->id)->update(['view'=>$getBlog1->view+1]);
        $getBlog = DB::table('blogs')
                        ->where('url',$cookie)
                        ->join('users','blogs.create_by','=','users.id')
                        ->select('blogs.id','blogs.title','blogs.url','blogs.detail_image','blogs.time','blogs.description','blogs.long_description','blogs.view','users.name')
                        ->first();

        if(empty($getBlog)){
            $data['result'] = array(
            'key' => '101',
            'val'=> 'Blog Data not found!'
        );
        return response()->json($data,200);
        }
        //get blog comments
        $array = array();
        $getBlogComments = Comment::where('blog_id',$getBlog->id)->orderBy('id','desc')->get();
        if(!empty($getBlogComments)){
            foreach($getBlogComments as $list){
                $array[] = array(
                    'id'=> $list->id,
                    'cname'=> $list->name,
                    'cemail'=> $list->email,
                    'cmessage'=> $list->message,
                    'time'=> $list->time,
                    'picture'=> $redlep->randomProfileImage()
                );
            }
        }
        $data['result'] = array(
            'key' => '200',
            'val'=> $getBlog,
            'catagories'=>$catagories,
            'count' =>count($array),
            'comments'=>$array
        );
        return response()->json($data,200);

    }
    
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
