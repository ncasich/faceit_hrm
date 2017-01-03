<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>FaceIT HRM</title>
    <link rel="stylesheet" href={{asset('css/app.css')}}>
</head>
<body id="app-layout">
@yield('content')
<script type="text/javascript" src={{asset('js/vendor.js')}}></script>
<script type="text/javascript" src={{asset('js/common.js')}}></script>
<script type="text/javascript" src={{asset('js/app.js')}}></script>
</body>
</html>