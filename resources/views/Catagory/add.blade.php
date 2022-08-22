@extends('dashboard')
@section('maincontent')
<div class="container-fluid">
	<div class="col-xl-6 col-xxl-12">
		<div class="card">
            <div class="card-header">
                <h4 class="card-title">Vertical Form</h4>
            </div>
            <div class="card-body">
                <div class="basic-form">
                    <form method="post" action="{{ URL::to('catagory/store') }}" >
                        @csrf
                        <input type="hidden" name="catagory_id" value="{{ (!empty($category))?$category->id:'' }}">
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input value="{{ (!empty($category))?$category->title:'' }}" type="text" name="title" class="form-control" placeholder="Enter Title">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <textarea name="description" class="form-control">{{ (!empty($category))?$category->description:'' }}</textarea>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	</div>
</div>
@stop