<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterServiceListCreateRequest;
use App\Http\Requests\MasterServiceListUpdateRequest;
use App\Contracts\Repository\MasterServiceListRepository;
use App\Validators\MasterServiceListValidator;

/**
 * Class MasterServiceListsController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterServiceListsController 
{
    /**
     * @var MasterServiceListRepository
     */
    protected $repository;

    /**
     * @var MasterServiceListValidator
     */
    protected $validator;

    /**
     * MasterServiceListsController constructor.
     *
     * @param MasterServiceListRepository $repository
     * @param MasterServiceListValidator $validator
     */
    public function __construct(MasterServiceListRepository $repository, MasterServiceListValidator $validator)
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
        $masterServiceLists = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterServiceLists,
            ]);
        }

        return view('masterServiceLists.index', compact('masterServiceLists'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterServiceListCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterServiceListCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterServiceList = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterServiceList created.',
                'data'    => $masterServiceList->toArray(),
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
        $masterServiceList = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterServiceList,
            ]);
        }

        return view('masterServiceLists.show', compact('masterServiceList'));
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
        $masterServiceList = $this->repository->find($id);

        return view('masterServiceLists.edit', compact('masterServiceList'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterServiceListUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterServiceListUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterServiceList = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterServiceList updated.',
                'data'    => $masterServiceList->toArray(),
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
                'message' => 'MasterServiceList deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterServiceList deleted.');
    }
}
