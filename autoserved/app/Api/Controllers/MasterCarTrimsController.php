<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterCarTrimCreateRequest;
use App\Http\Requests\MasterCarTrimUpdateRequest;
use App\Contracts\Repository\MasterCarTrimRepository;
use App\Validators\MasterCarTrimValidator;

/**
 * Class MasterCarTrimsController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterCarTrimsController
{
    /**
     * @var MasterCarTrimRepository
     */
    protected $repository;

    /**
     * @var MasterCarTrimValidator
     */
    protected $validator;

    /**
     * MasterCarTrimsController constructor.
     *
     * @param MasterCarTrimRepository $repository
     * @param MasterCarTrimValidator $validator
     */
    public function __construct(MasterCarTrimRepository $repository, MasterCarTrimValidator $validator)
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
        $masterCarTrims = $this->repository->paginate($limit = 8000, $columns = ['*']);

        if (request()->wantsJson()) {

            return response()->json($masterCarTrims);
        }

        return view('masterCarTrims.index', compact('masterCarTrims'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterCarTrimCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterCarTrimCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterCarTrim = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterCarTrim created.',
                'data'    => $masterCarTrim->toArray(),
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
        $masterCarTrim = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarTrim,
            ]);
        }

        return view('masterCarTrims.show', compact('masterCarTrim'));
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
        $masterCarTrim = $this->repository->find($id);

        return view('masterCarTrims.edit', compact('masterCarTrim'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterCarTrimUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterCarTrimUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterCarTrim = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterCarTrim updated.',
                'data'    => $masterCarTrim->toArray(),
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
                'message' => 'MasterCarTrim deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterCarTrim deleted.');
    }

    public function getCarTrims($id = null) {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        if(empty($id)) {
            $trims = $this->repository->paginate($limit = 8000, $columns = ['*']);
        } else {
            $trims = $this->repository->findWhereIn('model_id', [$id]);
        };
        $data = array();
        $i = 0;
        foreach($trims as $trim) {
            $data[$i] = array(
                'label' => $trim['name'],
                'value' => $trim['id']
            );
            $i++;
        }

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $data,
            ]);
        }  
    }
}
