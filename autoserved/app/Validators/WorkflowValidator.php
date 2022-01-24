<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class WorkflowValidator.
 *
 * @package namespace App\Validators;
 */
class WorkflowValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'status' => 'required|string',
            'vendor_id' => 'present|integer|nullable',
            'shop_id' => 'present|integer|nullable',
            'title' => 'required|string',
            'description' => 'required|string'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'status' => 'required|string',
            'vendor_id' => 'present|integer|nullable',
            'shop_id' => 'present|integer|nullable',
            'title' => 'required|string',
            'description' => 'required|string'
        ],
    ];
}
