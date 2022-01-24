<?php

namespace App\Presenters;

use App\Transformers\VehicleNewsTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class VehicleNewsPresenter.
 *
 * @package namespace App\Presenters;
 */
class VehicleNewsPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new VehicleNewsTransformer();
    }
}
