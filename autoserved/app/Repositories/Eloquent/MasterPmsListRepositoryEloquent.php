<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterPmsListRepository;
use App\Models\MasterPmsList;
use App\Validators\MasterPmsListValidator;
use App\Presenters\MasterPmsListPresenter;

/**
 * Class MasterPmsListRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterPmsListRepositoryEloquent extends BaseRepository implements MasterPmsListRepository
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
        return MasterPmsList::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterPmsListValidator::class;
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
        return MasterPmsListPresenter::class;
    }
}
