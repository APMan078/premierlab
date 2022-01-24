<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $user_types = [
                config('user.type.admin'),
                config('user.type.vendor'),
                config('user.type.customer'),
                config('user.type.fleet'),
                config('user.type.merchant'),
                config('user.type.personnel')
            ];

            $table->bigInteger('mobile')->unique()->nullable();
            $table->string('provider')->nullable();
            $table->string('provider_id')->nullable();
            $table->string('country')->nullable();
            $table->enum('user_type', $user_types)->default(config('user.type.customer'));
            $table->string('verification_token')->nullable();
            $table->longText('social')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->boolean('guide')->default(1);
            $table->boolean('active')->default(0);
            $table->softDeletes();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
