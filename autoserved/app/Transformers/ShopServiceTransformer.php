<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\ShopService;

/**
 * Class ShopServiceTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShopServiceTransformer extends TransformerAbstract
{
    /**
     * Transform the ShopService entity.
     *
     * @param \App\Models\ShopService $model
     *
     * @return array
     */
    public function transform(ShopService $model)
    {
        return [
            'id'         => (int) $model->id,

            'name'      => $model->name,
            'type'      => $model->type,
            'meta'      => $model->meta,
            'labor'         => $model->labor,
            'supplies'      => $model->supplies,
            'shop_id'       => (int) $model->shop_id,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
