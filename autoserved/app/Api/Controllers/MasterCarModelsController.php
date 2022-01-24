<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterCarModelCreateRequest;
use App\Http\Requests\MasterCarModelUpdateRequest;
use App\Contracts\Repository\MasterCarModelRepository;
use App\Validators\MasterCarModelValidator;

/**
 * Class MasterCarModelsController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterCarModelsController
{
    /**
     * @var MasterCarModelRepository
     */
    protected $repository;

    /**
     * @var MasterCarModelValidator
     */
    protected $validator;

    /**
     * MasterCarModelsController constructor.
     *
     * @param MasterCarModelRepository $repository
     * @param MasterCarModelValidator $validator
     */
    public function __construct(MasterCarModelRepository $repository, MasterCarModelValidator $validator)
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
        $masterCarModels = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarModels,
            ]);
        }

        return view('masterCarModels.index', compact('masterCarModels'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterCarModelCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterCarModelCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterCarModel = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterCarModel created.',
                'data'    => $masterCarModel->toArray(),
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
        $masterCarModel = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarModel,
            ]);
        }

        return view('masterCarModels.show', compact('masterCarModel'));
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
        $masterCarModel = $this->repository->find($id);

        return view('masterCarModels.edit', compact('masterCarModel'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterCarModelUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterCarModelUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterCarModel = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterCarModel updated.',
                'data'    => $masterCarModel->toArray(),
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
                'message' => 'MasterCarModel deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterCarModel deleted.');
    }

    public function getCarModels($id = null) {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        if(empty($id)) {
            $models = $this->repository->all();
        } else {
            $models = $this->repository->findWhereIn('make_id', [$id]);
        };
        $data = array();
        $i = 0;
        foreach($models as $model) {
            $data[$i] = array(
                'label' => $model['name'],
                'value' => $model['id']
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
