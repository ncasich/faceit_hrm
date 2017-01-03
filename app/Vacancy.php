<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\History;

class Vacancy extends Model
{

    use SoftDeletes;
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'salary',
        'currency_id',
        'location_id',
        'lang',
        'requirements',
    ];

    public static $dictionaryFeilds = [
        'currency',
        'location'
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
                'currency_id' => 'exists:dictionaries,id|numeric',
                'location_id' => 'exists:dictionaries,id|numeric',
            ];
        }
        return $rules;
    }

    /**
     * @return mixed
     */
    public function history(){
        return $this->hasMany(History::class)->orderBy('created_at', 'desc');
    }
}
