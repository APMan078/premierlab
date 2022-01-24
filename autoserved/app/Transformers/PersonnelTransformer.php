<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Personnel;

/**
 * Class PersonnelTransformer.
 *
 * @package namespace App\Transformers;
 */
class PersonnelTransformer extends TransformerAbstract
{
    /**
     * Transform the Personnel entity.
     *
     * @param \App\Models\Personnel $model
     *
     * @return array
     */
    public function transform(Personnel $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'  => $model->slug,
            'sss' => $model->sss,
            'tin' => $model->tin,
            'philhealth' => $model->philhealth,
            'rate' => (float) $model->rate,
            'role' => $model->role,
            'shop_id' => (int) $model->shop_id,
            'user_id' => (int) $model->user_id,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
