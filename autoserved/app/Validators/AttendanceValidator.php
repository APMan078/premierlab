<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class AttendanceValidator.
 *
 * @package namespace App\Validators;
 */
class AttendanceValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'date' => "required|string|date_format:Y-m-d",
            'time_in' => "nullable|string|date_format:Y-m-d H:i:s",
            'time_out' => "nullable|string|date_format:Y-m-d H:i:s|after_or_equal:time_in"
        ],
        ValidatorInterface::RULE_UPDATE => [
            'date' => "required|string|date_format:Y-m-d",
            'time_in' => "nullable|string|date_format:Y-m-d H:i:s",
            'time_out' => "nullable|string|date_format:Y-m-d H:i:s|after_or_equal:time_in"
        ],
    ];
}
