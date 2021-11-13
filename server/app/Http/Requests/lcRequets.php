<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class lcRequets extends FormRequest  {
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()  {
        return [

                'company' => 'required|min:1|max:50',
                'name' => 'required|min:1|max:50',
                'product' => 'required|min:1|max:50',
                // 'description' => 'required|min:3|max:200',
                'category' => 'required',
                // 'weght' => 'required|min:1|max:200',
                'price' => 'required',
                'profile_image' => 'required|mimes:png,jpg,jpeg|max:2048',
        ];
    }


    public function messages() {
        return [

            'name.required' => 'Поле Имя является обязательным',
            'product.required' => 'Не выбран товар',
            'description.required' => 'Поле имя является обязательным',
            'profile_image.required' => 'Загрузите другую фотографию',
            
            'name.max' => 'Поле Имя должно содержать не более 50 символов',
            'description.min' => 'Поле Описание должно содержать не менее 3 символов',
            'description.max' => 'Поле Описание должно содержать не более 200 символов',
            'profile_image.mimes' => 'Изображение должно быть файлом типа: png, jpg, jpeg',
            'profile_image.max' => 'Размер изображения профиля не должен превышать 2 мегабайта',
        ];
    }

}
