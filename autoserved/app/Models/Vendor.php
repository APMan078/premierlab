<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
/**
 * Class Vendor.
 *
 * @package namespace App\Models;
 */
class Vendor extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'type', 'contact', 'description', 'address', 'city', 'zip', 'longitude', 'latitude', 'tin', 'payment_method', 'status', 'user_id' ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected static $logAttributes = [
        'name', 'type', 'contact', 'description', 'address', 'city', 'zip', 'longitude', 'latitude', 'tin', 'payment_method', 'status', 'user_id'
    ];

    protected static $ignoreChangedAttributes = [
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'user_id');
    }

    public function workflows()
    {
        return $this->hasMany(\App\Models\Workflow::class);
    }
}
