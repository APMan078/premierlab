<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class MasterServiceList.
 *
 * @package namespace App\Models;
 */
class MasterServiceList extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'name',
        'details'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];


}
