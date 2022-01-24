<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\RequestServiceRepository;
use App\Models\RequestService;
use App\Validators\RequestServiceValidator;
use App\Presenters\RequestServicePresenter;
use App\Criterias\OnlyOwnUserCriteria;

/**
 * Class RequestServiceRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class RequestServiceRepositoryEloquent extends BaseRepoWithSlugs implements RequestServiceRepository
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
        return RequestService::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return RequestServiceValidator::class;
    }


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
        return RequestServicePresenter::class;
    }
}
