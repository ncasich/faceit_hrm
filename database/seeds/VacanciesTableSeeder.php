<?php

use Illuminate\Database\Seeder;

class VacanciesTableSeeder extends Seeder
{
    protected $vacancies;

    /**
     * VacanciesTableSeeder constructor.
     */
    public function __construct()
    {
        $this->vacancies = [
            [
                'title'=>'Web Developer',
                'salary'=>'500',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'php, Laravel, yii2, js, jQuery, AngularJS, sql, mySQL, HTML/CSS, SASS/SCSS',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'iOS Developer',
                'salary'=>'600',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'Objective-C/C/C++, programming using iPhone SDK and Xcode, (HTTP, REST, sockets), SQL, SQLite,UI, AutoLayout',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'Ruby on Rails Developer',
                'salary'=>'700',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'OOP, JavaScript, jQuery, CSS, HTML, Ruby, Ruby on Rails,PostgreSQL, MySQL etc, Agile (Scrum, XP), TDD, SOLID,Ruby, Rails 4.*, PostgreSQL, MySQL, Redis, Rspec, Capybara, Cucumber, CoffeeScript, SASS, Vagrant, Chef, RuboCop, JIRA, Bamboo, etc.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'Python/Django Developer',
                'salary'=>'800',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'3+ years of experience working with Python, Experience working with Django/Flask, Experience developing client-server applications and RESTful services, Good spoken English',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'Game Developer',
                'salary'=>'900',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'C, C++, C#, Unity3D',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'Manager',
                'salary'=>'1000',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'Высшее медицинское образование, Опыт на аналогичной должности не менее 3 лет, Ориентированность на результат, лидерские качества, Пользователь ПК (Word, Excel, e-mail, Internet), Наличие водительских прав и опыт вождения от 2 лет.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'System Administrator',
                'salary'=>'1100',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'At least 1-2 years of managing cloud computing infrastructure, 1 year of working within the Microsoft Azure cloud, Experience in server, network and storage configurations and deployments in Azure, Ability to leverage the correct cloud components to meet project requirements, Solid understanding of the Azure on premise integrations, service offerings and connectivity, Past experience in designing and sizing cloud infrastructure to meet project requirements, Understanding and past experience in configuring cloud networks, firewall rules, Active Directory, load balancers and storage resources, Past experience in migrating and scaling a cloud environment between multiple availability zones, Monitoring and troubleshooting experience within Azure, Experience with Amazon EC2, Rackspace, VMWare or Oracle will be considered, but Microsoft Azure is preferred.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'CEO',
                'salary'=>'1200',
                'currency_id'=>'63',
                'location_id'=>'43',
                'lang'=>'English',
                'requirements'=>'27 - 35 лет, предпочтение женщинам; Позитивный, ответственный, педантичный в мелочах; Успешный опыт работы от 2х лет в ресторанном бизнесе, банки, медицина; Системный подход в решении задач; Умение планировать и работать на результат; Приветствуются знания современных тенденций в ресторанном бизнесе; Высшее образование.',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'title'=>'Janitor',
                'salary'=>'3000',
                'currency_id'=>'62',
                'location_id'=>'43',
                'lang'=>'',
                'requirements'=>'Освіта - повна загальна середня',
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
        foreach ($this->vacancies as $vacancy) {
            DB::table('vacancies')->insert($vacancy);
        }
    }
}
