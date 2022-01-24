<?php

return [
    'type' => [
        'admin' => env('USER_TYPE_ADMIN', 'admin'),
        'vendor' => env('USER_TYPE_VENDOR', 'vendor'),
        'customer' => env('USER_TYPE_CUSTOMER', 'customer'),
        'fleet' => env('USER_TYPE_FLEET_ADMIN', 'fleet admin'),
        'merchant' => env('USER_TYPE_MERCHANT', 'merchant'),
        'personnel' => env('USER_TYPE_PERSONNEL', 'personnel')
    ]
];

?>