<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOwnerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owner', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('contactno');
            $table->string('email');
            $table->tinyInteger('status')->default(1);
            $table->integer('created_by')->nullable();
            // $table->datetime('created_date_time')->nullable();
            // $table->String('created_ip')->nullable();
            // $table->integer('modified_by')->nullable();
            // $table->datetime('modified_date_time')->nullable();
            // $table->string('modified_ip')->nullable();
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
        Schema::dropIfExists('owner');
    }
}
