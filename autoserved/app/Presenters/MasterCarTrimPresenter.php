<?php

namespace App\Presenters;

use App\Transformers\MasterCarTrimTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterCarTrimPresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterCarTrimPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterCarTrimTransformer();
    }
}
