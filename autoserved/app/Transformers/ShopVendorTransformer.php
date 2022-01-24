<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\ShopVendor;

/**
 * Class ShopVendorTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShopVendorTransformer extends TransformerAbstract
{
    /**
     * Transform the ShopVendor entity.
     *
     * @param \App\Models\ShopVendor $model
     *
     * @return array
     */
    public function transform(ShopVendor $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
