<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class ReferralProgram.
 *
 * @package namespace App\Models;
 */
class ReferralProgram extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'uri', 'lifetime_minutes'];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];
}
