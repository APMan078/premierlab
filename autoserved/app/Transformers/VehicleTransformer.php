<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Vehicle;

/**
 * Class VehicleTransformer.
 *
 * @package namespace App\Transformers;
 */
class VehicleTransformer extends TransformerAbstract
{
    /**
     * Transform the Vehicle entity.
     *
     * @param \App\Models\Vehicle $model
     *
     * @return array
     */
    public function transform(Vehicle $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'       => $model->slug(),
            'type'     => ucwords($model->type),
            'make_id'      => (int) $model->make_id,
            'model_id'     => (int) $model->model_id,
            'trim_id'      => (int) $model->trim_id,
            'car_year'     => $model->car_year,
            'engine_type'      => $model->engine_type,
            'transmission'     => $model->transmission,
            'vin'           => $model->vin,
            'color'        => $model->color,
            'plate_number'     => $model->plate_number,
            'date_purchased'       => $model->date_purchased,
            'current_mileage'      => $model->current_mileage,
            'last_serviced'        => $model->last_serviced,
            'address'       => $model->address,
            'city'      => $model->city,
            'zip'       => (int) $model->zip,
            'longitude'        => $model->longitude,
            'latitude'     => $model->latitude,
            'user_id'     => (int) $model->user_id,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
