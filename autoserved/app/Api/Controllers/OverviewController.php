<?php

namespace App\Api\Controllers;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class OverviewController
{
    protected $repository;
    private $response;
    private $auth;

    public function __construct(
        UserRepository $repository,
        Response $response,
        Auth $auth
        // UserValidator $validator
    ) {
        $this->repository = $repository;
        $this->auth = $auth;
        $this->response = $response;
        // $this->validator  = $validator;
    }

    function hex2rgba($color, $opacity = false) {
 
        $default = 'rgb(0,0,0)';
     
        //Return default if no color provided
        if(empty($color))
              return $default; 
     
        //Sanitize $color if "#" is provided 
            if ($color[0] == '#' ) {
                $color = substr( $color, 1 );
            }
     
            //Check if color has 6 or 3 characters and get values
            if (strlen($color) == 6) {
                    $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
            } elseif ( strlen( $color ) == 3 ) {
                    $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
            } else {
                    return $default;
            }
     
            //Convert hexadec to rgb
            $rgb =  array_map('hexdec', $hex);
     
            //Check if opacity is set(rgba or rgb)
            if($opacity){
                if(abs($opacity) > 1)
                    $opacity = 1.0;
                $output = 'rgba('.implode(",",$rgb).','.$opacity.')';
            } else {
                $output = 'rgb('.implode(",",$rgb).')';
            }
     
            //Return rgb(a) color string
            return $output;
    }
    
    public function user_report() {
        $data = array(
            [
                'label' => "Active Customers",
                'value' => "2,390",
                'percentage' => "12.4%",
                'increase' => true,
                'chartLabels' => [null, null, null, null, null],
                'decrease' => false,
                'datasets' => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#007bff', 0.1),
                        'borderColor' => $this->hex2rgba('#007bff'),
                        'data' => [9, 3, 3, 9, 9]
                    ]
                )
            ],
            [
                'label' => "Inactive Customers",
                'value' => "8,391",
                'percentage' => "7.21%",
                'increase' => false,
                'chartLabels' => [null, null, null, null, null],
                'decrease' => true,
                'datasets' => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#17c671', 0.1),
                        'borderColor' => $this->hex2rgba('#17c671'),
                        'data' => [3.9, 4, 4, 9, 4]
                    ]
                )
            ],
            [
                'label' => "Recurring Customers",
                'value' => "21,293",
                'percentage' => "3.71%",
                'increase' => true,
                'chartLabels' => [null, null, null, null, null],
                'decrease' => false,
                'datasets' => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#ffb400', 0.1),
                        'borderColor' => $this->hex2rgba('#ffb400'),
                        'data' => [6, 6, 9, 3, 3]
                    ]
                )
            ],
            [
                'label'  => "New Customers",
                'value'  => "6.43",
                'percentage'  => "2.71%",
                'increase'  => false,
                'chartLabels'  => [null, null, null, null, null],
                'decrease'  => true,
                'datasets'  => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#FF4169', 0.1),
                        'borderColor' => $this->hex2rgba('#FF4169'),
                        'data' => [0, 9, 3, 3, 3]
                    ]
                )
            ]
        );

        return $data;
    }

    public function operational_report() {
        $data = array(
            [
                'label' => "Available Man Hour",
                'value' => "2,390",
                'percentage' => "12.4%",
                'increase' => true,
                'chartLabels' => [null, null, null, null, null],
                'decrease' => false,
                'datasets' => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#007bff', 0.1),
                        'borderColor' => $this->hex2rgba('#007bff'),
                        'data' => [9, 3, 3, 9, 9]
                    ]
                )
            ],
            [
                'label' => "Work in Progress",
                'value' => "8,391",
                'percentage' => "7.21%",
                'increase' => false,
                'chartLabels' => [null, null, null, null, null],
                'decrease' => true,
                'datasets' => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#17c671', 0.1),
                        'borderColor' => $this->hex2rgba('#17c671'),
                        'data' => [3.9, 4, 4, 9, 4]
                    ]
                )
            ],
            [
                'label' => "Work in Progress",
                'value' => "21,293",
                'percentage' => "3.71%",
                'increase' => true,
                'chartLabels' => [null, null, null, null, null],
                'decrease' => false,
                'datasets' => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#ffb400', 0.1),
                        'borderColor' => $this->hex2rgba('#ffb400'),
                        'data' => [6, 6, 9, 3, 3]
                    ]
                )
            ],
            [
                'label'  => "MTD Sales",
                'value'  => "6.43",
                'percentage'  => "2.71%",
                'increase'  => false,
                'chartLabels'  => [null, null, null, null, null],
                'decrease'  => true,
                'datasets'  => array(
                    [
                        'label' => "Today",
                        'fill' => "start",
                        'borderWidth' => 1.5,
                        'backgroundColor' => $this->hex2rgba('#FF4169', 0.1),
                        'borderColor' => $this->hex2rgba('#FF4169'),
                        'data' => [0, 9, 3, 3, 3]
                    ]
                )
            ]
        );

        return $data;
    }

    public function index() {
        $data = [
            'id' => 0,
            'users' => $this->user_report(),
            'operation' => $this->operational_report()
        ];
        if (request()->wantsJson()) {

            return response()->json([
                'data' => $data,
            ]);
        }

    }
}
