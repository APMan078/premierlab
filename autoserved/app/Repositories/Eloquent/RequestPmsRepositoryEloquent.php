<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\RequestPmsRepository;
use App\Models\RequestPms;
use App\Validators\RequestPmsValidator;
use App\Presenters\RequestPmsPresenter;
use App\Criterias\OnlyOwnUserCriteria;

/**
 * Class RequestPmsRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class RequestPmsRepositoryEloquent extends BaseRepoWithSlugs implements RequestPmsRepository
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
        return RequestPms::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return RequestPmsValidator::class;
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
        return RequestPmsPresenter::class;
    }
    
}
