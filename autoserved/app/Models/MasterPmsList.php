<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class MasterPmsList.
 *
 * @package namespace App\Models;
 */
class MasterPmsList extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'mileage',
        'check_items',
        'clean_items',
        'change_items'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'mileage' => 'integer',
        'check_items' => 'array',
        'clean_items' => 'array',
        'change_items' => 'array'
    ];

}
