<?php

namespace App\Presenters;

use App\Transformers\ShopVendorTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ShopVendorPresenter.
 *
 * @package namespace App\Presenters;
 */
class ShopVendorPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ShopVendorTransformer();
    }
}
