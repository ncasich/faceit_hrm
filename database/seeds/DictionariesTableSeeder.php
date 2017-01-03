<?php

use Illuminate\Database\Seeder;
use App\Dictionary;


class DictionariesTableSeeder extends Seeder
{
    protected $positions;
    protected $cities;
    protected $currencies;
    protected $companies;

    /**
     * DictionariesTableSeeder constructor.
     *
     */
    public function __construct()
    {
        $this->positions = [
            'Web Developer',
            'iOS Developer',
            'Ruby Developer',
            'Python Developer',
            'Game Developer',
            'Manager',
            'CEO',
            'System Administrator',
            'Janitor',
        ];
        $this->cities = [
            'Симферополь',
            'Николаев ',
            'Харьков',
            'Винница',
            'Днепр',
            'Донецк',
            'Житомир',
            'Запорожье',
            'Ивано-Франковск',
            'Кропивницкий',
            'Луганск',
            'Луцк',
            'Львов',
            'Николаев',
            'Одесса',
            'Полтава',
            'Ровно',
            'Сумы',
            'Тернополь',
            'Ужгород',
            'Харьков',
            'Херсон',
            'Хмельницкий',
            'Черкассы',
            'Чернигов',
            'Черновцы',
        ];
        $this->currencies = [
            'UAH',
            'USD',
            'По договоренности',
        ];
    }


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->proceed($this->positions, Dictionary::TYPE_POSITION);
        $this->proceed($this->cities, Dictionary::TYPE_RESIDENCE);
        $this->proceed($this->cities, Dictionary::TYPE_LOCATION);
        $this->proceed($this->currencies, Dictionary::TYPE_CURRENCY);
    }

    protected function proceed(array $values, $type)
    {
        foreach ($values as $value) {
            DB::table('dictionaries')->insert([
                'value' => $value,
                'type' => $type,
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ]);
        }
    }
}
