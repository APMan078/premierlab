<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestPmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_pms', function (Blueprint $table) {
            $oil_type = config('vehicle.oil_type');
            $parts_type = config('vehicle.part_type');
            $table->bigIncrements('id');
            $table->bigInteger('master_pms_id')->unsigned();
            $table->bigInteger('request_id')->unsigned();
            $table->enum('oil_type', $oil_type)->nullable();
            $table->enum('parts_type', $parts_type)->nullable();
            $table->text('replacements')->nullable();
            $table->text('others')->nullable();

            $table->timestamps();

            $table->foreign('master_pms_id')
            ->references('id')
            ->on('master_pms_lists')
            ->onDelete('no action');

            $table->foreign('request_id')
                ->references('id')
                ->on('user_requests')
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
        Schema::dropIfExists('request_pms');
    }
}
