<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateMasterCarSeriesTable.
 */
class CreateMasterCarSeriesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_car_series', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('model_id')->unsigned();
            $table->bigInteger('gen_id')->unsigned()->nullable();
            $table->string('name');
            $table->integer('type_id');
            $table->timestamps();

            $table->foreign('model_id')
                ->references('id')
                ->on('master_car_models')
                ->onDelete('cascade');
            $table->foreign('gen_id')
                ->references('id')
                ->on('master_car_generations')
                ->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('master_car_series');
	}
}
