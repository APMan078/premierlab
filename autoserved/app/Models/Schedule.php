<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use App\Models\MasterPmsList;
use App\Models\Vehicle;

/**
 * Class Schedule.
 *
 * @package namespace App\Models;
 */
class Schedule extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'schedule',
        'type',
        'service_id',
        'car_id'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'schedule' => 'date',
        'type' => 'string',
        'service_id' => 'integer',
        'car_id' => 'integer'

    ];

    protected static $logAttributes = [
        'schedule',
        'service_id',
        'car_id'
    ];

    protected static $ignoreChangedAttributes = [
        'type',
        'updated_at',
    ];

    protected static $submitEmptyLogs = false;

    protected $appends = ['slug', 'mileage', 'service'];

    public function getSlugAttribute() {
        return $this->slug();
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function getServiceAttribute()
    {
        if ($this->type == 'pms') {
            $id = $this->service_id;
            $service = MasterPmsList::find($id);
            return $service;
        }
    }

    public function getMileageAttribute() {
        if($this->type == 'pms') {
            $id = $this->service_id;
            $mileage = MasterPmsList::where('id', $id)->pluck('mileage');
            return $mileage[0];
        }
    }
}
