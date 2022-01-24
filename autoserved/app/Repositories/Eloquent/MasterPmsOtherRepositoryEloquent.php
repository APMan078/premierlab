<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterPmsOtherRepository;
use App\Models\MasterPmsOther;
use App\Validators\MasterPmsOtherValidator;

/**
 * Class MasterPmsOtherRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterPmsOtherRepositoryEloquent extends BaseRepository implements MasterPmsOtherRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MasterPmsOther::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterPmsOtherValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
