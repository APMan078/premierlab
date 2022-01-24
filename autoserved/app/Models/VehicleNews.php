<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use App\Models\Vehicle;

/**
 * Class VehicleNews.
 *
 * @package namespace App\Models;
 */
class VehicleNews extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'vehicle_news';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'body',
        'car_id'
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class, 'car_id', 'id');
    }

    public function setTitleAttribute($title)
    {
        $this->title = ucwords($title);
    }

}
