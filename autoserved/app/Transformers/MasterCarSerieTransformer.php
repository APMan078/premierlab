<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\MasterCarSerie;

/**
 * Class MasterCarSerieTransformer.
 *
 * @package namespace App\Transformers;
 */
class MasterCarSerieTransformer extends TransformerAbstract
{
    /**
     * Transform the MasterCarSerie entity.
     *
     * @param \App\Models\MasterCarSerie $model
     *
     * @return array
     */
    public function transform(MasterCarSerie $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
