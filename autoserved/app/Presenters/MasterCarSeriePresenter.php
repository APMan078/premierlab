<?php

namespace App\Presenters;

use App\Transformers\MasterCarSerieTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterCarSeriePresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterCarSeriePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterCarSerieTransformer();
    }
}
