<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ShopServiceRepository;
use App\Models\ShopService;
use App\Validators\ShopServiceValidator;
use App\Presenters\ShopServicePresenter;

/**
 * Class ShopServiceRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ShopServiceRepositoryEloquent extends BaseRepoWithSlugs implements ShopServiceRepository
{
    private $auth;

    protected $skipPresenter = true;
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ShopService::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ShopServiceValidator::class;
    }

    protected $fieldSearchable = [
        'name' =>'like'
    ];
    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');
        $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        // $this->pushCriteria(OnlyOwnUserCriteria::class);
    }
    
    public function presenter()
    {
        return ShopServicePresenter::class;
    }
    
}
