<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateRequestServicesTable.
 */
class CreateRequestServicesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('request_services', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('requirements');
			$table->text('preferrence')->nullable();
			$table->bigInteger('request_id')->unsigned();
			$table->timestamps();
			
			$table->foreign('request_id')
			->references('id')
			->on('user_requests')
			->onDelete('no action');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('request_services');
	}
}
