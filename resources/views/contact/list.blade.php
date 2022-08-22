@extends('dashboard')
@section('maincontent')
<div class="container-fluid">
	<div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">{{ (!empty($page_title))?$page_title:'' }}</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                @foreach ($items as $item)
                                <tr>
                                    <th>{{ (!empty($item->id))?$item->id:'' }}</th>
                                    <td>{{ (!empty($item->name))?$item->name:'' }}</td>
                                    <td>{{ (!empty($item->email))?$item->email:'' }}</td>
                                    <td>{{ (!empty($item->phone))?$item->phone:'' }}</td>
                                    <td>{{ (!empty($item->message))?$item->message:'' }}</td>
                                    <td>Confirm</td>
                                </tr>
                                @endforeach
                                
                            </tbody>
                        </table>
                        {{ $items->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
		
	</div>
</div>
@stop