<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\RequestPms;

/**
 * Class RequestPmsTransformer.
 *
 * @package namespace App\Transformers;
 */
class RequestPmsTransformer extends TransformerAbstract
{
    /**
     * Transform the RequestPms entity.
     *
     * @param \App\Models\RequestPms $model
     *
     * @return array
     */
    public function transform(RequestPms $model)
    {
        return [
            'id'         => (int) $model->id,
            'slug'      => $model->slug,

            'master_pms_id' => (int) $model->master_pms_id,
            'request_id' => (int) $model->request_id,
            'oil_type' => $model->oil_type,
            'parts_type' => $model->parts_type,
            'replacements' => $model->replacements,
            'others' => $model->others,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
