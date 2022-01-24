<?php

namespace App\Presenters;

use App\Transformers\FleetTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class FleetPresenter.
 *
 * @package namespace App\Presenters;
 */
class FleetPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new FleetTransformer();
    }
}
