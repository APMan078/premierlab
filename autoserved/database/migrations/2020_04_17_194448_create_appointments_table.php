<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateAppointmentsTable.
 */
class CreateAppointmentsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('appointments', function(Blueprint $table) {
            $table->increments('id');
			$table->unsignedBigInteger('user_id')->index();
			$table->unsignedBigInteger('shop_id')->index();
			$table->boolean('cancelled')->default(false);
			$table->json('services');
			$table->datetime('schedule_time');

			$table->timestamps();
			$table->softDeletes();
			
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onDelete('cascade');

			$table->foreign('shop_id')
				->references('id')
				->on('shops')
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
		Schema::drop('appointments');
	}
}
