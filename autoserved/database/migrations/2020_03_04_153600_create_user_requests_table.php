<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateUserRequestsTable.
 */
class CreateUserRequestsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_requests', function(Blueprint $table) {
            $table->bigIncrements('id');
			$table->bigInteger('car_id')->unsigned();
            $table->longText('preferred_schedule')->nullable();
            $table->string('type');
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->string('status');
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
		Schema::drop('user_requests');
	}
}
