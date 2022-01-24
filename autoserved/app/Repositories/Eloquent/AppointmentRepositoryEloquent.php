<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repository\AppointmentRepository;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\Appointment;
use App\Validators\AppointmentValidator;

/**
 * Class AppointmentRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class AppointmentRepositoryEloquent extends BaseRepository implements AppointmentRepository
{

    protected $auth;

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
        return Appointment::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return AppointmentValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * Returning the list of appointments according to the
     * user type accessing the controller.
     */
    public function all()
    {
        $user_type = $this->auth->user()->user_type;
        $user_id = $this->auth->user()->id;
        if ($user_type === config('user.type.customer')) {
            return Appointment::where('user_id', $user_id)->get();
        } elseif ($user_type === config('user.type.admin')) {
            return Appointment::all();
        } else {
            return [];
        }
    }
    
}
