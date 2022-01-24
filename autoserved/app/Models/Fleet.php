<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use App\Models\User;
/**
 * Class Fleet.
 *
 * @package namespace App\Models;
 */
class Fleet extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'contact',
        'description',
        'address',
        'longitude',
        'latitude',
        'tin',
        'fleet_admin',
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected static $logAttributes = [
        'name',
        'contact',
        'description',
        'address',
        'longitude',
        'latitude',
        'tin',
        'fleet_admin'
    ];

    protected static $ignoreChangedAttributes = [
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'fleet_admin');
    }

}
