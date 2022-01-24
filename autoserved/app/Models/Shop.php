<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\File;
use App\Models\User;
use App\Models\Application;
/**
 * Class Shop.
 *
 * @package namespace App\Models;
 */
class Shop extends Model implements Transformable, HasMedia
{
    use TransformableTrait, HasHashSlug, HasMediaTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'type', 'contact', 'description', 'address', 'city', 'zip', 'longitude', 'latitude', 'operations', 'features', 'amenities', 'tools', 'payment_method', 'completion', 'level', 'status', 'user_id', 'pms_enabled'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'name' => 'string',
        'type' => 'array',
        'contact' => 'string',
        'description' => 'string',
        'address' => 'string',
        'city' => 'string',
        'zip' => 'integer',
        'longitude' => 'string',
        'latitude' => 'string',
        'completion' => 'decimal:2',
        'level' => 'integer',
        'operations' => 'array',
        'amenities' => 'array',
        'tools' => 'array',
        'features' => 'array',
        'payment_method' => 'array',
        'pms_enabled' => 'boolean',
        'avatar_id' => 'integer',
        'banner_id' => 'integer',
        'user_id' => 'integer',
    ];

    protected static $logAttributes = [
        'name',
        'status',
    ];

    protected static $ignoreChangedAttributes = [
        'pms_enabled',
        'updated_at',
    ];

    protected $appends = ['slug', 'avatar', 'banner', 'application'];
    protected static $submitEmptyLogs = false;

    public function getSlugAttribute() {
        return $this->slug();
    }

    public function getAvatarAttribute() {
        return $this->avatar();
    }

    public function getBannerAttribute() {
        return $this->banner();
    }

    public function getApplicationAttribute() {
        return $this->application();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function workflows()
    {
        return $this->hasMany(\App\Models\Workflow::class);
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('avatar')->acceptsMimeTypes(['image/jpeg'])->singleFile();
        $this->addMediaCollection('banner')->acceptsMimeTypes(['image/jpeg'])->singleFile();

    }

    public function avatar()
    {
        $avatar = $this->getMedia('avatar')->first();
        return ($avatar ? $avatar->getUrl() : null);
    }

    public function banner()
    {
        $banner = $this->getMedia('banner')->first();
        return ($banner ? $banner->getUrl() : null);
    }


    public function application()
    {
        return $this->hasOne(Application::class);
    }

}
