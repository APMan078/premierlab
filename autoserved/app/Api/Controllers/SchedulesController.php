<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ScheduleCreateRequest;
use App\Http\Requests\ScheduleUpdateRequest;
use App\Contracts\Repository\ScheduleRepository;
use App\Validators\ScheduleValidator;
use App\Services\ScheduleService;
use App\Models\Vehicle;
/**
 * Class SchedulesController.
 *
 * @package namespace App\Api\Controllers;
 */
class SchedulesController
{
    /**
     * @var ScheduleRepository
     */
    protected $repository;
    protected $car_schedule_service;

    /**
     * @var ScheduleValidator
     */
    protected $validator;

    /**
     * SchedulesController constructor.
     *
     * @param ScheduleRepository $repository
     * @param ScheduleValidator $validator
     */
    public function __construct(ScheduleRepository $repository, ScheduleValidator $validator, ScheduleService $car_schedule_service)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
        $this->car_schedule_service = $car_schedule_service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $schedules = $this->repository->all();
        $car = $schedules[0]->car_id;
        $vehicle = Vehicle::find($car);
        $data = [
            "schedule" => $schedules,
            "vehicle" => $vehicle
        ];
        if (request()->wantsJson()) {

            return response()->json([
                'data' => $data,
            ]);
        }

        return view('schedules.index', compact('schedules'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ScheduleCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ScheduleCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            // $schedule = $this->repository->create($request->all());
            $schedule = $this->car_schedule_service->generate_schedule($request['car_id'], $request['type']);
            $response = [
                'message' => 'Schedule created.',
                'data'    => $schedule,
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
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
        $schedule = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $schedule,
            ]);
        }

        return view('schedules.show', compact('schedule'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $schedule = $this->repository->find($id);

        return view('schedules.edit', compact('schedule'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ScheduleUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ScheduleUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $schedule = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Schedule updated.',
                'data'    => $schedule->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
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

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Schedule deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Schedule deleted.');
    }

    public function getCarSchedule($id) {
        $schedules = $this->repository->findByField('car_id', $id);
        $vehicle = Vehicle::find($id);
        $data = array(
            [
                "car_sched" => $schedules,
                "vehicle" => $vehicle
            ]
        );
        if (request()->wantsJson()) {

            return response()->json([
                'data' => $data,
            ]);
        }
    }
}
