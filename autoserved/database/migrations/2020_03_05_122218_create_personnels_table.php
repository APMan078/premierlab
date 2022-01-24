<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreatePersonnelsTable.
 */
class CreatePersonnelsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('personnels', function(Blueprint $table) {
            $role_type = [
                'Accounting',
                'Human Resource',
                'Sales',
                'Technician',
				'Service Advisor',
				'Partsman',
				'PartsRunner',
				'Under Chassis Mechanic',
				'Aircon Technician',
				'Manager',
				'Cashier'
            ];

			$table->bigIncrements('id');
			$table->string('sss')->nullable();
			$table->string('tin')->nullable();
			$table->string('philhealth')->nullable();
			$table->integer('rate')->nullable();
            $table->enum('role', $role_type);
            $table->bigInteger('shop_id')->unsigned();
			$table->bigInteger('user_id')->unsigned();
            $table->timestamps();

            $table->foreign('shop_id')
            ->references('id')
            ->on('shops')
            ->onDelete('cascade');

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
		Schema::drop('personnels');
	}
}
