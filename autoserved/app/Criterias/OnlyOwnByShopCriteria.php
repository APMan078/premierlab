<?php

namespace App\Criterias;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;
use App\Models\Shop;

class OnlyOwnByShopCriteria implements CriteriaInterface
{
    private $auth;

    public function apply($model, RepositoryInterface $repository)
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');

        $shop_id = Shop::where('user_id', $this->auth->user()->id)->get('id');
        $model = $model->where('shop_id', '=', $shop_id);

        return $model;
    }
}
