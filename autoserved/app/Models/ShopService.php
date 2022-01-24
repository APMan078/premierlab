<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use App\models\Shop;
/**
 * Class ShopService.
 *
 * @package namespace App\Models;
 */
class ShopService extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'name', 'type', 'meta', 'labor', 'supplies', 'shop_id'];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'name' => 'string',
        'type' => 'string',
        'meta' => 'string',
        'labor' => 'array',
        'supplies' => 'array',
        'shop_id' => 'integer'
    ];  
    

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }
}
