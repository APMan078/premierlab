<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateMasterCarModelsTable.
 */
class CreateMasterCarModelsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_car_models', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('make_id')->unsigned();
            $table->string('name');
            $table->integer('type_id');

            $table->foreign('make_id')
                ->references('id')
                ->on('master_car_makes')
                ->onDelete('cascade');
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
		Schema::drop('master_car_models');
	}
}
