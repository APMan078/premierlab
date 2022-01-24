<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\RequestService;

/**
 * Class RequestServiceTransformer.
 *
 * @package namespace App\Transformers;
 */
class RequestServiceTransformer extends TransformerAbstract
{
    /**
     * Transform the RequestService entity.
     *
     * @param \App\Models\RequestService $model
     *
     * @return array
     */
    public function transform(RequestService $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
