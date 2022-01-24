<?php

namespace App\Presenters;

use App\Transformers\MasterCarModelTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterCarModelPresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterCarModelPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterCarModelTransformer();
    }
}
