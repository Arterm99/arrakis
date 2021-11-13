<?php $__env->startSection('top'); ?>

<?php 
// Расширяем  контроллер
use App\Http\Controllers\UsersController;
use App\Models\Users;


class LoginUser extends UsersController {
    function user() {
        $user = Users::all();
        ?>
        
        <!-- Сессия -->
        <?php if(session()->has('login')): ?>
                <div class="login alert alert-info">
                <?php echo 'Приветствуем Вас, '.session('login'); ?>
                <div class="remove-player">
				<button class="btn btn-warning" onclick="window.location.href = '/exit-admin';">Выйти</a></button>
            </div>
        <?php endif; ?>
    <?php     
    }}
    $user = new LoginUser;
    $user->user();
?>



</div><?php /**PATH C:\xampp\htdocs\lara\resources\views/inc/top.blade.php ENDPATH**/ ?>