<!-- Ссылка на общую html-разметку -->


<!-- Начало/Конец кода -->
<?php $__env->startSection('title-block'); ?>Личный кабинет<?php $__env->stopSection(); ?>

<!-- Начало кода -->
<?php $__env->startSection('content'); ?>

<!-- Ошибки -->
<?php echo $__env->make('errors.errors', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>


    Личный кабинет

        <div style="margin: 3%">
            <form method="POST" action="/reg-lc" enctype="multipart/form-data"> <!-- enctype - Значения приходят не как string, а как файлы -->
            <?php echo csrf_field(); ?>
                <p><select autofocus required name="product">
                <option selected disabled>Выберите товар</option>
                    <option value="Молоко">Молоко</option>
                    <option value="Сыры">Сыры</option>
                    <option value="Мясная продукция">Мясная продукция</option>
                    <option value="Фрукты">Фрукты</option>
                    <option value="Овощи">Овощи</option>
                </select></p>
                <input placeholder="Название товара" type="text" name="name" autofocus>
                <br />
                <textarea placeholder="Описание товара" type="text" name="description"> </textarea>
                <br />
                <input type="file" name="profile_image">
          
                <br />
                <input type="reset" value="Очистить"></p>
                <button class="btn btn-primary" type="submit">Добавить</button>
            </form>
        </div>


<!-- Конец кода -->
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\lara\resources\views/lc.blade.php ENDPATH**/ ?>