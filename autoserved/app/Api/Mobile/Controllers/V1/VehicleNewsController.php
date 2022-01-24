<?php

namespace App\Api\Mobile\Controllers\V1;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\VehicleNewsCreateRequest;
use App\Http\Requests\VehicleNewsUpdateRequest;
use App\Contracts\Repository\VehicleNewsRepository;
use App\Validators\VehicleNewsValidator;
use App\Http\Controllers\Controller;

/**
 * Class VehicleNewsController.
 *
 * @package namespace App\Api\Controllers;
 */
class VehicleNewsController extends Controller
{
    /**
     * @var VehicleNewsRepository
     */
    protected $repository;

    /**
     * @var VehicleNewsValidator
     */
    protected $validator;

    /**
     * VehicleNewsController constructor.
     *
     * @param VehicleNewsRepository $repository
     * @param VehicleNewsValidator $validator
     */
    public function __construct(VehicleNewsRepository $repository, VehicleNewsValidator $validator)
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
        if (auth()->user()->user_type == config('user.type.customer')) {
            $vehicleNews = $this->get_all_vehicle_updates();
        } else {
            $vehicleNews = $this->repository->all();
        }

        return response()->json([
            'data' => $vehicleNews,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  VehicleNewsCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(VehicleNewsCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $vehicleNews = $this->repository->create($request->all());

            $response = [
                'message' => 'Vehicle News created.',
                'data'    => $vehicleNews->toArray(),
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
        $vehicleNews = $this->repository->find($id);

        return response()->json([
            'data' => $vehicleNews,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  VehicleNewsUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(VehicleNewsUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $vehicleNews = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'VehicleNews updated.',
                'data'    => $vehicleNews->toArray(),
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
            'message' => 'VehicleNews deleted.',
            'deleted' => $deleted,
        ]);
    }

    private function get_all_vehicle_updates()
    {
        $user = auth()->user();

        $vehicles = $user->vehicles;

        $news = array();

        foreach($vehicles as $vehicle) {
            $news[] = $vehicle->news;
        }

        return $news;
    }
}
