<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\ShopFleet;

/**
 * Class ShopFleetTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShopFleetTransformer extends TransformerAbstract
{
    /**
     * Transform the ShopFleet entity.
     *
     * @param \App\Models\ShopFleet $model
     *
     * @return array
     */
    public function transform(ShopFleet $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
