<?php

return [
    'type' => [
        'accessory_shop' => env('SHOP_TYPE_ACCESSORY_SHOP', 'accessory_shop'),
        'auto_aircon_repair' => env('SHOP_TYPE_AUTO_AIRCON_REPAIR', 'auto_aircon_repair'),
        'auto_detailing' => env('SHOP_TYPE_AUTO_DETAILING', 'auto_detailing'),
        'auto_parts' => env('SHOP_TYPE_AUTO_PARTS', 'auto_parts'),
        'auto_repair' => env('SHOP_TYPE_AUTO_REPAIR', 'auto_repair'),
        'auto_electrical' => env('SHOP_TYPE_AUTO_ELECTRICAL', 'auto_electrical'),
        'battery_shop' => env('SHOP_TYPE_BATTERY_SHOP', 'battery_shop'),
        'car_paint' => env('SHOP_TYPE_CAR_PAINT', 'car_paint'),
        'car_wash' => env('SHOP_TYPE_CAR_WASH', 'car_wash'),
        'car_wrap' => env('SHOP_TYPE_CAR_WRAP', 'car_wrap'),
        'dealer_service_center' => env('SHOP_TYPE_DEALER_SERVICE_CENTER', 'dealer_service_center'),
        'emission_center' => env('SHOP_TYPE_EMISSION_CENTER', 'emission_center'),
        'gas_station' => env('SHOP_TYPE_GAS_STATION', 'gas_station'),
        'glass_repair' => env('SHOP_TYPE_GLASS_REPAIR', 'glass_repair'),
        'service_center' => env('SHOP_TYPE_SERVICE_CENTER', 'service_center'),
        'tint_shop' => env('SHOP_TYPE_TINT_SHOP', 'tint_shop'),
        'tire_shop' => env('SHOP_TYPE_TIRE_SHOP', 'tire_shop'),
        'towing_service' => env('SHOP_TYPE_TOWING_SERVICE', 'towing_service'),
        'upholstery' => env('SHOP_TYPE_UPHOLSTERY', 'upholstery'),
        'vulcanizing_shop' => env('SHOP_TYPE_VULCANIZING_SHOP', 'vulcanizing_shop')
    ],

    'operations' => [
        ["name" => "Sunday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => true, "step" => 1],
        ["name" => "Monday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
        ["name" => "Tuesday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
        ["name" => "Wednesday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
        ["name" => "Thursday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
        ["name" => "Friday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
        ["name" => "Saturday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1]
    ],

    'amenities' => [

    ],

    'features' => [

    ],
];

?>