<?php

use Illuminate\Database\Seeder;
use App\Models\ShopService;
class ShopServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $services = factory(ShopService::class, 1)->create();
        $this->command->info("Successfully added {$services->count()} shop services.");
    }
}
