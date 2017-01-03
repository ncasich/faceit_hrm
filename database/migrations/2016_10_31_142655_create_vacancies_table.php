<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacanciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->float('salary')->nullable()->default(null);

            $table->integer('currency_id')->unsigned()->nullable()->default(null);
            $table->foreign('currency_id')->references('id')->on('dictionaries')->onDelete('restrict');

            $table->integer('location_id')->unsigned()->nullable()->default(null);
            $table->foreign('location_id')->references('id')->on('dictionaries')->onDelete('restrict');

            $table->string('lang')->nullable()->default(null);
            $table->text('requirements')->nullable()->default(null);
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
        Schema::drop('vacancies');
    }
}
