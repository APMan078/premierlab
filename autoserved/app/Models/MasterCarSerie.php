<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class MasterCarSerie.
 *
 * @package namespace App\Models;
 */
class MasterCarSerie extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'model_id', 'gen_id', 'name', 'type_id' 
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];
}