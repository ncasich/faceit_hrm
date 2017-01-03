<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dictionary extends Model
{
    const TYPE_POSITION = 1;
    const TYPE_CURRENCY = 2;
    const TYPE_RESIDENCE = 3;
    const TYPE_LOCATION = 4;

    protected $primaryKey = 'id';
    protected $fillable = [
        'value',
        'type',
    ];

    /**
     * @param $type
     * @param bool $forView
     * @return mixed
     */
    public static function getDictionary($type, $forView = false)
    {
        $data = Dictionary::where('type', '=', $type);
        return $forView ? $data->pluck('value', 'id') : $data->pluck('id', 'value');
    }

    /**
     * @param bool $forView
     * @return array|null
     */
    public static function getDictionaryTypes($forView = false)
    {
        static $list = null;

        if (empty($list)) {
            $list = [
                self::TYPE_CURRENCY => "Валюта",
                self::TYPE_RESIDENCE => "Город проживания",
                self::TYPE_POSITION => "Вакансия",
                self::TYPE_LOCATION => "Город работы",
            ];
        }

        return $list;
    }


    /**
     * @return array|null
     */
    public static function getRules()
    {
        static $rules = null;
        if (empty($rules)) {
            $rules = [
                'value' => 'required',
            ];
        }
        return $rules;
    }
}