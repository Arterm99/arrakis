<?session_start(); ?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8";>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>@yield('title-block')</title>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="/30_my_test/css/css.css">
</head>
<body>


	@include('inc.top')
    @yield('content') <!-- уступать -->

	
    @include('inc.aside') <!-- включать -- 15минута https://www.youtube.com/watch?v=a4DvxcTyU5o> -->
    
</body>
</html>