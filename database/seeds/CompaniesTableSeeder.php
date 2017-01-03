<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{
    protected $companies;

    /**
     * CompaniesTableSeeder constructor.
     */
    public function __construct()
    {
        $this->companies = [
            [
                'title' => 'FaceIT',
                'link' => 'http://faceit-team.com/',
                'location_id' => 43,
                'info' => 'Face IT is a sprightly and energetic web development company delivering web development services of any complexity to clients worldwide. We are a young company and it\'s our plus, because it means that we can provide you with unexpected, but dependable and successful solutions, so our age is your advantage too. In 2009 two talented people opened the doors of FaceIT company with the view of bringing a new qualitative product and creative technology-based solutions to a customer not only in Ukraine, but also all over the globe. In the world captured by new technologies both the business and reputation have gone forward quickly regardless of strong competition. Now more than 50 employees are working in our team. Such a grand and seasoned staff was formed thank to intelligent management and high professionalism. Each member of our company proved that they can be an efficient link in the chain, because working with us is prestigious and future-oriented. It\'s a well-known fact that developers from Eastern Europe are highly-prized on the world market, so it\'s one more fact in favor of collaboration with us, the company that is on a solid growth path.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP')
            ],
            [
                'title' => 'LightIT',
                'link' => 'http://light-it.net/',
                'location_id' => 43,
                'info' => 'Разнообразный опыт работы в IT-сфере на протяжении последних 7 лет позволяет нам считать себя настоящими экспертами IT-рынка, способными улучшить бизнес-процессы внутри проекта и привнести значимый вклад в его развитие. Каждый год мы ставим перед собой цель сделать наш сервис еще более эффективным, еще более функциональными, еще более клиенториентированным. Мы рады видеть, что все приложенные усилия по развитию компании, в итоге приводят нас к интересным проектам и хорошему отношению со стороны сотрудников и клиентов. Информационные технологии – это наша страсть, и мы вкладываем всю душу в проекты, над которыми работаем.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP')
            ],
            [
                'title' => 'DevIT',
                'link' => 'http://devit-team.com/',
                'location_id' => 43,
                'info' => 'no info about this company',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP')
            ],
            [
                'title' => 'Squro',
                'link' => 'http://squro.com/',
                'location_id' => 43,
                'info' => 'Squro — это активно развивающаяся IT компания, которая предоставляет широкий спектр высококачественных продуктов, решений и сервисов в сфере информационных технологий. Основными направлениями нашей деятельности являются разработка интернет-проектов различного уровня сложности, создание систем автоматизации бизнеса и IT-консалтинг. На сегодняшний день наша компания представлена несколькими офисами, которые расположены в Запорожье, Киеве и за рубежом.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP')
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
        foreach ($this->companies as $company) {
            DB::table('companies')->insert($company);
        }
    }
}
