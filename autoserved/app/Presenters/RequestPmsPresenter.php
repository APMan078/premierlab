<?php

namespace App\Presenters;

use App\Transformers\RequestPmsTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class RequestPmsPresenter.
 *
 * @package namespace App\Presenters;
 */
class RequestPmsPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new RequestPmsTransformer();
    }
}
