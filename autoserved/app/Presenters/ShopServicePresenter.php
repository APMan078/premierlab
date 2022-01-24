<?php

namespace App\Presenters;

use App\Transformers\ShopServiceTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ShopServicePresenter.
 *
 * @package namespace App\Presenters;
 */
class ShopServicePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ShopServiceTransformer();
    }
}
