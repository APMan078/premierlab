<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use App\Models\UserRequest;
use App\Models\MasterPmsList;
/**
 * Class RequestPms.
 *
 * @package namespace App\Models;
 */
class RequestPms extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['master_pms_id', 'request_id', 'oil_type', 'parts_type', 'replacements', 'others' ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'master_pms_id' => 'integer',
        'request_id' => 'integer',
        'oil_type' => 'string',
        'parts_type' => 'string',
        'replacements' => 'array',
        'others' => 'array',
    ];

    protected static $logAttributes = [
        'master_pms_id',
        'request_id',
        'oil_type',
        'parts_type',
        'replacements',
        'others',
    ];

    protected static $ignoreChangedAttributes = [
        'updated_at',
    ];

    protected static $submitEmptyLogs = false;

    protected $appends = ['mileage'];

    public function getMileageAttribute()
    {
        $mileage = MasterPmsList::where('id', $this->master_pms_id)->first();

        return $mileage->mileage;
    }

    public function userRequest()
    {
        return $this->belongsTo(UserRequest::class);
    }

    public function pmsList()
    {
        return $this->hasOne(MasterPmsList::class);
    }
}
