<?php

namespace App\Models\Utils;

use App\Models\Constants;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class Utilities
{
    public static function hash_data($data)
    {
        return Hash::make($data);
    }

    public static function random_string($size = 0x20)
    {
        return Str::random($size);
    }

    public static function service_return($success, $msg = "", $data = null)
    {
        $service_wrapper = [
            'success' => $success,
            'developerMessage' => $msg,
            'data' => $data,
        ];

        return $service_wrapper;
    }

    public static function get_distance($from, $to)
    {
        return Utilities::compute_distance($from['latitude'], $from['longitude'],
            $to['latitude'], $to['longitude']);
    }

    public static function compute_distance($latitudeFrom, $longitudeFrom, $latitudeTo, $longitudeTo)
    {
        $rad = M_PI / 180;
        $theta = $longitudeFrom - $longitudeTo;
        $dist = sin($latitudeFrom * $rad)
         * sin($latitudeTo * $rad) + cos($latitudeFrom * $rad)
         * cos($latitudeTo * $rad) * cos($theta * $rad);
        return acos($dist) / $rad * 60 * 1.853;
    }
}
