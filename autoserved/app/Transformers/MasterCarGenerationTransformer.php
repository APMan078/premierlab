<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterCarGeneration;

/**
 * Class MasterCarGenerationTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterCarGenerationTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterCarGeneration entity.
     *
     * @param \App\Models\MasterCarGeneration $model
     *
     * @return array
     */
    public function transform(MasterCarGeneration $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
