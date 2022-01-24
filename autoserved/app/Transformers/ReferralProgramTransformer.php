<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\ReferralProgram;

/**
 * Class ReferralProgramTransformer.
 *
 * @package namespace App\Transformers;
 */
class ReferralProgramTransformer extends TransformerAbstract
{
    /**
     * Transform the ReferralProgram entity.
     *
     * @param \App\Models\ReferralProgram $model
     *
     * @return array
     */
    public function transform(ReferralProgram $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
