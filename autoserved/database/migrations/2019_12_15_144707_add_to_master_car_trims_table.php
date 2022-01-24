<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddToMasterCarTrimsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('master_car_trims', function (Blueprint $table) {

            $table->bigInteger('series_id')->unsigned();
            $table->bigInteger('model_id')->unsigned();
            $table->string('name');
            $table->char('year_start', 10)->nullable();
            $table->char('year_end', 10)->nullable();
            $table->integer('type_id')->nullable();

            $table->foreign('series_id')
                ->references('id')
                ->on('master_car_series')
                ->onDelete('cascade');
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
        Schema::table('master_car_trims', function (Blueprint $table) {
            $table->dropColumn('series_id');
            $table->dropColumn('model_id');
            $table->dropColumn('name');
            $table->dropColumn('year_start');
            $table->dropColumn('year_end');
            $table->dropColumn('type_id');
        });
    }
}
