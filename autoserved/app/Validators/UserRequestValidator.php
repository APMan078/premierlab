<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class UserRequestValidator.
 *
 * @package namespace App\Validators;
 */
class UserRequestValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'preferred_schedule' => 'array|min:1|max:3'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'preferred_schedule' => 'array|min:1|max:3'
        ],
    ];
}
