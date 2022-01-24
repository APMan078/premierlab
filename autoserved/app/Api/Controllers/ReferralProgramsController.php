<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ReferralProgramCreateRequest;
use App\Http\Requests\ReferralProgramUpdateRequest;
use App\Contracts\Repository\ReferralProgramRepository;
use App\Validators\ReferralProgramValidator;

/**
 * Class ReferralProgramsController.
 *
 * @package namespace App\Api\Controllers;
 */
class ReferralProgramsController extends Controller
{
    /**
     * @var ReferralProgramRepository
     */
    protected $repository;

    /**
     * @var ReferralProgramValidator
     */
    protected $validator;

    /**
     * ReferralProgramsController constructor.
     *
     * @param ReferralProgramRepository $repository
     * @param ReferralProgramValidator $validator
     */
    public function __construct(ReferralProgramRepository $repository, ReferralProgramValidator $validator)
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
        $referralPrograms = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $referralPrograms,
            ]);
        }

        return view('referralPrograms.index', compact('referralPrograms'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ReferralProgramCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ReferralProgramCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $referralProgram = $this->repository->create($request->all());

            $response = [
                'message' => 'ReferralProgram created.',
                'data'    => $referralProgram->toArray(),
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
        $referralProgram = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $referralProgram,
            ]);
        }

        return view('referralPrograms.show', compact('referralProgram'));
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
        $referralProgram = $this->repository->find($id);

        return view('referralPrograms.edit', compact('referralProgram'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ReferralProgramUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ReferralProgramUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $referralProgram = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'ReferralProgram updated.',
                'data'    => $referralProgram->toArray(),
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
                'message' => 'ReferralProgram deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'ReferralProgram deleted.');
    }
}
