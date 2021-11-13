<!-- Ссылка на общую html-разметку -->
@extends('layouts.app')

<!-- Начало/Конец кода -->
@section('title-block')Личный кабинет@endsection

<!-- Начало кода -->
@section('content')

<!-- Ошибки -->
@include('errors.errors')


    Личный кабинет

        <div style="margin: 3%">
            <form method="POST" action="/reg-lc" enctype="multipart/form-data">
            @csrf
                <p><select autofocus required name="product">
                <option selected disabled>Выберите товар</option>
                    <option value="Молоко">Молочная продукция</option>
                    <option value="Сыры">Сыры</option>
                    <option value="Мясная продукция">Пироги</option>
                    <option value="Фрукты">Фрукты</option>
                    <option value="Фрукты">Ягоды</option>
                    <option value="Фрукты">Овощи</option>
                    <option value="Овощи">Вина</option>
                </select></p>

                <p><select required name="category">
                <option selected disabled >Выберите подкатегорию</option>
                    <option value="Молоко">Молоко</option>
                    <option value="Сыры">Творог</option>
                    <option value="Мясная продукция">Сметана</option>
                    <option value="Мясная продукция">Сыр российский</option>
                    <option value="Мясная продукция">Сыр голландский</option>
                    <option value="Фрукты">Сытные</option>
                    <option value="Фрукты">Сладкие</option>
                    <option value="Овощи">Яблоки</option>
                    <option value="Фрукты">Груши</option>
                    <option value="Фрукты">Вишня</option>
                    <option value="Овощи">Черешня</option>
                    <option value="Фрукты">Огурцы - салатные</option>
                    <option value="Фрукты">Огурцы - белошипные</option>
                    <option value="Фрукты">Огурцы - черношипные</option>
                    <option value="Овощи">Помидоры</option>
                    <option value="Фрукты">Кабачки</option>
                    <option value="Овощи">Баклажаны</option>
                    <option value="Фрукты">Фрукты</option>
                    <option value="Овощи">Бальзам «Огни Марий Эл»</option>

                </select></p>
                <input placeholder="Наименование компании" type="text" name="company" autofocus>
                <br />
                <input placeholder="Название товара" type="text" name="name" autofocus>
                <br />
                <input placeholder="Цена" type="text" name="price" >
                <br />
                <input placeholder="Вес" type="text" name="weght" >
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
@endsection