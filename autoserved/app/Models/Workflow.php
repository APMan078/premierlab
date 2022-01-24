<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
/**
 * Class Workflow.
 *
 * @package namespace App\Models;
 */
class Workflow extends Model implements Transformable
{
    use TransformableTrait, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status', 'title', 'description',
        'vendor_id', 'shop_id'
    ];

    public function vendor()
    {
        return $this->belongsTo(\App\Models\Vendor::class)
                ->with('user');
    }

    public function shop()
    {
        return $this->belongsTo(\App\Models\Shop::class);
    }

}
