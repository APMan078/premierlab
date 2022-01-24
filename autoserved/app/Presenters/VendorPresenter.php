<?php

namespace App\Presenters;

use App\Transformers\VendorTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class VendorPresenter.
 *
 * @package namespace App\Presenters;
 */
class VendorPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new VendorTransformer();
    }
}
