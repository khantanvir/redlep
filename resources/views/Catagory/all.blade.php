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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                @foreach ($catagories as $catagory)
                                <tr>
                                    <th>{{ (!empty($catagory->id))?$catagory->id:'' }}</th>
                                    <td>{{ (!empty($catagory->title))?$catagory->title:'' }}</td>
                                    <td>{{ (!empty($catagory->description))?$catagory->description:'' }}</td>
                                    <td><a class="btn-group btn-group-xs btn-group-solid margin-bottom-5" href="{{ URL::to('catagory/add') }}/{{ $catagory->id }}"><button type="button" class="btn grey">Edit</button></a></td>
                                </tr>
                                @endforeach
                                
                            </tbody>
                        </table>
                        {{ $catagories->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
		
	</div>
</div>
@stop