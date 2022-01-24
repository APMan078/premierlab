<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Models\Shop;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\File;
use Balping\HashSlug\HasHashSlug;
/**
 * Class Application.
 *
 * @package namespace App\Models;
 */
class Application extends Model implements Transformable, HasMedia
{
    use TransformableTrait, LogsActivity, HasMediaTrait, HasHashSlug;

    const APPLICATION_TYPE_BIZ_REG = "biz_reg";
    const APPLICATION_TYPE_PERMIT = "permit";
    const APPLICATION_TYPE_BIR_CERT = "bir_cert";
    const APPLICATION_TYPE_LIFTERS = "lifters";
    const APPLICATION_TYPE_MERCH_CERT = "merch_cert";
    const APPLICATION_TYPE_SPECIAL_TOOLS = "special_tools";

    protected $fillable = [
        'lifters',
        'merch_cert',
        'special_tools',
        'shop_id',
        'verified_registration',
        'verified_permit',
        'verified_certification',
        'verified_lifters',
        'verified_merch_cert',
        'verified_special_tools'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at'
    ];

    protected $casts = [
        'merch_cert' => 'array',
        'special_tools' => 'array',
        'verified_registration' => 'integer',
        'verified_permit' => 'integer',
        'verified_ceritification' => 'integer',
        'verified_lifters' => 'integer',
        'verified_merch_cert' => 'integer',
        'verified_special_tools' => 'integer'

    ];

    protected static $logAttributes = [
        'registration',
        'permit',
        'certification',
        'shop_id',
    ];

    protected $appends = ['slug', 'registration', 'permit', 'certification'];
    
    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function getSlugAttribute() {
        return $this->slug();
    }

    public function getRegistrationAttribute() {
        $image = $this->getMedia('registration')->first();
        return ($image ? $image->getUrl() : null);
    }

    public function getPermitAttribute() {
        $image = $this->getMedia('permit')->first();
        return ($image ? $image->getUrl() : null);
    }

    public function getCertificationAttribute() {
        $image = $this->getMedia('certification')->first();
        return ($image ? $image->getUrl() : null);
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('registration')->acceptsMimeTypes(['image/jpeg'])->singleFile();
        $this->addMediaCollection('permit')->acceptsMimeTypes(['image/jpeg'])->singleFile();
        $this->addMediaCollection('certification')->acceptsMimeTypes(['image/jpeg'])->singleFile();
    }

}
