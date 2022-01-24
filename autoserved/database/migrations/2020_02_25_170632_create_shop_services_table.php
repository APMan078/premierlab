<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateShopServicesTable.
 */
class CreateShopServicesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('shop_services', function(Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('name');
			$table->string('type');
			$table->string('meta')->nullable();
			$table->text('labor')->nullable();
			$table->text('supplies')->nullable();
			$table->bigInteger('shop_id')->unsigned();
			$table->timestamps();
			
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
		Schema::drop('shop_services');
	}
}
