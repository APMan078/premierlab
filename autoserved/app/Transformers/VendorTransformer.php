<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Vendor;

/**
 * Class VendorTransformer.
 *
 * @package namespace App\Transformers;
 */
class VendorTransformer extends TransformerAbstract
{
    /**
     * Transform the Vendor entity.
     *
     * @param \App\Models\Vendor $model
     *
     * @return array
     */
    public function transform(Vendor $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'      => $model->slug,
            'name' => $model->name,
            'type' => $model->type,
            'contact' => $model->contact,
            'description' => $model->description,
            'address' => $model->address,
            'city' => $model->city,
            'zip' => $model->zip,
            'longitude' => $model->longitude,
            'latitude' => $model->latitude,
            'tin' => $model->tin,
            'payment_method' => $model->payment_method,
            'status' => $model->status,
            'user_id' => (int) $model->user_id,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
