<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TestUsersTableSeeder::class);
        $this->call(CarMakesTableSeeder::class);
        $this->call(CarModelsTableSeeder::class);
        $this->call(CarGenerationsTableSeeder::class);
        $this->call(CarSeriesTableSeeder::class);
        $this->call(CarTrimsTableSeeder::class);
        
        $this->call(PmsListsTableSeeder::class);
        $this->call(PmsOthersTableSeeder::class);
        $this->call(ShopServicesTableSeeder::class);
        $this->call(AttendancesTableSeeder::class);
    }
}
