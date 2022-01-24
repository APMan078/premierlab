<?php

use Illuminate\Database\Seeder;
use App\Models\Vehicle;
class VehiclesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_id = (int) $this->command->ask('Assign this to user id?', 3);
        // $mileages = [1000, 2500, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000  ];

        $vehicles = factory(Vehicle::class, 1)->create([
            'user_id' => $user_id
        ]);


        $this->command->info('Successfully added 1 vehicles to user ' . $user_id);
    }
}
