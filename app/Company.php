<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'link',
        'location_id',
        'info',
    ];

    public static $dictionaryFeilds = [
        'location',
    ];

    /**
     * @param $field
     * @return null
     */
    public function dictionaryValue($field)
    {
        if (!in_array($field, self::$dictionaryFeilds)) {
            throw new EntityNotFoundException('Field ".$field." is not dictionary');
        }
        $model = $this->belongsTo(Dictionary::class, null, null, $field)->first();
        if (empty($model)) {
            return null;
        }
        return $model->value;
    }

    /**
     * @return array|null
     */
    public static function getRules()
    {
        static $rules = null;
        if (empty($rules)) {
            $rules = [
                'title' => 'required',
                'link' => 'url',
                'location_id' => 'exists:dictionaries,id|numeric',
            ];
        }
        return $rules;
    }

    /**
     * @param bool $forView
     * @return mixed
     */
    public static function getCompanies($forView = false)
    {
        return $forView ? Company::pluck('title', 'id') : Company::pluck('id', 'title');
    }
}
