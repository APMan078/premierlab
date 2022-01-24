<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterCarTrim;

/**
 * Class MasterCarTrimTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterCarTrimTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterCarTrim entity.
     *
     * @param \App\Models\MasterCarTrim $model
     *
     * @return array
     */
    public function transform(MasterCarTrim $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
