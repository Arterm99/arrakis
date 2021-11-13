<?php $__env->startSection('aside'); ?>
<?php 
// Расширяем  контроллер
use App\Http\Controllers\AdminPanelController;
use App\Models\AdminPanel;

    class AdminPanelController2 extends AdminPanelController {
        function tovar() {
            $tovar = AdminPanel::all();

?>
         <div classs="aside" style="margin: 10%">
             <div >
             <hr>
                 <h4>Панель</h4>
                 <p>Это просто панель</p>
             </div>
             <div style="display: flex";>
                 <?php foreach($tovar as $key) { ?>
                     <div class="alert alert-info"
                         <h3> <?php echo $key->name  ?> </h3>
                         <p> <?php echo $key->description  ?> </p>
                         <p> <?php echo $key->product  ?> </p>
                         <p> <img src="/storage/app/<?php echo e($key->profile_image); ?>" </p>
                         <p> <?php echo 'Производство '.session('login')  ?> </p>
                     </div>
                     <?php } ?>
             </div>
         </div>
<?php
        }}


$t = new AdminPanelController2;
$t->tovar()

// НЕ УДАЧНАЯ ПОПЫТКА СОЕДЕНИТЬСЯ С  aside.blade.php    
/*        <!-- @foreach ($data as $key)
        {{ $key->name }}
           {{ $key->description }}
           @endforeach --> */
?>

<!-- <div classs="aside" style="margin: 10%">
    <div >
    <hr>
        <h4>Панель</h4>
        <p>Это просто боковая панель</p>
    </div>
    <div style="display: flex";>
        <?php 
            for ($i=0; $i < 5; $i++) { 
                echo "<div style='margin: 10px;'>
                    Товар $i 
                    </div>";
            }
        ?>
    </div> -->

    <?php /**PATH C:\xampp\htdocs\lara\resources\views/inc/aside.blade.php ENDPATH**/ ?>