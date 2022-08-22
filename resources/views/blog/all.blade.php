@extends('dashboard')
@section('maincontent')
<div class="container-fluid">
	<div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Basic</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Main Image</th>
                                    <th>Detail Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                @foreach ($blogs as $blog)
                                <tr>
                                    <th>{{ (!empty($blog->id))?$blog->id:'' }}</th>
                                    <td>{{ (!empty($blog->title))?$blog->title:'' }}</td>
                                    <td>{{ (!empty($blog->description))?$blog->description:'' }}</td>
                                    <td><img src="{{ URL::to('public/assets/blog/main/'.$blog->main_image) }}" height="150px" width="120px"></td>
                                    <td><img src="{{ URL::to('public/assets/blog/'.$blog->detail_image) }}" height="120px" width="300px"></td>
                                    <td><a class="btn-group btn-group-xs btn-group-solid margin-bottom-5" href="{{ URL::to('blog/add/'.$blog->id) }}"><button type="button" class="btn grey">Edit</button></a></td>
                                </tr>
                                @endforeach
                                
                            </tbody>
                        </table>
                        {{ $blogs->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
		
	</div>
</div>
@stop