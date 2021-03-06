<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateReferralProgramsTable.
 */
class CreateReferralProgramsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('referral_programs', function(Blueprint $table) {
            $table->bigIncrements('id');
			$table->string('name');
			$table->string('uri');
			$table->integer('lifetime_minutes')->default(7 * 24 * 60);
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
		Schema::drop('referral_programs');
	}
}
