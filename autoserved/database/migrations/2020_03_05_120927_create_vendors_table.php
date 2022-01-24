<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateVendorsTable.
 */
class CreateVendorsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('vendors', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('type');
            $table->string('contact')->nullable();
            $table->longText('description')->nullable();
            $table->longText('address')->nullable();
            $table->string('city')->nullable();
            $table->string('zip')->nullable();
            $table->string('longitude')->nullable();
			$table->string('latitude')->nullable();
			$table->string('tin')->nullable();
            $table->text('payment_method')->nullable();
            $table->string('status')->default('pending');
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
		Schema::drop('vendors');
	}
}
