<?session_start(); ?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8";>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php echo $__env->yieldContent('title-block'); ?></title>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="/30_my_test/css/css.css">
</head>
<body>


	<?php echo $__env->make('inc.top', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->yieldContent('content'); ?> <!-- уступать -->

	
    <?php echo $__env->make('inc.aside', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?> <!-- включать -- 15минута https://www.youtube.com/watch?v=a4DvxcTyU5o> -->
    
</body>
</html><?php /**PATH C:\xampp\htdocs\Agro\resources\views/layouts/app.blade.php ENDPATH**/ ?>