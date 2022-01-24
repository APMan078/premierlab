<?php

namespace App\Presenters;

use App\Transformers\MasterCarGenerationTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterCarGenerationPresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterCarGenerationPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterCarGenerationTransformer();
    }
}
