<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateVehicleNewsTable.
 */
class CreateVehicleNewsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('vehicle_news', function(Blueprint $table) {
            $table->increments('id');
			$table->string('title', 255);
			$table->text('body');

			$table->unsignedBigInteger('car_id');
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
		Schema::disableForeignKeyConstraints();
		Schema::drop('vehicle_news');
	}
}
