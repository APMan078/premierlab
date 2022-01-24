<?php

namespace App\Presenters;

use App\Transformers\PersonnelTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PersonnelPresenter.
 *
 * @package namespace App\Presenters;
 */
class PersonnelPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PersonnelTransformer();
    }
}
