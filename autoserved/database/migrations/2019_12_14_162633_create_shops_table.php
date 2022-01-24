<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateShopsTable.
 */
class CreateShopsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('shops', function(Blueprint $table) {
            $shop_types = [
                config('shop.type.accessory_shop'),
                config('shop.type.auto_aircon_repair'),
                config('shop.type.auto_detailing'),
                config('shop.type.auto_parts'),
                config('shop.type.auto_repair'),
                config('shop.type.auto_electrical'),
                config('shop.type.battery_shop'),
                config('shop.type.car_paint'),
                config('shop.type.car_wash'),
                config('shop.type.car_wrap'),
                config('shop.type.dealer_service_center'),
                config('shop.type.emission_center'),
                config('shop.type.gas_station'),
                config('shop.type.glass_repair'),
                config('shop.type.service_center'),
                config('shop.type.tint_shop'),
                config('shop.type.tire_shop'),
                config('shop.type.towing_service'),
                config('shop.type.upholstery'),
                config('shop.type.vulcanizing_shop')
            ];
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
            $table->text('operations')->nullable();
            $table->text('features')->nullable();
            $table->text('amenities')->nullable();
            $table->text('tools')->nullable();
            $table->text('payment_method')->nullable();
            $table->decimal('completion', 3, 2)->nullable()->default(0);
            $table->integer('level')->nullable();
            $table->string('status')->default('pending');
            $table->bigInteger('user_id')->unsigned();
            $table->boolean('pms_enabled')->default(0);
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
		Schema::drop('shops');
	}
}
