<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterServiceList;

/**
 * Class MasterServiceListTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterServiceListTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterServiceList entity.
     *
     * @param \App\Models\MasterServiceList $model
     *
     * @return array
     */
    public function transform(MasterServiceList $model)
    {
        return [
            'id'         => (int) $model->id,

            'type'  => $model->type,
            'name'  => $model->name,
            'details'   => $model->details,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
