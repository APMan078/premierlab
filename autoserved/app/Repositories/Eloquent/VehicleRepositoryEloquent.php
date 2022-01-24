<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\VehicleRepository;
use App\Models\Vehicle;
use App\Validators\VehicleValidator;
use App\Presenters\VehiclePresenter;
use App\Criterias\OnlyOwnUserCriteria;
/**
 * Class VehicleRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class VehicleRepositoryEloquent extends BaseRepoWithSlugs implements VehicleRepository
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
        return Vehicle::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return VehicleValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');
        // $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $this->pushCriteria(OnlyOwnUserCriteria::class);

    }

    public function presenter()
    {
        return VehiclePresenter::class;
    }
}
