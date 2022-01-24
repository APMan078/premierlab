<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterCarGenerationRepository;
use App\Models\MasterCarGeneration;
use App\Validators\MasterCarGenerationValidator;

/**
 * Class MasterCarGenerationRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterCarGenerationRepositoryEloquent extends BaseRepository implements MasterCarGenerationRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MasterCarGeneration::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterCarGenerationValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
