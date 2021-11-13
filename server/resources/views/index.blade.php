<!-- Ссылка на общую html-разметку -->
@extends('layouts.app')

<!-- Начало кода -->
@section('title-block')Главная@endsection

<!-- Начало кода -->
@section('content')

<!-- Ошибки -->
@include('errors.errors')

<?php

// require_once ('head.php');

		function Reg() {  ?>
			<div class="container">
			<div class="row">
			<div class="col">
			<div class="search-form">
				<div>
					<h3>Форма регистрации</h3>
				</div>
				<div>
					<form method="POST" action="/reg">
					@csrf
						<input class="form-control" placeholder="Введите логин" type="text" name="login" autofocus>
						<br />
						<input class="form-control" placeholder="Введите имя" type="text" name="name">
						<br />
						<input class="form-control" placeholder="Введите email" type="text" name="email">
						<br />
						<input class="form-control" placeholder="Введите пароль" type="password" name="password">
						<br />
						<button class="btn btn-primary" type="submit">Зарегистрироваться</button>
					</form>
				</div>
			</div> </div>

			<div class="col">
			<div class="search-form">
				<div>
					<h3>Форма авторизации</h3>
				</div>
				<div>
					<form method="POST" action="/auth">
					@csrf
						<input class="form-control" placeholder="Введите логин" type="text" name="login">
						<br />
						<input class="form-control" placeholder="Введите пароль" type="password" name="password">
						<br />
						<button class="btn btn-primary" type="submit">Войти в кабинет</button>
					</form>
				</div>
			</div> </div>
		</div></div>
	<?php
	}

	// Куки
	if (@!$_COOKIE['user']) {
		reg();
	} else {
		echo "Вы, ".$_COOKIE['user']. ", уже вошли!<br \>"; 	?>
			<h3> Что бы выйти, нажмите <a href="/30_my_test/validation-form/exit/exit.php"><b>Выход</b></h3> 
			
				
<?php
}

?>


<!-- Конец кода -->
@endsection