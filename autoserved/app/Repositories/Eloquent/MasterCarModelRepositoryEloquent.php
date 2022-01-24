<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterCarModelRepository;
use App\Models\MasterCarModel;
use App\Validators\MasterCarModelValidator;

/**
 * Class MasterCarModelRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterCarModelRepositoryEloquent extends BaseRepository implements MasterCarModelRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MasterCarModel::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterCarModelValidator::class;
    }

    protected $fieldSearchable = [
        'name' =>'like',
        'make_id',
        'id'
    ];
    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        // $this->pushCriteria(app(RequestCriteria::class));
        $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
    }
    
}
