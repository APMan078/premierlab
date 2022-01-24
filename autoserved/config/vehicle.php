<?php

return [
    'type' => [
        'compact' => env('TYPE_VEHICLE_COMPACT', 'compact/small sedan'),
        'medium' => env('TYPE_VEHICLE_MEDIUM', 'medium sedan'),
        'large' => env('TYPE_VEHICLE_LARGE', 'large sedan/wagon'),
        'small' => env('TYPE_VEHICLE_SMALL', 'small SUV/AUV'),
        'van' => env('TYPE_VEHICLE_VAN', 'large SUV/pick-up/van'),
        'commercial' => env('TYPE_VEHICLE_COMMERCIAL', 'commercial')
    ],
    'oil_type' => [
        'regular_oil' => env('TYPE_OIL_REGULAR', 'regular oil'),
        'semi_synthetic' => env('TYPE_OIL_SEMI', 'semi-synthetic oil'),
        'fully_synthetic' => env('TYPE_OIL_FULLY', 'fully synthetic oil'),
        'shop_recommendation' => env('TYPE_OIL_SHOP_RECOMMENDATION', 'shop recommendation')
    ],
    'part_type' => [
        'oem' => env('TYPE_PART_OEM', 'OEM'),
        'replacement' => env('TYPE_PART_REPLACEMENT', 'replacement'),
        'shop_recommendation' => env('TYPE_PART_SHOP_RECOMMENDATION', 'shop recommendation'),
    ],
    'transmission' => [
        'auto' => env('TYPE_TRANSMISSION_AUTO', 'automatic'),
        'manual' => env('TYPE_TRANSMISSION_MANUAL', 'manual')
    ],
    'engine' => [
        'diesel' => env('TYPE_ENGINE_DIESEL', 'diesel'),
        'gasoline' => env('TYPE_ENGINE_GASOLINE', 'gasoline')
    ],
    'pms' => [
        'max_months_interval_fleet' => 3,
        'max_months_interval_customer' => 6,
        'max_mileage' => 100000,
        'interval_mileage' => 5000
    ]
];

?>