<?php

namespace App\Presenters;

use App\Transformers\MasterServiceListTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterServiceListPresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterServiceListPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterServiceListTransformer();
    }
}
