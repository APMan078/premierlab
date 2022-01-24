<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\FleetCreateRequest;
use App\Http\Requests\FleetUpdateRequest;
use App\Contracts\Repository\FleetRepository;
use App\Validators\FleetValidator;

/**
 * Class FleetsController.
 *
 * @package namespace App\Api\Controllers;
 */
class FleetsController
{
    /**
     * @var FleetRepository
     */
    protected $repository;

    /**
     * @var FleetValidator
     */
    protected $validator;

    /**
     * FleetsController constructor.
     *
     * @param FleetRepository $repository
     * @param FleetValidator $validator
     */
    public function __construct(FleetRepository $repository, FleetValidator $validator)
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
        $fleets = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $fleets,
            ]);
        }

        return view('fleets.index', compact('fleets'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  FleetCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(FleetCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $fleet = $this->repository->create($request->all());

            $response = [
                'message' => 'Fleet created.',
                'data'    => $fleet->toArray(),
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
        $fleet = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $fleet,
            ]);
        }

        return view('fleets.show', compact('fleet'));
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
        $fleet = $this->repository->find($id);

        return view('fleets.edit', compact('fleet'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  FleetUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(FleetUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $fleet = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Fleet updated.',
                'data'    => $fleet->toArray(),
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
                'message' => 'Fleet deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Fleet deleted.');
    }
}
