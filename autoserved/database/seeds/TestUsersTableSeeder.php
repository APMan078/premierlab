<?php

use Illuminate\Database\Seeder;
use App\Models\Shop;
use App\Models\Application;

class TestUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            array(
                'first_name' => "Super",
                'last_name' => "Administrator",
                'email' => "admin@autoserved.com",
                'country' => "Philippines",
                'user_type' => config('user.type.admin'),
                'password' => Hash::make('P@ssw0rd123'),
                'can_be_impersonated' => 0
            )
        );

        $shop = DB::table('users')->insertGetId(
                    array(
                        'first_name' => "Shop",
                        'last_name' => "User",
                        'email' => "shop@autoserved.com",
                        'country' => "Philippines",
                        'user_type' => config('user.type.vendor'),
                        'password' => Hash::make('P@ssw0rd123')
                    )
                );

        DB::table('vendors')->insert([
           'name' => "Sample Vendor of Shop 1",
           'type' => "Vulcanize",
           'user_id' => $shop 
        ]);

        $newShop = Shop::create([
                        'name' => "Value Plus X",
                        'type' => array("service_center", "auto_detailing"),
                        'operations' => array(
                            ["name" => "Sunday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => true, "step" => 1],
                            ["name" => "Monday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                            ["name" => "Tuesday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                            ["name" => "Wednesday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                            ["name" => "Thursday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                            ["name" => "Friday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                            ["name" => "Saturday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1]
                        ),
                        'user_id' => $shop
                    ]);

        Application::create([
            'lifters' => 1,
            'shop_id' => $newShop->id
        ]);

        DB::table('users')->insert(
            array(
                'first_name' => "Customer",
                'last_name' => "User",
                'email' => "customer@autoserved.com",
                'country' => "Philippines",
                'user_type' => config('user.type.customer'),
                'password' => Hash::make('P@ssw0rd123')
            )
        );

        $fleet = DB::table('users')->insertGetId(
                array(
                    'first_name' => "Fleet",
                    'last_name' => "User",
                    'email' => "fleet@autoserved.com",
                    'country' => "Philippines",
                    'user_type' => config('user.type.fleet'),
                    'password' => Hash::make('P@ssw0rd123')
                )
            );

        DB::table('fleets')->insert(
            array(
                'name' => "Value Plus X",
                'fleet_admin' => $fleet
            )
        );

        DB::table('users')->insert(
            array(
                'first_name' => "Merchant",
                'last_name' => "User",
                'email' => "merchant@autoserved.com",
                'country' => "Philippines",
                'user_type' => config('user.type.merchant'),
                'password' => Hash::make('P@ssw0rd123')
            )
        );

        $personnel = DB::table('users')->insertGetId(
            array(
                'first_name' => "Personnel",
                'last_name' => "User",
                'email' => "personnel@autoserved.com",
                'country' => "Philippines",
                'user_type' => config('user.type.personnel'),
                'password' => Hash::make('P@ssw0rd123')
            )
        );

        DB::table('personnels')->insert(
            array(
                'user_id' => $personnel,
                'shop_id' => $newShop->id,
                'role' => 'Accounting'
            )
        );
    }
}
