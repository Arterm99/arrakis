@section('aside')
<?php 

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
                 <p>Продуктовая панель</p>
             </div>
             <div style="display: flex";>
                 <?php foreach($tovar as $key) { ?>
                     <div class="alert alert-info"
                         <h3> <?php echo $key->name  ?> </h3>
                         <p> <?php echo $key->description  ?> </p>
                         <p> <?php echo $key->product  ?> </p>
                         <p> <img src="/storage/app/{{ $key->profile_image }}" </p>
                         <p> <?php echo 'Производство '.session('login')  ?> </p>
                     </div>
                     <?php } ?>
             </div>
         </div>
<?php
        }}


$t = new AdminPanelController2;
$t->tovar()


?>