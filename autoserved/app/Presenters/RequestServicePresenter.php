<?php

namespace App\Presenters;

use App\Transformers\RequestServiceTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class RequestServicePresenter.
 *
 * @package namespace App\Presenters;
 */
class RequestServicePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new RequestServiceTransformer();
    }
}
