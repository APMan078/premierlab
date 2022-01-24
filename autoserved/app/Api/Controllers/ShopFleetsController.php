<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ShopFleetCreateRequest;
use App\Http\Requests\ShopFleetUpdateRequest;
use App\Contracts\Repository\ShopFleetRepository;
use App\Validators\ShopFleetValidator;

/**
 * Class ShopFleetsController.
 *
 * @package namespace App\Api\Controllers;
 */
class ShopFleetsController extends Controller
{
    /**
     * @var ShopFleetRepository
     */
    protected $repository;

    /**
     * @var ShopFleetValidator
     */
    protected $validator;

    /**
     * ShopFleetsController constructor.
     *
     * @param ShopFleetRepository $repository
     * @param ShopFleetValidator $validator
     */
    public function __construct(ShopFleetRepository $repository, ShopFleetValidator $validator)
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
        $shopFleets = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shopFleets,
            ]);
        }

        return view('shopFleets.index', compact('shopFleets'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ShopFleetCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ShopFleetCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $shopFleet = $this->repository->create($request->all());

            $response = [
                'message' => 'ShopFleet created.',
                'data'    => $shopFleet->toArray(),
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
        $shopFleet = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shopFleet,
            ]);
        }

        return view('shopFleets.show', compact('shopFleet'));
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
        $shopFleet = $this->repository->find($id);

        return view('shopFleets.edit', compact('shopFleet'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ShopFleetUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ShopFleetUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $shopFleet = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'ShopFleet updated.',
                'data'    => $shopFleet->toArray(),
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
                'message' => 'ShopFleet deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'ShopFleet deleted.');
    }
}
