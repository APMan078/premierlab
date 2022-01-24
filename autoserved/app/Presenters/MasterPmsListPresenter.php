<?php

namespace App\Presenters;

use App\Transformers\MasterPmsListTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class MasterPmsListPresenter.
 *
 * @package namespace App\Presenters;
 */
class MasterPmsListPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new MasterPmsListTransformer();
    }
}
