<?php

namespace App\Api\Mobile\Controllers\V1;

use Illuminate\Http\Request;
use App\Http\Requests as ScheduleRequest;
use App\Models\Vehicle;
use App\Services\ScheduleService;
use App\Contracts\Repository\VehicleRepository;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

// edit the validation criterias from the classes below.
use App\Http\Requests\VehicleCreateRequest;
use App\Http\Requests\VehicleUpdateRequest;
use App\Validators\VehicleValidator;

class VehicleController
{
	protected $vehicle, $validator, $scheduleService;

	public function __construct(
		VehicleRepository $vehicle,
		VehicleValidator $validator,
		ScheduleService $scheduleService
	) {
		$this->vehicle = $vehicle;
		$this->validator = $validator;
		$this->scheduleService = $scheduleService;
	}

	public function index(Request $request) {
		try {
			$vehicles = $this->vehicle->all();

			$response = [
				'message' => 'Vechiles fetched.',
				'data' => $vehicles->toArray()
			];

			return response()->json($response);
		} catch (Exception $e) {
			return $this->errorResponse($e);
		}
	}

	public function store(VehicleCreateRequest $request)
	{
		try {
			$user = auth()->user();
			$this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
			$request['user_id'] = $user->id;
			
			$newVehicle = $this->vehicle->create($request->all());

			if ($newVehicle) {
                $schedule = $this->scheduleService->generate_schedule($newVehicle->id, 'pms');
            }
			
			$response = [
                'message' => 'Vehicle created.',
                'data'    => $newVehicle->toArray(),
            ];

			return response()->json($response);
		} catch (Exception $e) {
			return $this->errorResponse($e);
		}
	}

	public function show($vehicle) {
		try {
			$vehicle = $this->vehicle->find($vehicle);
			$response = [
				'message' => 'Vehicle fetched.',
				'data' => [
					'news' => $vehicle->news,
					'schedules' => $this->scheduleService->get_car_schedules(auth()->user(), $vehicle->id),
					'vehicle' => $vehicle
				]
			];
			return response()->json($response);
		} catch (Exception $e) {
			return $this->errorResponse($e);
		}
	}

	public function update(VehicleUpdateRequest $request, $vehicle) {
		try {
			$vehicle = $this->vehicle->update($request->all(), $vehicle);
			$response = [
                'message' => 'Vehicle updated.',
                'data'    => $vehicle->toArray(),
			];
			return response()->json($response);
		} catch (Exception $e) {
			return $this->errorResponse($e);
		}
	}

	public function destroy($vehicle) {
		try {
			$deletedVehicle = $this->vehicle->delete($vehicle);
			return response()->json([
                'message' => 'Vehicle deleted.',
                'deleted' => $deletedVehicle,
            ]);
		} catch (Exception $e) {
			return $this->errorResponse($e);
		}
	}

	private function errorResponse(Exception $e) {
		return response()->json([
			'error'  => true,
			'message' => $e->getMessage()
		]);
	}

}