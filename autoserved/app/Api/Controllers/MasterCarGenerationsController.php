<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterCarGenerationCreateRequest;
use App\Http\Requests\MasterCarGenerationUpdateRequest;
use App\Contracts\Repository\MasterCarGenerationRepository;
use App\Validators\MasterCarGenerationValidator;

/**
 * Class MasterCarGenerationsController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterCarGenerationsController extends Controller
{
    /**
     * @var MasterCarGenerationRepository
     */
    protected $repository;

    /**
     * @var MasterCarGenerationValidator
     */
    protected $validator;

    /**
     * MasterCarGenerationsController constructor.
     *
     * @param MasterCarGenerationRepository $repository
     * @param MasterCarGenerationValidator $validator
     */
    public function __construct(MasterCarGenerationRepository $repository, MasterCarGenerationValidator $validator)
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
        $masterCarGenerations = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarGenerations,
            ]);
        }

        return view('masterCarGenerations.index', compact('masterCarGenerations'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterCarGenerationCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterCarGenerationCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterCarGeneration = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterCarGeneration created.',
                'data'    => $masterCarGeneration->toArray(),
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
        $masterCarGeneration = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarGeneration,
            ]);
        }

        return view('masterCarGenerations.show', compact('masterCarGeneration'));
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
        $masterCarGeneration = $this->repository->find($id);

        return view('masterCarGenerations.edit', compact('masterCarGeneration'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterCarGenerationUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterCarGenerationUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterCarGeneration = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterCarGeneration updated.',
                'data'    => $masterCarGeneration->toArray(),
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
                'message' => 'MasterCarGeneration deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterCarGeneration deleted.');
    }
}
