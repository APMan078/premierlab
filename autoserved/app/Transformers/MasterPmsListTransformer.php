<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterPmsList;

/**
 * Class MasterPmsListTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterPmsListTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterPmsList entity.
     *
     * @param \App\Models\MasterPmsList $model
     *
     * @return array
     */
    public function transform(MasterPmsList $model)
    {
        return [
            'id'         => (int) $model->id,

            'mileage'   => $model->mileage,
            'check_items'   => $model->check_items,
            'clean_items'   => $model->clean_items,
            'change_items'  => $model->change_items,

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
