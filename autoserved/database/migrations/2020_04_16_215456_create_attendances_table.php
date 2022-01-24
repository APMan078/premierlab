<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateAttendancesTable.
 */
class CreateAttendancesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('attendances', function(Blueprint $table) {
            $table->increments('id');
			$table->unsignedBigInteger('user_id')->index();
			$table->unsignedBigInteger('service_id')->nullable()->index();
			$table->date('date');
			$table->datetime('time_in')->nullable();
			$table->datetime('time_out')->nullable();
			$table->enum('day', [
				'monday', 'tuesday', 'wednesday',
				'thursday', 'friday', 'saturday',
				'sunday'
			]);

			$table->timestamps();
			$table->softDeletes();

			$table->foreign('user_id')->references('id')
				->on('users')->onDelete('cascade');

			$table->foreign('service_id')->references('id')
				->on('shop_services')->onUpdate('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('attendances');
	}
}
