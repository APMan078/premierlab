<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\VehicleNewsRepository;
use App\Models\VehicleNews;
use App\Validators\VehicleNewsValidator;

/**
 * Class VehicleNewsRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class VehicleNewsRepositoryEloquent extends BaseRepository implements VehicleNewsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return VehicleNews::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return VehicleNewsValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
