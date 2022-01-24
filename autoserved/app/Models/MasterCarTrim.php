<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class MasterCarTrim.
 *
 * @package namespace App\Models;
 */
class MasterCarTrim extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'series_id', 'model_id', 'name', 'year_start', 'year_end', 'type_id'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

}
