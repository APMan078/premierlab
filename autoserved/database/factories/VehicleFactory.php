<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Vehicle;
use Faker\Generator as Faker;
use App\Models\MasterCarMake;
use App\Models\MasterCarModel;
use App\Models\MasterCarTrim;

$factory->define(Vehicle::class, function (Faker $faker) {
    $faker->addProvider(new \Faker\Provider\Fakecar($faker));
    $type = ['compact/small sedan','medium sedan','large sedan/wagon','small SUV/AUV','large SUV/pick-up/van','commercial'];
    $engine = ['diesel', 'gasoline'];
    $tranmission = ['automatic', 'manual'];
    $make = MasterCarMake::all()->random(1)->pluck('id');
    $model = MasterCarModel::where('make_id', $make)->pluck('id');
    $trim = MasterCarTrim::where('model_id', $model)->pluck('id');
    return [
        'type' => $faker->randomElement($type),
        'make_id' => $make[0],
        'model_id' => $model[0],
        'trim_id' => $trim[0],
        'car_year' => $faker->year($max = 'now'),
        'engine_type' => $faker->randomElement($engine),
        'transmission' => $faker->randomElement($tranmission),
        'color' => $faker->safeColorName,
        'plate_number' => $faker->vehicleRegistration('[A-Z]{2}-[0-9]{5}'),
        'date_purchased' => $faker->dateTimeBetween($startDate = '-10 years', $endDate = 'now', $timezone = null),
        'current_mileage' => $faker->numberBetween($min = 5000, $max = 100000),
        'last_serviced' => $faker->dateTimeBetween($startDate = '-1 year', $endDate = 'now', $timezone = null),
        'address' => '',
        'city' => '',
        'zip' => '',
        'longitude' => '120.984222',
        'latitude' => '14.599512',
        'created_at' => (new \DateTime())->format('Y-m-d H:i:s'),
        'updated_at' => (new \DateTime())->format('Y-m-d H:i:s')
    ];
});
