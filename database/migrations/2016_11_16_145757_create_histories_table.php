<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('user_id')->nullable()->default(null);
            $table->foreign('user_id')->references('id')->on('users');

            $table->unsignedInteger('vacancy_id')->nullable()->default(null);
            $table->foreign('vacancy_id')->references('id')->on('vacancies');

            $table->unsignedInteger('manager_id')->nullable()->default(null);
            $table->foreign('manager_id')->references('id')->on('users');

            $table->unsignedInteger('action_type')->nullable()->default(null);
            $table->unsignedInteger('old_val')->nullable()->default(null);
            $table->unsignedInteger('new_val')->nullable()->default(null);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('histories');
    }
}
