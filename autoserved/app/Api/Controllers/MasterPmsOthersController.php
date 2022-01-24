<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterPmsOtherCreateRequest;
use App\Http\Requests\MasterPmsOtherUpdateRequest;
use App\Contracts\Repository\MasterPmsOtherRepository;
use App\Validators\MasterPmsOtherValidator;

/**
 * Class MasterPmsOthersController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterPmsOthersController extends Controller
{
    /**
     * @var MasterPmsOtherRepository
     */
    protected $repository;

    /**
     * @var MasterPmsOtherValidator
     */
    protected $validator;

    /**
     * MasterPmsOthersController constructor.
     *
     * @param MasterPmsOtherRepository $repository
     * @param MasterPmsOtherValidator $validator
     */
    public function __construct(MasterPmsOtherRepository $repository, MasterPmsOtherValidator $validator)
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
        $masterPmsOthers = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterPmsOthers,
            ]);
        }

        return view('masterPmsOthers.index', compact('masterPmsOthers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterPmsOtherCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterPmsOtherCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterPmsOther = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterPmsOther created.',
                'data'    => $masterPmsOther->toArray(),
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
        $masterPmsOther = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterPmsOther,
            ]);
        }

        return view('masterPmsOthers.show', compact('masterPmsOther'));
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
        $masterPmsOther = $this->repository->find($id);

        return view('masterPmsOthers.edit', compact('masterPmsOther'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterPmsOtherUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterPmsOtherUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterPmsOther = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterPmsOther updated.',
                'data'    => $masterPmsOther->toArray(),
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
                'message' => 'MasterPmsOther deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterPmsOther deleted.');
    }
}
