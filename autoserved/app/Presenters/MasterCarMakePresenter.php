<?php

namespace App\Presenters;

use App\Transformers\MasterCarMakeTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterCarMakePresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterCarMakePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterCarMakeTransformer();
    }
}
