<?php

namespace App\Presenters;

use App\Transformers\ReferralProgramTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ReferralProgramPresenter.
 *
 * @package namespace App\Presenters;
 */
class ReferralProgramPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ReferralProgramTransformer();
    }
}
