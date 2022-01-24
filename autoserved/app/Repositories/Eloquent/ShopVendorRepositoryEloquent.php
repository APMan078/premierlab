<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ShopVendorRepository;
use App\Models\ShopVendor;
use App\Validators\ShopVendorValidator;

/**
 * Class ShopVendorRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ShopVendorRepositoryEloquent extends BaseRepository implements ShopVendorRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ShopVendor::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ShopVendorValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
