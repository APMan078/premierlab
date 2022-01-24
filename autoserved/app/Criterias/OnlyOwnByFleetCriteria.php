<?php

namespace App\Criterias;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;
use App\Models\Fleet;

class OnlyOwnByFleetCriteria implements CriteriaInterface
{
    private $auth;

    public function apply($model, RepositoryInterface $repository)
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');

        $fleet_id = Fleet::where('user_id', $this->auth->user()->id)->get('id');
        $model = $model->where('fleet_id', '=', $fleet_id);

        return $model;
    }
}
