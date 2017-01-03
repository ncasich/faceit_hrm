<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('patronymic')->nullable()->default(null);
            $table->date('birthday')->nullable()->default(null);
            $table->float('salary')->nullable()->default(null);

            $table->integer('position_id')->unsigned()->nullable()->default(null);
            $table->foreign('position_id')->references('id')->on('dictionaries')->onDelete('restrict');

            $table->integer('currency_id')->unsigned()->nullable()->default(null);
            $table->foreign('currency_id')->references('id')->on('dictionaries')->onDelete('restrict');

            $table->integer('residence_id')->unsigned()->nullable()->default(null);
            $table->foreign('residence_id')->references('id')->on('dictionaries')->onDelete('restrict');

            $table->integer('location_id')->unsigned()->nullable()->default(null);
            $table->foreign('location_id')->references('id')->on('dictionaries')->onDelete('restrict');

            $table->integer('company_id')->unsigned()->nullable()->default(null);
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('restrict');


            $table->string('cv_src');
            $table->boolean('relocatable')->nullable()->default(false);
            $table->string('education')->nullable()->default(null);
            $table->string('lang')->nullable()->default(null);
            $table->string('email')->unique()->nullable();
            $table->string('phone')->unique()->nullable()->default(null);
            $table->string('skype')->unique()->nullable()->default(null);
            $table->string('user_links')->nullable()->default(null);
            $table->string('linkedin')->nullable()->default(null);
            $table->string('facebook')->nullable()->default(null);
            $table->string('vk')->nullable()->default(null);
            $table->string('google_plus')->nullable()->default(null);
            $table->text('notes')->nullable()->default(null);
            $table->text('about')->nullable()->default(null);
            $table->string('img_name')->nullable()->default(null);
            $table->string('cv_name')->nullable()->default(null);
            $table->string('password')->nullable()->default(null);

            $table->string('role')->nullable()->default(null);

            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
