<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\MasterCarSerieRepository;
use App\Models\MasterCarSerie;
use App\Validators\MasterCarSerieValidator;
use App\Presenters\MasterCarSeriePresenter;

/**
 * Class MasterCarSerieRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class MasterCarSerieRepositoryEloquent extends BaseRepository implements MasterCarSerieRepository
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
        return MasterCarSerie::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return MasterCarSerieValidator::class;
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
        return MasterCarSeriePresenter::class;
    }
    
}
