
<?php

use Illuminate\Support\Str;
use App\Models\User;
use App\Models\ShopService;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Attendance::class, function (Faker\Generator $faker) {
    $date = $faker->date('Y-m-d', $faker->dateTimeThisMonth('now'));
    return [
        'user_id' => User::all()->last()->id,
        'service_id' => ShopService::first()->id,
        'date' => $date,
        'time_in' => $date . " {$faker->time('H:i:s', 'now')}",
        'time_out' => $date . " {$faker->time('H:i:s', '+9 hours')}",
        'day' => strtolower(date('l', strtotime($date))),
    ];
});
