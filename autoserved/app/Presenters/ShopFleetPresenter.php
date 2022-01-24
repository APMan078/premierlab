<?php

namespace App\Presenters;

use App\Transformers\ShopFleetTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ShopFleetPresenter.
 *
 * @package namespace App\Presenters;
 */
class ShopFleetPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ShopFleetTransformer();
    }
}
