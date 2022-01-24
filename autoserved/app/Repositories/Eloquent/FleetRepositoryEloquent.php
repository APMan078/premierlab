<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\FleetRepository;
use App\Models\Fleet;
use App\Validators\FleetValidator;
use App\Presenters\FleetPresenter;
use App\Criterias\OnlyOwnUserCriteria;
/**
 * Class FleetRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class FleetRepositoryEloquent extends BaseRepoWithSlugs implements FleetRepository
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
        return Fleet::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return FleetValidator::class;
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
        return FleetPresenter::class;
    }
    
}
