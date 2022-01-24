<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateSchedulesTable.
 */
class CreateSchedulesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('schedules', function(Blueprint $table) {
            $table->increments('id');
			$table->date('schedule');
			$table->string('type');
            $table->bigInteger('service_id');
            $table->bigInteger('car_id')->unsigned();
			$table->timestamps();

			$table->foreign('car_id')
                ->references('id')
                ->on('vehicles')
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
		Schema::drop('schedules');
	}
}
