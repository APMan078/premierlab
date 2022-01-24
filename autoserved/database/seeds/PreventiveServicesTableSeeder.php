<?php

use Illuminate\Database\Seeder;
use App\Models\ShopService;

class PreventiveServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $user_id = (int) $this->command->ask('What user would you like to associate this customer ?', 1);
        $shop_id = (int) $this->command->ask('What shop id should we append this service?', 1);
        $mileages = [1000, 2500, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000  ];

        foreach($mileages as $mileage) {
            $shops = factory(ShopService::class, 1)->create([
                'name' => $mileage,
                'shop_id' => $shop_id,
                'type' => 'preventive',
                'meta' => $mileage
            ]);
        }


        $this->command->info('Successfully added services to shop.');
    }
}

