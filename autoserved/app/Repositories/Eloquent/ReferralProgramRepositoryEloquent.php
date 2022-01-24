<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Eloquent\BaseRepoWithSlugs;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\ReferralProgramRepository;
use App\Models\ReferralProgram;
use App\Validators\ReferralProgramValidator;

/**
 * Class ReferralProgramRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class ReferralProgramRepositoryEloquent extends BaseRepoWithSlugs implements ReferralProgramRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ReferralProgram::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ReferralProgramValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
