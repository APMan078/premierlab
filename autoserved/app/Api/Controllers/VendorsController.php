<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\VendorCreateRequest;
use App\Http\Requests\VendorUpdateRequest;
use App\Contracts\Repository\VendorRepository;
use App\Validators\VendorValidator;

/**
 * Class VendorsController.
 *
 * @package namespace App\Api\Controllers;
 */
class VendorsController
{
    /**
     * @var VendorRepository
     */
    protected $repository;

    /**
     * @var VendorValidator
     */
    protected $validator;

    /**
     * VendorsController constructor.
     *
     * @param VendorRepository $repository
     * @param VendorValidator $validator
     */
    public function __construct(VendorRepository $repository, VendorValidator $validator)
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
        $vendors = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $vendors,
            ]);
        }

        return view('vendors.index', compact('vendors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  VendorCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(VendorCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $vendor = $this->repository->create($request->all());

            $response = [
                'message' => 'Vendor created.',
                'data'    => $vendor->toArray(),
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
        $vendor = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $vendor,
            ]);
        }

        return view('vendors.show', compact('vendor'));
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
        $vendor = $this->repository->find($id);

        return view('vendors.edit', compact('vendor'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  VendorUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(VendorUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $vendor = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Vendor updated.',
                'data'    => $vendor->toArray(),
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
                'message' => 'Vendor deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Vendor deleted.');
    }
}
