<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use App\Models\Shop;
use App\Models\User;
/**
 * Class Personnel.
 *
 * @package namespace App\Models;
 */
class Personnel extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'sss', 'tin', 'philhealth', 'rate', 'role', 'shop_id', 'user_id' ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected static $logAttributes = [
        'sss', 'tin', 'philhealth', 'rate', 'role', 'shop_id', 'user_id'
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
}
