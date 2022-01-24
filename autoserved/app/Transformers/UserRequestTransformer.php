<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\UserRequest;

/**
 * Class UserRequestTransformer.
 *
 * @package namespace App\Transformers;
 */
class UserRequestTransformer extends TransformerAbstract
{
    /**
     * Transform the UserRequest entity.
     *
     * @param \App\Models\UserRequest $model
     *
     * @return array
     */
    public function transform(UserRequest $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'      => $model->slug,
            'car_id'    => (int) $model->car_id,
            'preferred_schedule'    => $model->preferred_schedule,
            'type'  => $model->type,
            'longitude'     => $model->longitude,
            'latitude'  => $model->latitude,
            'status'    => $model->status,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
