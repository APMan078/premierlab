<?php

namespace App\Api\Mobile\Controllers\V1;

use App\Contracts\Repository\UserRequestRepository;
use App\Contracts\Repository\RequestServiceRepository;
use App\Http\Requests\UserRequestCreateRequest;
use App\Http\Requests\UserRequestUpdateRequest;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Contracts\Repository\RequestPmsRepository;
use App\Validators\UserRequestValidator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\Vehicle;

class UserRequestController
{
	protected $userRequest, $serviceRepo, $pmsRepo, $validator;

	public function __construct(
		UserRequestRepository $userRequest,
		RequestServiceRepository $serviceRepo,
		UserRequestValidator $validator,
		RequestPmsRepository $pmsRepo
	) {
		$this->userRequest = $userRequest;
		$this->serviceRepo = $serviceRepo;
		$this->pmsRepo = $pmsRepo;
		$this->validator = $validator;
	}

	public function index() {
		$userRequests = $this->userRequest->all();
		return response()->json([
			'data' => $userRequests
		]);
	}
	public function store(UserRequestCreateRequest $request) {
		try {
			$this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
			
			$vehicle = Vehicle::findOrFail($request['car_id']);

			$request['latitude'] = $vehicle->latitude;
			$request['longitude'] = $vehicle->longitude;
			$request['status'] = 'open';
			
			$userRequest = $this->userRequest->create($request->only('car_id', 'preferred_schedule', 'type', 'longitude', 'latitude', 'status'));

			$add = array();

			if ($request['type'] === 'pms') {
				$add['master_pms_id'] = $request['master_pms_id'];
                $add['request_id'] = $userRequest->id;
                $add['oil_type'] = $request['oil_type'];
                $add['parts_type'] = $request['parts_type'];
                $add['replacements'] = $request['replacements'];
				$add['others'] = $request['others'];
				$additional= $this->pmsRepo->create($add);
			} else {
				$add['requirements'] = $request['requirements'];
                $add['preferrence'] = $request['preferrence'];
                $add['request_id'] = $userRequest->id;
                $additional= $this->serviceRepo->create($add);
			}

			$data = [
				'request' => $userRequest,
				'additional' => $additional
			];

			$response = [
				'message' => 'User Request created.',
				'data' => $data
			];
			
			return response()->json($response);
		} catch (ValidatorException $e) {
			return response()->json([
				'error' => true,
				'message' => $e->getMessageBag()
			]);
		} catch (Exception $e) {
			return response()->json([
				'error' => true,
				'message' => $e->getMessage()
			]);
		} catch (ModelNotFoundException $e) {
			return response()->json([
				'error' => true,
				'message' => $e->getMessage()
			]);
		}
	}
	public function update(UserRequestUpdateRequest $request, $id) {
		try {
			$this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);
			$userRequest = $this->userRequest->update($request->only('car_id', 'preferred_schedule'), $id);

			$response = [
				'message' => 'User Request has been updated.',
				'data' => $userRequest->toArray()
			];

			return response()->json($response);
		} catch (ValidatorException $e) {
			return response()->json([
				'error' => true,
				'message' => $e->getMessageBag()
			]);
		}
	}

	public function show($request) {
		$userRequest = $this->userRequest->find($request);
		$response = [
			'message' => 'User Request found.',
			'data' => $userRequest->toArray()
		];
		return response()->json($response);
	}

	public function destroy($id) {
		try {
			$deleted = $this->userRequest->delete($id);
		
			return response()->json([
				'message' => 'User Request deleted.',
				'deleted' => $deleted,
			]);
		} catch (Exception $e) {
			return response()->json([
				'error' => true,
				'message' => $e->getMessage()
			]);
		}
	}
}