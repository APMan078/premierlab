<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterCarTrimRepository;
use App\Models\MasterCarTrim;
use App\Validators\MasterCarTrimValidator;
use App\Presenters\MasterCarTrimPresenter;
/**
 * Class MasterCarTrimRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterCarTrimRepositoryEloquent extends BaseRepository implements MasterCarTrimRepository
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
        return MasterCarTrim::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterCarTrimValidator::class;
    }

    protected $fieldSearchable = [
        'name' =>'like',
        'id'
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
        return MasterCarTrimPresenter::class;
    }
}
