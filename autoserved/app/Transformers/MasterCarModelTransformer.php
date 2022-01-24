<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterCarModel;

/**
 * Class MasterCarModelTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterCarModelTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterCarModel entity.
     *
     * @param \App\Models\MasterCarModel $model
     *
     * @return array
     */
    public function transform(MasterCarModel $model)
    {
        return [
            'id'         => (int) $model->id,
            'make_id'   => $model->make_id,
            'name'      => $model->name,
            'type_id'   => $model->type_id,
            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
