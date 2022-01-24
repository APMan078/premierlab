<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class MasterCarMake.
 *
 * @package namespace App\Models;
 */
class MasterCarMake extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'type_id'
    ];     
        
    protected $hidden = [
        'created_at',
        'deleted_at',
    ];
}
