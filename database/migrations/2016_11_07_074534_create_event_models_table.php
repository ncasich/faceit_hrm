<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('start')->nullable()->default(null);
            $table->dateTime('end')->nullable()->default(null);
            $table->string('title')->nullable()->default(null);
            $table->text('description')->nullable()->default(null);
            $table->string('color')->nullable()->default(null);

            $table->unsignedInteger('manager_id')->nullable()->default(null);
            $table->foreign('manager_id')->references('id')->on('users')->onDelete('set null');

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
        Schema::drop('events');
    }
}
