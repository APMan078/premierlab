<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateApplicationsTable.
 */
class CreateApplicationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('applications', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->integer('tin')->nullable();
            $table->tinyInteger('lifters')->nullable();
            $table->text('merch_cert')->nullable();
            $table->text('special_tools')->nullable();
			$table->bigInteger('shop_id')->unsigned();
            $table->boolean('verified_registration')->unsigned()->nullable()->default(false);
            $table->boolean('verified_permit')->unsigned()->nullable()->default(false);
            $table->boolean('verified_certification')->unsigned()->nullable()->default(false);
            $table->boolean('verified_lifters')->unsigned()->nullable()->default(false);
            $table->boolean('verified_merch_cert')->unsigned()->nullable()->default(false);
            $table->boolean('verified_special_tools')->unsigned()->nullable()->default(false);
            $table->timestamps();

            $table->foreign('shop_id')
                ->references('id')
                ->on('shops')
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
		Schema::drop('applications');
	}
}
