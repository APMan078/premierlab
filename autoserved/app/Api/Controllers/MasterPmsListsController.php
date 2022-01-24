<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterPmsListCreateRequest;
use App\Http\Requests\MasterPmsListUpdateRequest;
use App\Contracts\Repository\MasterPmsListRepository;
use App\Validators\MasterPmsListValidator;

/**
 * Class MasterPmsListsController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterPmsListsController
{
    /**
     * @var MasterPmsListRepository
     */
    protected $repository;

    /**
     * @var MasterPmsListValidator
     */
    protected $validator;

    /**
     * MasterPmsListsController constructor.
     *
     * @param MasterPmsListRepository $repository
     * @param MasterPmsListValidator $validator
     */
    public function __construct(MasterPmsListRepository $repository, MasterPmsListValidator $validator)
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
        $masterPmsLists = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterPmsLists,
            ]);
        }

        return view('masterPmsLists.index', compact('masterPmsLists'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterPmsListCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterPmsListCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterPmsList = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterPmsList created.',
                'data'    => $masterPmsList->toArray(),
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
        $masterPmsList = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterPmsList,
            ]);
        }

        return view('masterPmsLists.show', compact('masterPmsList'));
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
        $masterPmsList = $this->repository->find($id);

        return view('masterPmsLists.edit', compact('masterPmsList'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterPmsListUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterPmsListUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterPmsList = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterPmsList updated.',
                'data'    => $masterPmsList->toArray(),
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
                'message' => 'MasterPmsList deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterPmsList deleted.');
    }
}
