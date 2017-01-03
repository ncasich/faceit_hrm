<?php

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    protected $permissions;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->permissions = [
            [
                'role' => 'hr',
                'permission' => 'Candidate@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Candidate@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Candidate@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Candidate@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'Company@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Company@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Company@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Company@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'Dictionary@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Dictionary@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Dictionary@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Dictionary@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'Event@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Event@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Event@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Event@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'Participant@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Participant@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Participant@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Participant@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'Sticker@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Sticker@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Sticker@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Sticker@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Sticker@assign',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'User@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'User@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'User@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'User@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'hr',
                'permission' => 'Vacancy@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Vacancy@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Vacancy@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'hr',
                'permission' => 'Vacancy@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],


            [
                'role' => 'user',
                'permission' => 'Candidate@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Company@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Dictionary@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Event@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Event@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'user',
                'permission' => 'Event@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'user',
                'permission' => 'Event@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Participant@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Sticker@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Sticker@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'user',
                'permission' => 'Sticker@create',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'user',
                'permission' => 'Sticker@update',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
            [
                'role' => 'user',
                'permission' => 'Sticker@delete',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'User@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],

            [
                'role' => 'user',
                'permission' => 'Vacancy@read',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ],
        ];

        foreach ($this->permissions as $permission) {
            DB::table('permissions')->insert($permission);
        }
    }
}
