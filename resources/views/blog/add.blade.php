@extends('dashboard')
@section('maincontent')

<div class="container-fluid">
	<div class="col-xl-9 col-xxl-12">
		<div class="card">
            <div class="card-header">
                <h4 class="card-title">Create Blog</h4>
            </div>
            <div class="card-body">
                <div class="basic-form">
                    <form method="post" enctype="multipart/form-data" action="{{ URL::to('blog/store') }}" >
                        @csrf
                        <input type="hidden" name="blog_id" value="{{ (!empty($blog->id))?$blog->id:'' }}">
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">Title</label>
                            <div class="col-md-10">
                                <input value="{{ (!empty($blog->title))?$blog->title:old('title') }}" type="text" name="title" class="form-control" placeholder="Enter Title">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description</label>
                            <div class="col-md-10">
                                <textarea name="description" class="form-control">{{ (!empty($blog->description))?$blog->description:old('description') }}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">Main Image</label>
                            <div class="col-md-10">
                                <input value="" type="file" name="main_image" class="form-control" placeholder="Select Main Image">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">Detail Image</label>
                            <div class="col-md-10">
                                <input value="" type="file" name="detail_image" class="form-control" placeholder="Select Detail Image">
                            </div>
                        </div>


                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">Select Catagory</label>
                            <div class="col-md-9">
                                <select name="catagory_id" class="form-control">
                                    <option>--Select One--</option>
                                    @foreach($catagories as $catagory)
                                        <option {{ (!empty($blog->catagory_id) && $blog->catagory_id==$catagory->id )?'selected':'' }} value="{{ $catagory->id }}">{{ $catagory->title }}</option>
                                    @endforeach
                            </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Long Description</label>
                            <div class="col-md-10">
                                <div class="card-body">
                                        <textarea name="long_description" class="summernote">
                                            {{ (!empty($blog->long_description))?$blog->long_description:old('long_description') }}
                                        </textarea>
                                    </div>
                                
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
	</div>
</div>
@stop