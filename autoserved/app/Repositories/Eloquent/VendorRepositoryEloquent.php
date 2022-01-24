<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\VendorRepository;
use App\Models\Vendor;
use App\Validators\VendorValidator;
use App\Presenters\VendorPresenter;
use App\Criterias\OnlyOwnUserCriteria;
/**
 * Class VendorRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class VendorRepositoryEloquent extends BaseRepoWithSlugs implements VendorRepository
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
        return Vendor::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return VendorValidator::class;
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
        return VendorPresenter::class;
    }
    
}
