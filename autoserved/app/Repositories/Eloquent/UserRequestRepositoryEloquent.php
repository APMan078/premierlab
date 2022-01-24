<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\UserRequestRepository;
use App\Models\UserRequest;
use App\Validators\UserRequestValidator;
use App\Presenters\UserRequestPresenter;
use App\Criterias\OnlyOwnUserCriteria;
/**
 * Class UserRequestRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class UserRequestRepositoryEloquent extends BaseRepoWithSlugs implements UserRequestRepository
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
        return UserRequest::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return UserRequestValidator::class;
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
        return UserRequestPresenter::class;
    }
    
}
