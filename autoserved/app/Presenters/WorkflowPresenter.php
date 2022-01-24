<?php

namespace App\Presenters;

use App\Transformers\WorkflowTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class WorkflowPresenter.
 *
 * @package namespace App\Presenters;
 */
class WorkflowPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new WorkflowTransformer();
    }
}
