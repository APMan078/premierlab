<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ShopFleetRepository;
use App\Models\ShopFleet;
use App\Validators\ShopFleetValidator;

/**
 * Class ShopFleetRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ShopFleetRepositoryEloquent extends BaseRepository implements ShopFleetRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ShopFleet::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ShopFleetValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
