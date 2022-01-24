<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use App\Models\Shop;
use App\Models\User;
use App\Models\Vendor;
/**
 * Class Customer.
 *
 * @package namespace App\Models;
 */
class Customer extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'shop_id', 'user_id', 'type', 'vendor_id' ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected static $logAttributes = [
        'shop_id', 'user_id'
    ];

    protected static $ignoreChangedAttributes = [
        'updated_at',
    ];

    protected $appends = ['slug', 'detail'];

    public function getSlugAttribute() {
        return $this->slug();
    }

    public function getDetailAttribute() {
        $detail = User::where('id', $this->user_id)->first();
        return $detail;
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class, 'id', 'shop_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'user_id');
    }

    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'id', 'vendor_id');
    }
}
