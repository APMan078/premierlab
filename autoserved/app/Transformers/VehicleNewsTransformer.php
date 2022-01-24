<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\VehicleNews;

/**
 * Class VehicleNewsTransformer.
 *
 * @package namespace App\Transformers;
 */
class VehicleNewsTransformer extends TransformerAbstract
{
    /**
     * Transform the VehicleNews entity.
     *
     * @param \App\Models\VehicleNews $model
     *
     * @return array
     */
    public function transform(VehicleNews $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
