<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
/**
 * Class Appointment.
 *
 * @package namespace App\Models;
 */
class Appointment extends Model implements Transformable
{
    use TransformableTrait, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'shop_id',
        'schedule_time', 'services',
        'cancelled'
    ];

    protected $casts = [
        'cancelled' => 'boolean'
    ];


    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
