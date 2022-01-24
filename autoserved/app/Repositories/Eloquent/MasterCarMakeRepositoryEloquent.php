<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterCarMakeRepository;
use App\Models\MasterCarMake;
use App\Validators\MasterCarMakeValidator;
use App\Presenters\MasterCarMakePresenter;
/**
 * Class MasterCarMakeRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterCarMakeRepositoryEloquent extends BaseRepository implements MasterCarMakeRepository
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
        return MasterCarMake::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterCarMakeValidator::class;
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
        // $this->pushCriteria(app(RequestCriteria::class));
    }

    public function presenter()
    {
        return MasterCarMakePresenter::class;
    }
}
