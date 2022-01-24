<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Models\MasterCarMake;
use App\Models\MasterCarModel;
use App\Models\MasterCarTrim;
use App\Models\Schedule;
use App\Models\VehicleNews;
use Balping\HashSlug\HasHashSlug;
/**
 * Class Vehicle.
 *
 * @package namespace App\Models;
 */
class Vehicle extends Model implements Transformable
{
    use TransformableTrait;
    use LogsActivity;
    use SoftDeletes;
    use HasHashSlug;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'make_id',
        'model_id',
        'trim_id',
        'car_year',
        'engine_type',
        'transmission',
        'color',
        'vin',
        'plate_number',
        'date_purchased',
        'current_mileage',
        'last_serviced',
        'address',
        'city',
        'zip',
        'longitude',
        'latitude',
        'user_id',
    ];
    protected static $logAttributes = [
        'type',
        'user_id',
        'make_id',
        'model_id',
        'car_year',
        'trim_id',
        'plate_number',
    ];
    protected $appends = ['slug', 'car', 'make', 'model', 'trim'];

    public function getSlugAttribute() {
        return $this->slug();
    }
    
    public function getMakeAttribute() {
        $make = MasterCarMake::find($this->make_id);
        $data = [
            'label' => $make->name,
            'value' => $make->id
        ];
        return $data;
    }

    public function getModelAttribute() {
        $model = MasterCarModel::find($this->model_id);
        $data = [
            'label' => $model->name,
            'value' => $model->id
        ];
        return $data;
    }

    public function getTrimAttribute() {
        $trim = MasterCarTrim::find($this->trim_id);
        $data = [
            'label' => $trim->name,
            'value' => $trim->id
        ];
        return $data;
    }
    public function getCarAttribute() {
        $make = MasterCarMake::find($this->make_id);
        $year = $this->car_year;
        $model = MasterCarModel::find($this->model_id);
        $trim = MasterCarTrim::find($this->trim_id);
        $engine = $this->engine_type;
        $transmission = $this->transmission;
        $name = $year . ' ' . $make['name'] . ' ' . $model['name'] . ' ' . $this->convertTransmission($transmission) . ' ' . ucfirst($engine) . ' ' . $trim['name'] ;
        $short_name = $year . ' ' . $make['name'] . ' ' . $model['name'] . ' ' . $this->convertTransmission($transmission) . ' ' . ucfirst($engine);
        $timestamp = strtotime($this->updated_at);
        $data = [
            'color' => $this->color,
            'name' => $name,
            'short_name' => $short_name,
            'mileage' => $this->current_mileage,
            'last_serviced' => $this->last_serviced,
            'date_purchased' => $this->date_purchased,
            'updated_at' => date('Y-m-d', $timestamp)
        ];
        return $data;
    }

    public function convertTransmission($type) {
        if($type == 'automatic') {
            return 'AT';
        } elseif ($type == 'manula') {
            return 'MT';
        }
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function car_make()
    {
        return $this->hasOne(MasterCarMake::class, 'id', 'make_id');
    }

    public function car_model()
    {
        return $this->hasOne(MasterCarModel::class, 'id', 'model_id');
    }

    public function car_trim()
    {
        return $this->hasOne(MasterCarTrim::class, 'id', 'trim_id');
    }

    public function news()
    {
        return $this->hasMany(VehicleNews::class, 'car_id', 'id');
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class, 'car_id', 'id')
            ->orderBy('schedule', 'asc');
    }
}
