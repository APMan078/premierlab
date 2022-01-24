<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ShopCreateRequest;
use App\Http\Requests\ShopUpdateRequest;
use App\Contracts\Repository\ShopRepository;
use App\Validators\ShopValidator;
use Illuminate\Support\Facades\Auth;
use App\Criterias\OnlyOwnUserCriteria;
use App\Models\Constants;
use App\Models\Application;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Support\Str;
/**
 * Class ShopsController.
 *
 * @package namespace App\Api\Controllers;
 */
class ShopsController 
{
    /**
     * @var ShopRepository
     */
    protected $repository;

    /**
     * @var ShopValidator
     */
    protected $validator;

    /**
     * ShopsController constructor.
     *
     * @param ShopRepository $repository
     * @param ShopValidator $validator
     */
    public function __construct(ShopRepository $repository, ShopValidator $validator)
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
        if ( Auth::user()->user_type != 'admin') {
            // $this->repository->pushCriteria(OnlyOwnUserCriteria::class);
        } 
        $shops = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shops,
            ]);
        }

        return view('shops.index', compact('shops'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ShopCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ShopCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $shop = $this->repository->create($request->all());
            if($shop['operations'] === null || $shop['operations'] === '') {
                $shop['operations'] = array(
                    ["name" => "Sunday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => true, "step" => 1],
                    ["name" => "Monday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                    ["name" => "Tuesday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                    ["name" => "Wednesday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                    ["name" => "Thursday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                    ["name" => "Friday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1],
                    ["name" => "Saturday", "start" => "8:00 AM", "end" => "5:00 PM", "closed" => false, "step" => 1]	
                );
                return $shop;
            }
            $application = Application::create([
                'lifters' => 1,
                'merch_cert' => [[]],
                'special_tools' => [[]],
                'shop_id' => $shop->id
            ]);
            $response = [
                'message' => 'Shop created.',
                'data'    => $shop->toArray(),
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
        $shop = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $shop,
            ]);
        }

        return view('shops.show', compact('shop'));
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
        $shop = $this->repository->find($id);

        return view('shops.edit', compact('shop'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ShopUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ShopUpdateRequest $request, $slug)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);
            $id = $this->repository->decodeSlug($slug);
            $shop = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Shop updated.',
                'data'    => $shop->toArray(),
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
                'message' => 'Shop deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Shop deleted.');
    }

    public function update_points($shop_id, $activation_req)
    {
        $result = false;
        $shop = $this->get($shop_id);

        if (!is_null($shop)) {
            $points = 0;
            $completion = $shop->completion;
            $result = true;
            $status = null;

            switch ($activation_req) {
                case Application::APPLICATION_TYPE_BIZ_REG:
                    $points = Constants::SHOP_POINTS_BUSINESS_REGISTRATION;
                    break;
                case Application::APPLICATION_TYPE_PERMIT:
                    $points = Constants::SHOP_POINTS_BUSINESS_PERMIT;
                    break;
                case Application::APPLICATION_TYPE_BIR_CERT:
                    $points = Constants::SHOP_POINTS_BIR_CERTIFICATE;
                    break;
                case Application::APPLICATION_TYPE_MERCH_CERT:
                    $points = Constants::SHOP_POINTS_MERCHANT_CERTIFICATE;
                    break;
                case Application::APPLICATION_TYPE_LIFTERS:
                    $points = Constants::SHOP_POINTS_LIFTERS;
                    break;
                case Application::APPLICATION_TYPE_SPECIAL_TOOLS:
                    $points = Constants::SHOP_POINTS_SPECIAL_TOOLS;
                    break;
            }

            $completion += $points / 100;
            $totalPoints = $completion * 100;

            if ($totalPoints < 30) {
                $status = $shop->status;
            } else if ($totalPoints < 60) {
                $status = Constants::SHOP_STATUS_VERIFIED3;
            } else if ($totalPoints < 100) {
                $status = Constants::SHOP_STATUS_VERIFIED2;
            } else {
                $status = Constants::SHOP_STATUS_VERIFIED1;
            }

            $data = $this->repository->where(['id' => $shop_id])->first();
            $data->completion = number_format($completion, 2);
            $data->status = $status;
            $data->save();
        }

        return $result;
    }

    public function getShopTypes() {
        $types = config('shop.type');
        $data = array();
        foreach($types as $type) {
            $label = ucwords(str_replace('_', ' ', $type));
            $data[] = [
                'label' => $label,
                'value' => $type
            ]; 
        }
        return response()->json([
            'data' => $data,
        ]);
    }

    public function uploadAvatar(Request $request)
    {
        $slug = $request->slug;
        $file = $request->file('avatar');
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        $fileValidator = $this->validator->make(['avatar' => $file], [
            'avatar' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);

        if ($fileValidator->fails()) {
            throw new ValidationException($fileValidator);
        }
        $user->clearMediaCollection('avatar');
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $avatar = $user->addMedia($file)->usingFileName($newFileName)->toMediaCollection('avatar');

        return [
            'fileUrl' => $avatar->getUrl(),
            'fileName' => $newFileName,
            'message' => 'Avatar successfully saved'
        ];
    }

    public function uploadBanner(Request $request)
    {
        $slug = $request->slug;
        $file = $request->file('banner');
        $id = $this->repository->decodeSlug($slug);
        $user = $this->repository->find($id);
        $fileValidator = $this->validator->make(['banner' => $file], [
            'banner' => 'mimetypes:image/jpeg,image/png,image/jpg,image/gif'
        ]);

        if ($fileValidator->fails()) {
            throw new ValidationException($fileValidator);
        }
        $user->clearMediaCollection('banner');
        $newFileName = (string) Str::uuid('img_') . '.' . $file->extension();

        $banner = $user->addMedia($file)->usingFileName($newFileName)->toMediaCollection('banner');

        return [
            'fileUrl' => $banner->getUrl(),
            'fileName' => $newFileName,
            'message' => 'Banner successfully saved'
        ];
    }

    public function testCreate($id) {
        // $slug = $request->slug();
        // $shop_id = $id;
        $application = Application::create(['shop_id' => $id]);
        return $application;
    }
}
