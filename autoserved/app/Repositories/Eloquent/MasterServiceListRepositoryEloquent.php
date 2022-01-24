<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterServiceListRepository;
use App\Models\MasterServiceList;
use App\Validators\MasterServiceListValidator;
use App\Presenters\MasterServiceListPresenter;
/**
 * Class MasterServiceListRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterServiceListRepositoryEloquent extends BaseRepoWithSlugs implements MasterServiceListRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MasterServiceList::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterServiceListValidator::class;
    }

    private $auth;

    protected $skipPresenter = true;

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
    }

    public function presenter()
    {
        return MasterServiceListPresenter::class;
    }
}
