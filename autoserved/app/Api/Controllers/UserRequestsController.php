<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\UserRequestCreateRequest;
use App\Http\Requests\UserRequestUpdateRequest;
use App\Contracts\Repository\UserRequestRepository;
use App\Contracts\Repository\RequestPmsRepository;
use App\Contracts\Repository\RequestServiceRepository;
use App\Validators\UserRequestValidator;
use Illuminate\Support\Facades\Auth;
use App\Models\Vehicle;
use App\Models\Shop;
use Illuminate\Support\Facades\DB;
/**
 * Class UserRequestsController.
 *
 * @package namespace App\Api\Controllers;
 */
class UserRequestsController
{
    /**
     * @var UserRequestRepository
     */
    protected $repository;

    /**
     * @var UserRequestValidator
     */
    protected $validator;

    /**
     * UserRequestsController constructor.
     *
     * @param UserRequestRepository $repository
     * @param UserRequestValidator $validator
     */
    public function __construct(UserRequestRepository $repository, RequestPmsRepository $pmsRepo, RequestServiceRepository $serviceRepo, UserRequestValidator $validator)
    {
        $this->repository = $repository;
        $this->pmsRepo = $pmsRepo;
        $this->serviceRepo = $serviceRepo;
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
        if ( Auth::user()->user_type === 'vendor') {
            $shop = Shop::where('user_id', Auth::user()->id)->first();
            $latitude = $shop->latitude ? $shop->latitude : '120.984222';
            $longitude = $shop->longitude ? $shop->longitude : '14.599512';
            // $latitude = "120.984222";
            // $longitude = "14.599512";
            $query = DB::table("user_requests")
            ->select("*", DB::raw("6371 * acos(cos(radians(" . $latitude . "))
            * cos(radians(user_requests.latitude)) 
            * cos(radians(user_requests.longitude) - radians(" . $longitude . "))
            + sin(radians(" .$latitude. ")) 
            * sin(radians(user_requests.latitude))) AS distance"))
            ->having('distance', '<', 20)
            ->orderBy('distance', 'asc')
            ->get()
            ;
            $distance = array();
            $request_ids = array();
            foreach($query as $request) {
                $request_ids[] = $request->id;
                $distance[] = 6371 * acos(cos(deg2rad($latitude)) * cos(deg2rad($request->latitude)) * cos(deg2rad($request->longitude) - deg2rad($longitude))
                + sin(deg2rad($latitude)) * sin(deg2rad($request->latitude)));
            }
            $userRequests = $this->repository->findWhereIn('id', $request_ids);
            $i = 0;
            foreach($distance as $dist) {
                $userRequests[$i]['distance'] = $dist;
                $i = $i + 1;
            }
            if (request()->wantsJson()) {
    
                return response()->json([
                    'data' => $userRequests,
                    // 'distance' => $distance
                ]);
            }
    
            return view('userRequests.index', compact('userRequests'));
        } else{
            $userRequests = $this->repository->all();
    
            if (request()->wantsJson()) {
    
                return response()->json([
                    'data' => $userRequests,
                ]);
            }
    
            return view('userRequests.index', compact('userRequests'));

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserRequestCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(UserRequestCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $vehicle = Vehicle::find($request['car_id']);

            $request['latitude'] = $vehicle->latitude;
            $request['longitude'] = $vehicle->longitude;
            $request['status'] = "open";
            $userRequest = $this->repository->create($request->only('car_id', 'preferred_schedule', 'type', 'longitude', 'latitude', 'status' ));
            
            if($request['type'] == 'pms') {
                $add = [];
                $add['master_pms_id'] = $request['master_pms_id'];
                $add['request_id'] = $userRequest->id;
                $add['oil_type'] = $request['oil_type'];
                $add['parts_type'] = $request['parts_type'];
                $add['replacements'] = $request['replacements'];
                $add['others'] = $request['others'];
                $additional= $this->pmsRepo->create($add);
            } else {
                $add = [];
                $add['requirements'] = $request['requirements'];
                $add['preferrence'] = $request['preferrence'];
                $add['request_id'] = $userRequest->id;
                $additional= $this->serviceRepo->create($add);
            } 



            $data = array(
                'request' => $userRequest,
                'additional' => $additional
            );

            $response = [
                'message' => 'User Request created.',
                'data'    => $data,
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
        $userRequest = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $userRequest,
            ]);
        }

        return view('userRequests.show', compact('userRequest'));
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
        $userRequest = $this->repository->find($id);

        return view('userRequests.edit', compact('userRequest'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UserRequestUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(UserRequestUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $userRequest = $this->repository->update($request->only('car_id', 'preferred_schedule'), $id);

            $response = [
                'message' => 'UserRequest updated.',
                'data'    => $userRequest->toArray(),
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
                'message' => 'UserRequest deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'UserRequest deleted.');
    }

    public function change_status(UserRequestCreateRequest $request, $id)
    {   
        try {
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            // get the following (status, shop_id) Open or Close
            if($request->status === 'close') {
                $userRequest = $this->repository->update($request->only('status'), $id);
            } elseif ($request->status === 'open') {
                $userRequest = $this->repository->update($request->only('status', 'preferred_schedule'), $id);
            }
            
            $data = array(
                'request' => $userRequest,
                'additional' => $additional
            );

            $response = [
                'message' => 'User Request status updated.',
                'data'    => $data,
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
}
