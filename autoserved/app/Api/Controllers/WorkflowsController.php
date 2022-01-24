<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\WorkflowCreateRequest;
use App\Http\Requests\WorkflowUpdateRequest;
use App\Contracts\Repository\WorkflowRepository;
use App\Validators\WorkflowValidator;
use App\Http\Controllers\Controller;
/**
 * Class WorkflowsController.
 *
 * @package namespace App\Api\Controllers;
 */
class WorkflowsController extends Controller
{
    /**
     * @var WorkflowRepository
     */
    protected $repository;

    /**
     * @var WorkflowValidator
     */
    protected $validator;

    /**
     * WorkflowsController constructor.
     *
     * @param WorkflowRepository $repository
     * @param WorkflowValidator $validator
     */
    public function __construct(WorkflowRepository $repository, WorkflowValidator $validator)
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
        $workflows = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $workflows,
            ]);
        }

        return view('workflows.index', compact('workflows'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  WorkflowCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(WorkflowCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $workflow = $this->repository->create($request->all());

            $response = [
                'message' => 'Workflow created.',
                'data'    => $workflow->toArray(),
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
        $workflow = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $workflow,
            ]);
        }

        return view('workflows.show', compact('workflow'));
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
        $workflow = $this->repository->find($id);

        return view('workflows.edit', compact('workflow'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  WorkflowUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(WorkflowUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $workflow = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Workflow updated.',
                'data'    => $workflow->toArray(),
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
                'message' => 'Workflow deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Workflow deleted.');
    }
}
