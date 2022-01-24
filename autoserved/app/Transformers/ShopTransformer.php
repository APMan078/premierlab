<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Shop;

/**
 * Class ShopTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShopTransformer extends TransformerAbstract
{
    /**
     * Transform the Shop entity.
     *
     * @param \App\Models\Shop $model
     *
     * @return array
     */
    public function transform(Shop $model)
    {
        return [
            'id' => (int) $model->id,
            'slug' => $model->slug,
            /* place your other model properties here */
            'name' => $model->name,
            'type' => $model->type,
            'avatar' => $model->avatar,
            'banner' => $model->banner,
            'contact' => $model->contact,
            'description' => $model->description,
            'address' => $model->address,
            'city' => $model->city,
            'zip' => $model->zip,
            'longitude' => $model->longitude,
            'latitude' => $model->latitude,
            'operations' => $model->operations,
            'features' => $model->features,
            'amenities' => $model->amenities,
            'tools' => $model->tools,
            'payment_method' => $model->payment_method,
            'completion' => $model->completion,
            'level' => $model->level,
            'status' => $model->status,
            'user_id' => (int) $model->user_id,
            'pms_enabled' => (int) $model->pms_enabled,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
