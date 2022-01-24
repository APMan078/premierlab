<?php

namespace App\Presenters;

use App\Transformers\ApplicationTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ApplicationPresenter.
 *
 * @package namespace App\Presenters;
 */
class ApplicationPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ApplicationTransformer();
    }
}
