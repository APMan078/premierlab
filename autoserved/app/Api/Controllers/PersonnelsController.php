<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Hash;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PersonnelCreateRequest;
use App\Http\Requests\PersonnelUpdateRequest;
use App\Contracts\Repository\PersonnelRepository;
use App\Validators\PersonnelValidator;
use App\Models\User;
/**
 * Class PersonnelsController.
 *
 * @package namespace App\Api\Controllers;
 */
class PersonnelsController
{
    /**
     * @var PersonnelRepository
     */
    protected $repository;

    /**
     * @var PersonnelValidator
     */
    protected $validator;

    /**
     * PersonnelsController constructor.
     *
     * @param PersonnelRepository $repository
     * @param PersonnelValidator $validator
     */
    public function __construct(PersonnelRepository $repository, PersonnelValidator $validator)
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
        $personnels = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $personnels,
            ]);
        }

        return view('personnels.index', compact('personnels'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PersonnelCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(PersonnelCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $pass = Hash::make(str_random(8));
            $user = User::where('email', '=', $request['email'])->first();
            if ($user === null) {
                $new_user = User::create([
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'password' => $pass,
                    'mobile' => $request['mobile'],
                    'country' => $request['country'] ? $request['country'] : 'Philippines',
                    'user_type' => 'customer',
                ]);
            } else {
                $user->first_name = $request['first_name'];
                $user->last_name = $request['last_name'];
                $user->email = $request['email'];
                $user->mobile = $request['mobile'];
            }
            $final_user = $new_user ? $new_user : $user;
            $request['user_id'] = $final_user->id;
            $personnel = $this->repository->create($request->only('sss', 'tin', 'philhealth', 'rate', 'role', 'shop_id', 'user_id'));

            $response = [
                'message' => 'Personnel created.',
                'data'    => $personnel->toArray(),
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
        $personnel = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $personnel,
            ]);
        }

        return view('personnels.show', compact('personnel'));
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
        $personnel = $this->repository->find($id);

        return view('personnels.edit', compact('personnel'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PersonnelUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(PersonnelUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $personnel = $this->repository->find($id)->first();
            $personnel->sss = $request['sss'];
            $personnel->tin = $request['tin'];
            $personnel->philhealth = $request['philhealth'];
            $personnel->rate = $request['rate'];
            $personnel->role = $request['role'];
            $personnel->save();
            $user_id = $request['user_id'];
            $user = User::where('id', $user_id)->first();

            $user->first_name = $request['first_name'];
            $user->last_name = $request['last_name'];
            $user->email = $request['email'];
            $user->mobile = $request['mobile'];
            $user->save();

            $response = [
                'message' => 'Personnel updated.',
                'data'    => $personnel->toArray(),
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
                'message' => 'Personnel deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Personnel deleted.');
    }
}
