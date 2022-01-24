<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\WorkflowRepository;
use App\Models\Workflow;
use App\Validators\WorkflowValidator;
use Illuminate\Contracts\Auth\Factory as Auth;

/**
 * Class WorkflowRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class WorkflowRepositoryEloquent extends BaseRepository implements WorkflowRepository
{   
    private $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Workflow::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return WorkflowValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
    public function all()
    {
        $user = $this->auth->user();
        if ($user->user_type === config('user.type.admin')) {
            return Workflow::all();
        } elseif ($user->user_type === config('user.type.vendor')) {
            if ($user->has('vendor_info')->first()) {
                return $user->vendor_info->workflows->all();
            } elseif ($user->has('shops')->get()) {
                $workflow = collect();
                $user->shops->each(function ($shop) use ($workflow) {
                    $workflow->push($shop->workflows);
                });
                return $workflow->flatten()->all();
            } else {
                return [];
            }
        }
    }
}
