<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStickersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stickers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('text')->nullable()->default(null);
            $table->string('color')->nullable()->default(null);

            $table->integer('author_id')->unsigned()->nullable()->default(null);
            $table->foreign('author_id')->references('id')->on('users');

            $table->integer('addressee_id')->unsigned()->nullable()->default(null);
            $table->foreign('addressee_id')->references('id')->on('users');

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
        Schema::drop('stickers');
    }
}
