<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
/**
 * Class Attendance.
 *
 * @package namespace App\Models;
 */
class Attendance extends Model implements Transformable
{
    use TransformableTrait, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'time_in', 'time_out',
        'day', 'date', 'service_id'
    ];

    public function employee()
    {
        return $this->belongsTo(\App\Models\User::class)
            ->withDefault();
    }

}
