<?php

namespace App\Api\Controllers;

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
        $vehicleNews = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $vehicleNews->toArray(),
            ]);
        }

        return view('vehicleNews.index', compact('vehicleNews'));
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
                'message' => 'VehicleNews created.',
                'data'    => $vehicleNews->toArray(),
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
        $vehicleNews = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $vehicleNews,
            ]);
        }

        return view('vehicleNews.show', compact('vehicleNews'));
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
        $vehicleNews = $this->repository->find($id);

        return view('vehicleNews.edit', compact('vehicleNews'));
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
                'message' => 'VehicleNews deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'VehicleNews deleted.');
    }


    private function get_all_vehicle_updates()
    {
        $user = auth()->user();

        $vehicles = $user->vehicles;

        $news = array();
        foreach($vehicles as $vehicle) {
            $news[] = $vehicle->news;
        }

        return response()->json([
            'message' => 'Vehicle Updates fetched.',
            'data' => $news->toArray()
        ]);
    }

    private function get_vehicle_updates($vehicle)
    {
        $news = $this->repository->where('car_id', $vehicle->id)
                    ->orderBy('created_at', 'desc')
                    ->get();

        return response()->json([
            'message' => 'Vehicle Updates',
            'data' => $news->toArray()
        ]);
    }
}
