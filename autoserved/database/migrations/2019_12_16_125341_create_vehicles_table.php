<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateVehiclesTable.
 */
class CreateVehiclesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('vehicles', function (Blueprint $table) {
            $car_types = [
                config('vehicle.type.compact'),
                config('vehicle.type.medium'),
                config('vehicle.type.large'),
                config('vehicle.type.small'),
                config('vehicle.type.van'),
                config('vehicle.type.commercial')
            ];

            $transmission_type = [
                config('vehicle.transmission.auto'),
                config('vehicle.transmission.manual')
            ];

            $engine_type = [
                config('vehicle.engine.diesel'),
                config('vehicle.engine.gasoline')
            ];

            $table->bigIncrements('id');
            $table->enum('type', $car_types)->nullable();
            $table->bigInteger('make_id')->unsigned()->nullable();
            $table->bigInteger('model_id')->unsigned()->nullable();
            $table->bigInteger('trim_id')->unsigned()->nullable();
            $table->smallInteger('car_year')->unsigned()->nullable();
            $table->enum('engine_type', $engine_type)->nullable();
            $table->enum('transmission', $transmission_type)->nullable();
            $table->string('vin')->nullable();
            $table->char('color', 15)->nullable();
            $table->char('plate_number', 10)->nullable();
            $table->date('date_purchased')->nullable();
            $table->integer('current_mileage')->nullable();
            $table->date('last_serviced')->nullable();
            $table->longText('address')->nullable();
            $table->string('city')->nullable();
            $table->string('zip')->nullable();
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('no action');
            $table->foreign('make_id')
                ->references('id')
                ->on('master_car_makes')
                ->onDelete('set null');
            $table->foreign('model_id')
                ->references('id')
                ->on('master_car_models')
                ->onDelete('set null');
            $table->foreign('trim_id')
                ->references('id')
                ->on('master_car_trims')
                ->onDelete('set null');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('vehicles');
	}
}
