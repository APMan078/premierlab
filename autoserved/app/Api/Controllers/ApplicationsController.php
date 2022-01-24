<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ApplicationCreateRequest;
use App\Http\Requests\ApplicationUpdateRequest;
use App\Contracts\Repository\ApplicationRepository;
use App\Validators\ApplicationValidator;
use App\Models\Shop;
/**
 * Class ApplicationsController.
 *
 * @package namespace App\Api\Controllers;
 */
class ApplicationsController
{
    /**
     * @var ApplicationRepository
     */
    protected $repository;

    /**
     * @var ApplicationValidator
     */
    protected $validator;

    /**
     * ApplicationsController constructor.
     *
     * @param ApplicationRepository $repository
     * @param ApplicationValidator $validator
     */
    public function __construct(ApplicationRepository $repository, ApplicationValidator $validator)
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
        $applications = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $applications,
            ]);
        }

        return view('applications.index', compact('applications'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ApplicationCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ApplicationCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            // $user = Auth::user();
            // $shop_id = Shop::find($user->id)->pluck('id');
            // $request['shop_id'] = $shop_id;
            $application = $this->repository->create($request->all());

            $response = [
                'message' => 'Application created.',
                'data'    => $application->toArray(),
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
    public function show($slug)
    {
        $id = $this->repository->decodeSlug($slug);
        $application = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $application,
            ]);
        }

        return view('applications.show', compact('application'));
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
        $application = $this->repository->find($id);

        return view('applications.edit', compact('application'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ApplicationUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ApplicationUpdateRequest $request, $slug)
    {
        try {
            $id = $this->repository->decodeSlug($slug);
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $application = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Application updated.',
                'data'    => $application->toArray(),
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
                'message' => 'Application deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Application deleted.');
    }

    public function uploadRegistration(Request $request)
    {
        $slug = $request->slug;
        $file = $request->file('registration');
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        $fileValidator = $this->validator->make(['registration' => $file], [
            'registration' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);

        if ($fileValidator->fails()) {
            throw new ValidationException($fileValidator);
        }
        $user->clearMediaCollection('registration');
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $registration = $user->addMedia($file)->usingFileName($newFileName)->toMediaCollection('registration');

        return [
            'fileUrl' => $registration->getUrl(),
            'fileName' => $newFileName,
            'message' => 'Registration successfully saved'
        ];
    }

    public function uploadCertification(Request $request)
    {
        $slug = $request->slug;
        $file = $request->file('certification');
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        $fileValidator = $this->validator->make(['certification' => $file], [
            'certification' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);

        if ($fileValidator->fails()) {
            throw new ValidationException($fileValidator);
        }
        $user->clearMediaCollection('certification');
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $certification = $user->addMedia($file)->usingFileName($newFileName)->toMediaCollection('certification');

        return [
            'fileUrl' => $certification->getUrl(),
            'fileName' => $newFileName,
            'message' => 'Certification successfully saved'
        ];
    }

    public function uploadPermit(Request $request)
    {
        $slug = $request->slug;
        $file = $request->file('permit');
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        $fileValidator = $this->validator->make(['permit' => $file], [
            'permit' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);

        if ($fileValidator->fails()) {
            throw new ValidationException($fileValidator);
        }
        $user->clearMediaCollection('permit');
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $permit = $user->addMedia($file)->usingFileName($newFileName)->toMediaCollection('permit');

        return [
            'fileUrl' => $permit->getUrl(),
            'fileName' => $newFileName,
            'message' => 'Permit successfully saved'
        ];
    }
}
