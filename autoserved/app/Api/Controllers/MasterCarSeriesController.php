<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MasterCarSerieCreateRequest;
use App\Http\Requests\MasterCarSerieUpdateRequest;
use App\Contracts\Repository\MasterCarSerieRepository;
use App\Validators\MasterCarSerieValidator;

/**
 * Class MasterCarSeriesController.
 *
 * @package namespace App\Api\Controllers;
 */
class MasterCarSeriesController
{
    /**
     * @var MasterCarSerieRepository
     */
    protected $repository;

    /**
     * @var MasterCarSerieValidator
     */
    protected $validator;

    /**
     * MasterCarSeriesController constructor.
     *
     * @param MasterCarSerieRepository $repository
     * @param MasterCarSerieValidator $validator
     */
    public function __construct(MasterCarSerieRepository $repository, MasterCarSerieValidator $validator)
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
        $masterCarSeries = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarSeries,
            ]);
        }

        return view('masterCarSeries.index', compact('masterCarSeries'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MasterCarSerieCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MasterCarSerieCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $masterCarSerie = $this->repository->create($request->all());

            $response = [
                'message' => 'MasterCarSerie created.',
                'data'    => $masterCarSerie->toArray(),
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
        $masterCarSerie = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $masterCarSerie,
            ]);
        }

        return view('masterCarSeries.show', compact('masterCarSerie'));
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
        $masterCarSerie = $this->repository->find($id);

        return view('masterCarSeries.edit', compact('masterCarSerie'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MasterCarSerieUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MasterCarSerieUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $masterCarSerie = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'MasterCarSerie updated.',
                'data'    => $masterCarSerie->toArray(),
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
                'message' => 'MasterCarSerie deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'MasterCarSerie deleted.');
    }
}
