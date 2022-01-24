<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateFleetsTable.
 */
class CreateFleetsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('fleets', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('contact')->nullable();
            $table->longText('description')->nullable();
            $table->longText('address')->nullable();
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->string('tin')->nullable();
            $table->bigInteger('fleet_admin')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('fleet_admin')
                ->references('id')
                ->on('users')
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
		Schema::drop('fleets');
	}
}
