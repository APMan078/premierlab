<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\ShopService;
use Faker\Generator as Faker;

$factory->define(ShopService::class, function (Faker $faker) {
    $labor = array(
        ['name' => 'sm_sedan', 'price' => 5000, 'hours' => 1 ],
        ['name' => 'md_sedan', 'price' => 5000, 'hours' => 1 ],
        ['name' => 'lg_sedan', 'price' => 5000, 'hours' => 1 ],
        ['name' => 'sm_suv_auv', 'price' => 5000, 'hours' => 1 ],
        ['name' => 'lg_suv_van', 'price' => 5000, 'hours' => 1 ],
        ['name' => 'commercial', 'price' => 5000, 'hours' => 1 ]
    );
    $supplies = array(
        'regular' => array(
            ['name' => 'sm_sedan', 'price' => 5000],
            ['name' => 'md_sedan', 'price' => 5000],
            ['name' => 'lg_sedan', 'price' => 5000],
            ['name' => 'sm_suv_auv', 'price' => 5000],
            ['name' => 'lg_suv_van', 'price' => 5000],
            ['name' => 'commercial', 'price' => 5000]
        ),
        'semi' => array(
            ['name' => 'sm_sedan', 'price' => 5000],
            ['name' => 'md_sedan', 'price' => 5000],
            ['name' => 'lg_sedan', 'price' => 5000],
            ['name' => 'sm_suv_auv', 'price' => 5000],
            ['name' => 'lg_suv_van', 'price' => 5000],
            ['name' => 'commercial', 'price' => 5000]
        ),
        'full' => array(
            ['name' => 'sm_sedan', 'price' => 5000],
            ['name' => 'md_sedan', 'price' => 5000],
            ['name' => 'lg_sedan', 'price' => 5000],
            ['name' => 'sm_suv_auv', 'price' => 5000],
            ['name' => 'lg_suv_van', 'price' => 5000],
            ['name' => 'commercial', 'price' => 5000]
        ),
        'recommend' => array(
            ['name' => 'sm_sedan', 'price' => 5000],
            ['name' => 'md_sedan', 'price' => 5000],
            ['name' => 'lg_sedan', 'price' => 5000],
            ['name' => 'sm_suv_auv', 'price' => 5000],
            ['name' => 'lg_suv_van', 'price' => 5000],
            ['name' => 'commercial', 'price' => 5000]
        )
        
    );
    return [
        'name' => "Shop Service " . mt_rand(1, 100),
        'type' => "Shop Type " . mt_rand(100, 200),
        'labor' => $labor,
        'shop_id' => \App\Models\Shop::first()->id,
        'supplies' => $supplies,
        'created_at' => (new \DateTime())->format('Y-m-d H:i:s'),
        'updated_at' => (new \DateTime())->format('Y-m-d H:i:s')
    ];
});
