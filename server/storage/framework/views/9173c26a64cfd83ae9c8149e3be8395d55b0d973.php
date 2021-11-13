<!-- Ссылка на общую html-разметку -->


<!-- Начало кода -->
<?php $__env->startSection('title-block'); ?>Главная<?php $__env->stopSection(); ?>

<!-- Начало кода -->
<?php $__env->startSection('content'); ?>

<!-- Ошибки -->
<?php echo $__env->make('errors.errors', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

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
					<?php echo csrf_field(); ?>
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
					<?php echo csrf_field(); ?>
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
	/*
	echo "Текущая дата и время";
	echo date(DATE_RSS); // Вывод времени
	?>
	*/
?>


<!-- Конец кода -->
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\lara\resources\views/index.blade.php ENDPATH**/ ?>