<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Fleet;

/**
 * Class FleetTransformer.
 *
 * @package namespace App\Transformers;
 */
class FleetTransformer extends TransformerAbstract
{
    /**
     * Transform the Fleet entity.
     *
     * @param \App\Models\Fleet $model
     *
     * @return array
     */
    public function transform(Fleet $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'  => $model->slug,
            'name'  => $model->name,
            'contact'   => $model->contact,
            'description'   => $model->description,
            'address'   => $model->address,
            'longitude' => $model->longitude,
            'latitude'  => $model->latitude,
            'tin'   => $model->tin,
            'fleet_admin'   => (int) $model->fleet_admin,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
