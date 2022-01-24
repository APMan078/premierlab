<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\RequestServiceCreateRequest;
use App\Http\Requests\RequestServiceUpdateRequest;
use App\Contracts\Repository\RequestServiceRepository;
use App\Validators\RequestServiceValidator;

/**
 * Class RequestServicesController.
 *
 * @package namespace App\Api\Controllers;
 */
class RequestServicesController extends Controller
{
    /**
     * @var RequestServiceRepository
     */
    protected $repository;

    /**
     * @var RequestServiceValidator
     */
    protected $validator;

    /**
     * RequestServicesController constructor.
     *
     * @param RequestServiceRepository $repository
     * @param RequestServiceValidator $validator
     */
    public function __construct(RequestServiceRepository $repository, RequestServiceValidator $validator)
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
        $requestServices = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $requestServices,
            ]);
        }

        return view('requestServices.index', compact('requestServices'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  RequestServiceCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(RequestServiceCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $requestService = $this->repository->create($request->all());

            $response = [
                'message' => 'RequestService created.',
                'data'    => $requestService->toArray(),
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
        $requestService = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $requestService,
            ]);
        }

        return view('requestServices.show', compact('requestService'));
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
        $requestService = $this->repository->find($id);

        return view('requestServices.edit', compact('requestService'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  RequestServiceUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(RequestServiceUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $requestService = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'RequestService updated.',
                'data'    => $requestService->toArray(),
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
                'message' => 'RequestService deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'RequestService deleted.');
    }
}
