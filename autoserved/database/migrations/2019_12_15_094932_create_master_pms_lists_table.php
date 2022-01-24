<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateMasterPmsListsTable.
 */
class CreateMasterPmsListsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_pms_lists', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('mileage');
            $table->longText('check_items')->nullable();
            $table->longText('clean_items')->nullable();
            $table->longText('change_items')->nullable();

            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('master_pms_lists');
	}
}
