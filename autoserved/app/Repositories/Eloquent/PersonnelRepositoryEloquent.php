<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\PersonnelRepository;
use App\Models\Personnel;
use App\Validators\PersonnelValidator;
use App\Presenters\PersonnelPresenter;
use App\Criterias\OnlyOwnUserCriteria;
/**
 * Class PersonnelRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class PersonnelRepositoryEloquent extends BaseRepoWithSlugs implements PersonnelRepository
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
        return Personnel::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return PersonnelValidator::class;
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
        return PersonnelPresenter::class;
    }
    
}
