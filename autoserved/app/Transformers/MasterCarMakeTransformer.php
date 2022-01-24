<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterCarMake;

/**
 * Class MasterCarMakeTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterCarMakeTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterCarMake entity.
     *
     * @param \App\Models\MasterCarMake $model
     *
     * @return array
     */
    public function transform(MasterCarMake $model)
    {
        return [
            'id'         => (int) $model->id,
            'name'      => $model->name,
            'type_id'   => $model->type_id,
            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
