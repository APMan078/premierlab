<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ScheduleRepository;
use App\Models\Schedule;
use App\Validators\ScheduleValidator;
use App\Presenters\SchedulePresenter;
/**
 * Class ScheduleRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ScheduleRepositoryEloquent extends BaseRepoWithSlugs implements ScheduleRepository
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
        return Schedule::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ScheduleValidator::class;
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
        return SchedulePresenter::class;
    }
}
