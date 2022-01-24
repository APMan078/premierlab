<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterPmsOther;

/**
 * Class MasterPmsOtherTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterPmsOtherTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterPmsOther entity.
     *
     * @param \App\Models\MasterPmsOther $model
     *
     * @return array
     */
    public function transform(MasterPmsOther $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
