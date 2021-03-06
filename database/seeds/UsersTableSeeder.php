<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    protected $users;

    /**
     * UsersTableSeeder constructor.
     * @param $users
     */
    public function __construct()
    {
        $this->users = [
            [
                'first_name' => 'Аккакий',
                'last_name' => 'Зябликов',
                'patronymic' => 'Илларионович',
                'birthday' => '1980-03-08',
                'position_id' => '1',
                'salary' => '500',
                'currency_id' => '63',
                'residence_id' => '17',
                'cv_src' => 'http://rabota.ua/jobsearch/cvbuilder?resumeId=9195820',
                'location_id' => '50',
                'relocatable' => true,
                'education' => 'ЗНТУ, оператор метлы Nimbus 2000',
                'lang' => 'English, Ukrainian, Russian',
                'email' => 'ncas@ukr.net',
                'phone' => '+38 (095) 333 91 10',
                'skype' => 'nickolas_casich',
                'user_links' => 'https://github.com/azyablikov/',
                'company_id' => '1',
                'linkedin' => 'http://ln.com/zyablik/',
                'facebook' => 'https://www.facebook.com/zyablik/',
                'vk' => 'https://vk.com/zyablik/',
                'google_plus' => 'https://googleplus/zyablik/',
                'notes' => 'Akkakiy Zyablikov note',
                'about' => 'Akkakiy Zyablikov about section',
                'img_name' => 'avatar.jpg',
                'cv_name' => 'cv.pdf',
                'role'=>'user',
                'password' => bcrypt('123456'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'first_name' => 'Илларион',
                'last_name' => 'Пряничкин',
                'patronymic' => 'Кондратьевич',
                'birthday' => '1985-01-01',
                'position_id' => '2',
                'salary' => '600',
                'currency_id' => '63',
                'residence_id' => '24',
                'cv_src' => 'http://rabota.ua/jobsearch/cvbuilder?resumeId=9195820',
                'location_id' => '24',
                'relocatable' => false,
                'education' => 'Техникум шаманов бубнистов',
                'lang' => 'English, Ukrainian, Russian',
                'email' => 'nickolay.casich@gmail.com',
                'phone' => '+38 (095) 444-44-44',
                'skype' => 'illarion.pryanichkin',
                'user_links' => 'https://github.com/ipryanick/',
                'company_id' => '2',
                'linkedin' => 'http://ln.com/pryanik/',
                'facebook' => 'https://www.facebook.com/pryanik/',
                'vk' => 'https://vk.com/pryanik/',
                'google_plus' => 'https://googleplus/pryanik/',
                'notes' => 'Illarion Pryanichkin note',
                'about' => 'Illarion Pryanichkin about section',
                'img_name' => 'avatar.jpg',
                'cv_name' => 'cv.pdf',
                'role'=>'user',
                'password' => bcrypt('123456'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'first_name' => 'Кондрат',
                'last_name' => 'Злюк',
                'patronymic' => 'Степанович',
                'birthday' => '1980-05-09',
                'position_id' => '3',
                'salary' => '555',
                'currency_id' => '63',
                'residence_id' => '25',
                'cv_src' => 'http://rabota.ua/jobsearch/cvbuilder?resumeId=9195820',
                'location_id' => '43',
                'relocatable' => true,
                'education' => 'Курсы швей-гитаристов',
                'lang' => 'English, Ukrainian, Russian',
                'email' => 'nikolay.casich-pylypenko@faceit.com.ua',
                'phone' => '+38 (095) 555-55-55',
                'skype' => 'kondrat.zlyuk',
                'user_links' => 'https://github.com/kazlyuk/',
                'company_id' => '3',
                'linkedin' => 'http://ln.com/kazlyuk/',
                'facebook' => 'https://www.facebook.com/kazlyuk/',
                'vk' => 'https://vk.com/kazlyuk/',
                'google_plus' => 'https://googleplus/kazlyuk/',
                'notes' => 'Kondrat Zlyuk note',
                'about' => 'Kondrat Zlyuk about section',
                'img_name' => 'avatar.jpg',
                'cv_name' => 'cv.pdf',
                'role'=>'user',
                'password' => bcrypt('123456'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'first_name' => 'Джим',
                'last_name' => 'Морисон',
                'patronymic' => 'Васильевич',
                'birthday' => '1979-06-10',
                'position_id' => '4',
                'salary' => '666',
                'currency_id' => '63',
                'residence_id' => '25',
                'cv_src' => 'http://rabota.ua/jobsearch/cvbuilder?resumeId=9195820',
                'location_id' => '43',
                'relocatable' => true,
                'education' => 'Где-то там учился, да',
                'lang' => 'English',
                'email' => 'j.morison@gmail.com',
                'phone' => '+38 (095) 666-66-66',
                'skype' => 'jim.morison',
                'user_links' => 'https://github.com/jmorison/',
                'company_id' => '3',
                'linkedin' => 'http://ln.com/jmorison/',
                'facebook' => 'https://www.facebook.com/jmorison/',
                'vk' => 'https://vk.com/jmorison/',
                'google_plus' => 'https://googleplus/jmorison/',
                'notes' => 'Jim Morison note',
                'about' => 'Jim Morison about section',
                'img_name' => 'avatar.jpg',
                'cv_name' => 'cv.pdf',
                'role'=>'user',
                'password' => bcrypt('123456'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'first_name' => 'Курт',
                'last_name' => 'Кобейн',
                'patronymic' => 'Степанович',
                'birthday' => '1978-07-11',
                'position_id' => '5',
                'salary' => '777',
                'currency_id' => '63',
                'residence_id' => '25',
                'cv_src' => 'http://rabota.ua/jobsearch/cvbuilder?resumeId=9195820',
                'location_id' => '43',
                'relocatable' => false,
                'education' => 'Rape me, detcka school',
                'lang' => 'English',
                'email' => 'kurt.kobain@gmail.com',
                'phone' => '+38 (095) 777-77-55',
                'skype' => 'kurt.kobain',
                'user_links' => 'https://github.com/kurt.kobain/',
                'company_id' => '3',
                'linkedin' => 'http://ln.com/kurtkobain/',
                'facebook' => 'https://www.facebook.com/kurtkobain/',
                'vk' => 'https://vk.com/kurtkobain/',
                'google_plus' => 'https://googleplus/kurtkobain/',
                'notes' => 'Kurt Kobain note',
                'about' => 'Kurt Kobain about section',
                'img_name' => 'avatar.jpg',
                'cv_name' => 'cv.pdf',
                'role'=>'user',
                'password' => bcrypt('123456'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'first_name' => 'Александр',
                'last_name' => 'Бородач',
                'patronymic' => 'Радионович',
                'birthday' => '1976-08-04',
                'position_id' => '3',
                'salary' => '888',
                'currency_id' => '63',
                'residence_id' => '25',
                'cv_src' => 'http://rabota.ua/jobsearch/cvbuilder?resumeId=9195820',
                'location_id' => '43',
                'relocatable' => true,
                'education' => 'Охранников До-Ре-Ми',
                'lang' => 'Russian',
                'email' => 'a.borodach@mail.ru',
                'phone' => '+38 (088) 888-88-88',
                'skype' => 'sahka.borodach',
                'user_links' => 'https://github.com/sahkaborodach/',
                'company_id' => '3',
                'linkedin' => 'http://ln.com/sahkaborodach/',
                'facebook' => 'https://www.facebook.com/sahkaborodach/',
                'vk' => 'https://vk.com/sahkaborodach/',
                'google_plus' => 'https://googleplus/sahkaborodach/',
                'notes' => 'Borodach note',
                'about' => 'Borodach Zlyuk about section',
                'img_name' => 'avatar.jpg',
                'cv_name' => 'cv.pdf',
                'role'=>'hr',
                'password' => bcrypt('123456'),
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
        ];
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->users as $user) {
            DB::table('users')->insert($user);
        }
    }
}
