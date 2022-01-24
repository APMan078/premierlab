<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Customer;

/**
 * Class CustomerTransformer.
 *
 * @package namespace App\Transformers;
 */
class CustomerTransformer extends TransformerAbstract
{
    /**
     * Transform the Customer entity.
     *
     * @param \App\Models\Customer $model
     *
     * @return array
     */
    public function transform(Customer $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'      => $model->slug,
            'detail'    => $model->detail,
            'type'      => $model->type,
            'shop_id'   => (int) $model->shop_id,
            'user_id'   => (int) $model->user_id,
            'vendor_id' => (int) $model->vendor_id,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
