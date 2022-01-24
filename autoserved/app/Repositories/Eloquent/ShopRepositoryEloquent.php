<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ShopRepository;
use App\Models\Shop;
use App\Validators\ShopValidator;
use App\Presenters\ShopPresenter;
use App\Criterias\OnlyOwnUserCriteria;
/**
 * Class ShopRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ShopRepositoryEloquent extends BaseRepoWithSlugs implements ShopRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Shop::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ShopValidator::class;
    }


    private $auth;

    protected $skipPresenter = true;

    protected $fieldSearchable = [
        'name' =>'like'
    ];

    public function boot()
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');
        // $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $this->pushCriteria(OnlyOwnUserCriteria::class);
    }

    public function presenter()
    {
        return ShopPresenter::class;
    }

    public function avatar()
    {
        return $this->$model->avatar();
    }

    public function banner()
    {
        return $this->$model->banner();
    }
}
