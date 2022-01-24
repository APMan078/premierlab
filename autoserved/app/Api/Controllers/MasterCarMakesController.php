<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterCarMakeCreateRequest;
use App\Http\Requests\MasterCarMakeUpdateRequest;
use App\Contracts\Repository\MasterCarMakeRepository;
use App\Validators\MasterCarMakeValidator;

/**
 * Class MasterCarMakesController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterCarMakesController
{
    /**
     * @var MasterCarMakeRepository
     */
    protected $repository;

    /**
     * @var MasterCarMakeValidator
     */
    protected $validator;

    /**
     * MasterCarMakesController constructor.
     *
     * @param MasterCarMakeRepository $repository
     * @param MasterCarMakeValidator $validator
     */
    public function __construct(MasterCarMakeRepository $repository, MasterCarMakeValidator $validator)
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
        $masterCarMakes = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarMakes,
            ]);
        }

        return view('masterCarMakes.index', compact('masterCarMakes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterCarMakeCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterCarMakeCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterCarMake = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterCarMake created.',
                'data'    => $masterCarMake->toArray(),
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
        $masterCarMake = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarMake,
            ]);
        }

        return view('masterCarMakes.show', compact('masterCarMake'));
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
        $masterCarMake = $this->repository->find($id);

        return view('masterCarMakes.edit', compact('masterCarMake'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterCarMakeUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterCarMakeUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterCarMake = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterCarMake updated.',
                'data'    => $masterCarMake->toArray(),
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
                'message' => 'MasterCarMake deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterCarMake deleted.');
    }

    public function getCarMakes() {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $makes = $this->repository->all();
        $data = array();
        $i = 0;
        foreach($makes as $make) {
            $data[$i] = array(
                'label' => $make['name'],
                'value' => $make['id']
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
