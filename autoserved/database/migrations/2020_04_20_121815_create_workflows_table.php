<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateWorkflowsTable.
 */
class CreateWorkflowsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('workflows', function(Blueprint $table) {
			$statuses = [
				'scheduled', 'checked-in',
				'picked-up', 'work-started',
				'waiting for parts', 'waiting for approval',
				'quality inspection', 'billing', 'payment',
				'releasing'
			];

            $table->increments('id');
			$table->unsignedBigInteger('vendor_id')
				->index();

			$table->unsignedBigInteger('shop_id')
				->index();
			
			$table->enum('status', $statuses);
			$table->text('title');
			$table->text('description');

			$table->timestamps();
			$table->softDeletes();
		});

		Schema::table('workflows', function (Blueprint $table) {
			$table->foreign('vendor_id')
				->references('id')
				->on('vendors');

			$table->foreign('shop_id')
				->references('id')
				->on('shops');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::disableForeignKeyConstraints();
		Schema::drop('workflows');
	}
}
