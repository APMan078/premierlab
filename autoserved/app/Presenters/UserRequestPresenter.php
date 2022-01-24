<?php

namespace App\Presenters;

use App\Transformers\UserRequestTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class UserRequestPresenter.
 *
 * @package namespace App\Presenters;
 */
class UserRequestPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new UserRequestTransformer();
    }
}
