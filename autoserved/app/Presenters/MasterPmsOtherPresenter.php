<?php

namespace App\Presenters;

use App\Transformers\MasterPmsOtherTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterPmsOtherPresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterPmsOtherPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterPmsOtherTransformer();
    }
}
