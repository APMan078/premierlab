<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;
use App\Models\Vehicle;
use App\Models\RequestPms;
use App\Models\MasterPmsList;

class UserRequest extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['car_id', 'preferred_schedule', 'type', 'longitude', 'latitude', 'status'];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'car_id' => 'integer',
        'preferred_schedule' => 'array',
        'type' => 'string',
        'longitude' => 'string',
        'latitude' => 'string',
        'status' => 'string'
    ];

    protected static $logAttributes = [
        'car_id',
        'preferred_schedule',
        'type',
        'status'
    ];

    protected $appends = ['slug', 'car', 'city', 'additional', 'service_name'];

    public function getServiceNameAttribute() {
        try {
            $type = strtoupper($this->type);
            if($this->type === 'pms') {
                $additional = RequestPms::where('request_id', $this->id)->firstOrFail();
                $service = MasterPmsList::where('id', $additional->master_pms_id)->first();
                return $type . ' ' . number_format($service->mileage, 0);
            }
            if($this->type === 'change_oil') {
                return ucwords(str_replace('_', ' ', $type));
            }
            if($this->type === 'change_battery') {
                return ucwords(str_replace('_', ' ', $type));
            }
            if($this->type === 'change_tire') {
                return ucwords(str_replace('_', ' ', $type));
            }
        } catch (Exception $e) {
            log($e->getMessage());
            return '';
        }
    }
    public function getSlugAttribute() {
        return $this->slug();
    }

    public function getCarAttribute() {
        $vehicle = Vehicle::find($this->car_id);
        return $vehicle->car;
    }
    public function getCityAttribute() {
        $vehicle = Vehicle::find($this->car_id);
        return $vehicle->city;
    }

    public function getAdditionalAttribute() {
        if($this->type === 'pms') {
            $additional = RequestPms::where('request_id', $this->id)->first();
            return $additional;
        }

    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
