<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ShopVendorCreateRequest;
use App\Http\Requests\ShopVendorUpdateRequest;
use App\Contracts\Repository\ShopVendorRepository;
use App\Validators\ShopVendorValidator;

/**
 * Class ShopVendorsController.
 *
 * @package namespace App\Api\Controllers;
 */
class ShopVendorsController extends Controller
{
    /**
     * @var ShopVendorRepository
     */
    protected $repository;

    /**
     * @var ShopVendorValidator
     */
    protected $validator;

    /**
     * ShopVendorsController constructor.
     *
     * @param ShopVendorRepository $repository
     * @param ShopVendorValidator $validator
     */
    public function __construct(ShopVendorRepository $repository, ShopVendorValidator $validator)
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
        $shopVendors = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shopVendors,
            ]);
        }

        return view('shopVendors.index', compact('shopVendors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ShopVendorCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ShopVendorCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $shopVendor = $this->repository->create($request->all());

            $response = [
                'message' => 'ShopVendor created.',
                'data'    => $shopVendor->toArray(),
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
        $shopVendor = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shopVendor,
            ]);
        }

        return view('shopVendors.show', compact('shopVendor'));
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
        $shopVendor = $this->repository->find($id);

        return view('shopVendors.edit', compact('shopVendor'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ShopVendorUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ShopVendorUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $shopVendor = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'ShopVendor updated.',
                'data'    => $shopVendor->toArray(),
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
                'message' => 'ShopVendor deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'ShopVendor deleted.');
    }
}
