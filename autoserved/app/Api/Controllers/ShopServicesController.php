<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ShopServiceCreateRequest;
use App\Http\Requests\ShopServiceUpdateRequest;
use App\Contracts\Repository\ShopServiceRepository;
use App\Validators\ShopServiceValidator;
use App\Models\Shop;
/**
 * Class ShopServicesController.
 *
 * @package namespace App\Api\Controllers;
 */
class ShopServicesController
{
    /**
     * @var ShopServiceRepository
     */
    protected $repository;

    /**
     * @var ShopServiceValidator
     */
    protected $validator;

    /**
     * ShopServicesController constructor.
     *
     * @param ShopServiceRepository $repository
     * @param ShopServiceValidator $validator
     */
    public function __construct(ShopServiceRepository $repository, ShopServiceValidator $validator)
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
        $shopServices = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shopServices,
            ]);
        }

        return view('shopServices.index', compact('shopServices'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ShopServiceCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ShopServiceCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $shopService = $this->repository->create($request->all());

            $response = [
                'message' => 'ShopService created.',
                'data'    => $shopService->toArray(),
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
        $shopService = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shopService,
            ]);
        }

        return view('shopServices.show', compact('shopService'));
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
        $shopService = $this->repository->find($id);

        return view('shopServices.edit', compact('shopService'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ShopServiceUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ShopServiceUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $shopService = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'ShopService updated.',
                'data'    => $shopService->toArray(),
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
                'message' => 'ShopService deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'ShopService deleted.');
    }

    public function getActiveService()
    {
        $user = Auth::user();
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));

        $shops = Shop::where('user_id', $user->id)->pluck('id')->toArray();
        $preventiveServices = $this->repository->findWhereIn('shop_id', $shops, ['meta'])->pluck('meta');
        if (request()->wantsJson()) {
            if(!is_null($preventiveServices)) {
                return response()->json([
                    'data' => $preventiveServices,
                ]);
            } else {
                return response()->json([
                    'error'   => true,
                    'message' => "Cannot retrieve all Customers."
                ]);
            }
        }
    }
}
