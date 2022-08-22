<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Focus - Bootstrap Admin Dashboard </title>
    
    <link rel="icon" type="image/png" sizes="16x16" href="{{ URL::to('public/admin/assets/images/favicon.png') }}">
    <link rel="stylesheet" href="{{ URL::to('public/admin/assets/vendor/owl-carousel/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ URL::to('public/admin/assets/vendor/owl-carousel/css/owl.theme.default.min.css') }}">
    <link href="{{ URL::to('public/admin/assets/vendor/jqvmap/css/jqvmap.min.css') }}" rel="stylesheet">
    <link href="{{ URL::to('public/admin/assets/css/style.css') }}" rel="stylesheet">
    <link href="{{ URL::to('public/admin/assets/vendor/summernote/summernote.css') }}" rel="stylesheet">
</head>

<body>
    <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    <div id="main-wrapper">
        <div class="nav-header">
            <a href="index.html" class="brand-logo">
                <img class="logo-abbr" src="{{ URL::to('public/admin/assets/images/logo.png') }}" alt="">
                <img class="logo-compact" src="{{ URL::to('public/admin/assets/images/logo-text.png') }}" alt="">
                <img class="brand-title" src="{{ URL::to('public/admin/assets/images/logo-text.png') }}" alt="">
            </a>

            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="search_bar dropdown">
                                <span class="search_icon p-3 c-pointer" data-toggle="dropdown">
                                    <i class="mdi mdi-magnify"></i>
                                </span>
                                <div class="dropdown-menu p-0 m-0">
                                    <form>
                                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                                    </form>
                                </div>
                            </div>
                        </div>

                        <ul class="navbar-nav header-right">
                            <li class="nav-item dropdown notification_dropdown">
                                
                            </li>
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <i class="mdi mdi-account"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="./app-profile.html" class="dropdown-item">
                                        <i class="icon-user"></i>
                                        <span class="ml-2">Profile </span>
                                    </a>
                                    <a href="./email-inbox.html" class="dropdown-item">
                                        <i class="icon-envelope-open"></i>
                                        <span class="ml-2">Inbox </span>
                                    </a>
                                    <?php if(Auth::check()){ ?>
                                    <a href="{{ URL::to('admin/logout') }}" class="dropdown-item">
                                        <i class="icon-key"></i>
                                        <span class="ml-2">Logout </span>
                                    </a>
                                    <?php } ?>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="quixnav">
            <div class="quixnav-scroll">
                <ul class="metismenu" id="menu">
                    <li class="nav-label first">Main Menu</li>
                    <li class=""><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-single-04"></i><span class="nav-text">Category</span></a>
                        <ul aria-expanded="false">
                            <li><a href="{{ URL::to('catagory/add') }}">Add</a></li>
                            <li><a href="{{ URL::to('catagory/all') }}">All</a></li>
                        </ul>
                    </li>
                    <li class=""><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-single-04"></i><span class="nav-text">Contact</span></a>
                        <ul aria-expanded="false">
                            <li><a href="{{ URL::to('contact/list') }}">Contact List</a></li>
                        </ul>
                    </li>


                    <li class="nav-label">Apps</li>
                    
                </ul>
            </div>


        </div>
        <div class="content-body">
            <!-- row -->
            <div class="row">
                        <div class="col-md-12">
                            @if(Session::has('success'))
                            <div class="alert alert-success">
                                <strong>{{ Session::get('success') }}</strong>
                            </div>
                            @endif
                            @if(Session::has('error'))
                            <div class="alert alert-danger">
                                <strong>{{ Session::get('error') }}</strong>
                            </div>
                            @endif

                            @if(count($errors) > 0)
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                            @endif
                        </div>
                    </div>
            @yield('maincontent')

        </div>
        <div class="footer">
            <div class="copyright">
                <p>Copyright © Designed &amp; Developed by <a href="#" target="_blank">Tanvir</a> 2019</p>
                <p>Distributed by <a href="#" target="_blank">Redlep IT</a></p> 
            </div>
        </div>


    </div>
    <!-- Required vendors -->
    <script src="{{ URL::to('public/admin/assets/vendor/global/global.min.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/js/quixnav-init.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/js/custom.min.js') }}"></script>


    <!-- Vectormap -->
    <script src="{{ URL::to('public/admin/assets/vendor/raphael/raphael.min.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/vendor/morris/morris.min.js') }}"></script>


    <script src="{{ URL::to('public/admin/assets/vendor/circle-progress/circle-progress.min.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/vendor/chart.js') }}"></script>

    <script src="{{ URL::to('public/admin/assets/vendor/gaugeJS/dist/gauge.min.js') }}"></script>

    <!--  flot-chart js -->
    <script src="{{ URL::to('public/admin/assets/vendor/flot/jquery.flot.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/vendor/flot/jquery.flot.resize.js') }}"></script>

    <!-- Owl Carousel -->
    <script src="{{ URL::to('public/admin/assets/vendor/owl-carousel/js/owl.carousel.min.js') }}"></script>

    <!-- Counter Up -->
    <script src="{{ URL::to('public/admin/assets/vendor/jqvmap/js/jquery.vmap.min.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/vendor/jqvmap/js/jquery.vmap.usa.js') }}"></script>
    <script src="{{ URL::to('public/admin/assets/vendor/jquery.counterup/jquery.counterup.min.js') }}"></script>


    <script src="{{ URL::to('public/admin/assets/js//dashboard/dashboard-1.js') }}"></script>
    <!-- Summernote -->
    <script src="{{ URL::to('public/admin/assets/vendor/summernote/js/summernote.min.js') }}"></script>
    <!-- Summernote init -->
    <script src="{{ URL::to('public/admin/assets/js/plugins-init/summernote-init.js') }}"></script>

</body>

</html>