<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Application;

/**
 * Class ApplicationTransformer.
 *
 * @package namespace App\Transformers;
 */
class ApplicationTransformer extends TransformerAbstract
{
    /**
     * Transform the Application entity.
     *
     * @param \App\Models\Application $model
     *
     * @return array
     */
    public function transform(Application $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'      => $model->slug,
            'merch_cert' => $model->merch_cert,
            'special_tools' => $model->special_tools,
            'verified_registration' => $model->verified_registration,
            'verified_permit' => $model->verified_permit,
            'verified_ceritification' => $model->verified_ceritification,
            'verified_lifters' => $model->verified_lifters,
            'verified_merch_cert' => $model->verified_merch_cert,
            'verified_special_tools' => $model->verified_special_tools,
            'shop_id' => $model->shop_id,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
