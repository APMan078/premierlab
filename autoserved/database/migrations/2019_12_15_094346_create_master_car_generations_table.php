<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateMasterCarGenerationsTable.
 */
class CreateMasterCarGenerationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('master_car_generations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('model_id')->unsigned();
            $table->string('name');
            $table->char('year_start', 10)->nullable();
            $table->char('year_end', 10)->nullable();
            $table->integer('type_id');
            $table->timestamps();

            $table->foreign('model_id')
                ->references('id')
                ->on('master_car_models')
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
		Schema::drop('master_car_generations');
	}
}
