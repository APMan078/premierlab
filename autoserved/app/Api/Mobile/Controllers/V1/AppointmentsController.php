<?php

namespace App\Api\Mobile\Controllers\V1;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\AppointmentCreateRequest;
use App\Http\Requests\AppointmentUpdateRequest;
use App\Contracts\Repository\AppointmentRepository;
use App\Validators\AppointmentValidator;
use App\Http\Controllers\Controller;

/**
 * Class AppointmentsController.
 *
 * @package namespace App\Api\Controllers;
 */
class AppointmentsController extends Controller
{
    /**
     * @var AppointmentRepository
     */
    protected $repository;

    /**
     * @var AppointmentValidator
     */
    protected $validator;

    /**
     * AppointmentsController constructor.
     *
     * @param AppointmentRepository $repository
     * @param AppointmentValidator $validator
     */
    public function __construct(AppointmentRepository $repository, AppointmentValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $appointments = $this->repository->all();

        return response()->json([
            'data' => $appointments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  AppointmentCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(AppointmentCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $appointment = $this->repository->create($request->all());

            $response = [
                'message' => 'Appointment created.',
                'data'    => $appointment->toArray(),
            ];

            return response()->json($response);
        } catch (ValidatorException $e) {
            return response()->json([
                'error'   => true,
                'message' => $e->getMessageBag()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appointment = $this->repository->find($id);        
        
        return response()->json([
            'data' => $appointment,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  AppointmentUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(AppointmentUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $appointment = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Appointment updated.',
                'data'    => $appointment->toArray(),
            ];

            return response()->json($response);
        } catch (ValidatorException $e) {
            return response()->json([
                'error'   => true,
                'message' => $e->getMessageBag()
            ]);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        return response()->json([
            'message' => 'Appointment deleted.',
            'deleted' => $deleted,
        ]);
    }
}
