<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ApplicationRepository;
use App\Models\Application;
use App\Validators\ApplicationValidator;
use App\Presenters\ApplicationPresenter;
/**
 * Class ApplicationRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ApplicationRepositoryEloquent extends BaseRepoWithSlugs implements ApplicationRepository
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
        return Application::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ApplicationValidator::class;
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
        return ApplicationPresenter::class;
    }
    
}
