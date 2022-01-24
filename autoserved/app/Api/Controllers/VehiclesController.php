<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\VehicleCreateRequest;
use App\Http\Requests\VehicleUpdateRequest;
use App\Contracts\Repository\VehicleRepository;
use App\Validators\VehicleValidator;
use App\Services\ScheduleService;

/**
 * Class VehiclesController.
 *
 * @package namespace App\Api\Controllers;
 */
class VehiclesController
{
    /**
     * @var VehicleRepository
     */
    protected $repository;
    protected $car_schedule_service;
    /**
     * @var VehicleValidator
     */
    protected $validator;

    /**
     * VehiclesController constructor.
     *
     * @param VehicleRepository $repository
     * @param VehicleValidator $validator
     */
    public function __construct(VehicleRepository $repository, VehicleValidator $validator, ScheduleService $car_schedule_service)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
        $this->car_schedule_service = $car_schedule_service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $vehicles = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $vehicles,
            ]);
        }

        return view('vehicles.index', compact('vehicles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  VehicleCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(VehicleCreateRequest $request)
    {
        try {
            $user = Auth::user()->id;
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $request['user_id'] = $user;
            $vehicle = $this->repository->create($request->all());

            if($vehicle) {
                $schedule = $this->car_schedule_service->generate_schedule($vehicle->id, 'pms');
            }
            $response = [
                'message' => 'Vehicle created.',
                'data'    => $vehicle->toArray(),
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
        $vehicle = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $vehicle,
            ]);
        }

        return view('vehicles.show', compact('vehicle'));
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
        $vehicle = $this->repository->find($id);

        return view('vehicles.edit', compact('vehicle'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  VehicleUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(VehicleUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $vehicle = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Vehicle updated.',
                'data'    => $vehicle->toArray(),
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
                'message' => 'Vehicle deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Vehicle deleted.');
    }

    public function getVehicleTypes() {
        $data = array(
            ['label' => 'Compact/Small Sedan', 'value' => 'compact/small sedan'],
            ['label' => 'Medium Sedan', 'value' => 'medium sedan'],
            ['label' => 'Large Sedan/Wagon', 'value' => 'large sedan/wagon'],
            ['label' => 'Small SUV/AUV', 'value' => 'small SUV/AUV'],
            ['label' => 'Large SUV/Pick-up/Van', 'value' => 'large SUV/pick-up/van'],
            ['label' => 'Commercial', 'value' => 'commercial']
        );

        return $data;
    }

    public function getEngineTypes() {
        $data = array(
            ['label' => 'Gasoline', 'value' => 'gasoline'],
            ['label' => 'Diesel', 'value' => 'diesel']
        );

        return $data;
    }

    public function getTransmissionTypes() {
        $data = array(
            ['label' => 'Automatic', 'value' => 'automatic'],
            ['label' => 'Manual', 'value' => 'manual']
        );

        return $data;
    }

    public function getVehicleColors() {
        $data = array(
            ['label' => 'Alice Blue', 'value' => 'aliceblue'],
            ['label' => 'Antique White', 'value' => 'antiquewhite'],
            ['label' => 'Aqua', 'value' => 'aqua'],
            ['label' => 'Aquamarine', 'value' => 'aquamarine'],
            ['label' => 'Azure',  'value' => 'azure'],
            ['label' => 'Beige',  'value' => 'beige'],
            ['label' => 'Bisque', 'value' => 'bisque'],
            ['label' => 'Black',  'value' => 'black'],
            ['label' => 'Blanched Almond', 'value' => 'blanchedalmond'],
            ['label' => 'Blue', 'value' => 'blue'],
            ['label' => 'Blue Violet',  'value' => 'blueviolet'],
            ['label' => 'Brown',  'value' => 'brown'],
            ['label' => 'Burly Wood', 'value' => 'burlywood'],
            ['label' => 'Cadet Blue', 'value' => 'cadetblue'],
            ['label' => 'Chartreuse', 'value' => 'chartreuse'],
            ['label' => 'Chocolate', 'value' => 'chocolate'],
            ['label' => 'Coral',  'value' => 'coral'],
            ['label' => 'Cornflower Blue', 'value' => 'cornflowerblue'],
            ['label' => 'Cornsilk',  'value' => 'cornsilk'],
            ['label' => 'Crimson', 'value' => 'crimson'],
            ['label' => 'Cyan', 'value' => 'cyan'],
            ['label' => 'Dark Blue', 'value' => 'darkblue'],
            ['label' => 'Dark Cyan', 'value' => 'darkcyan'],
            ['label' => 'Dark GoldenRod',  'value' => 'darkgoldenrod'],
            ['label' => 'Dark Gray', 'value' => 'darkgray'],
            ['label' => 'Dark Grey', 'value' => 'darkgrey'],
            ['label' => 'Dark Green', 'value' => 'darkgreen'],
            ['label' => 'Dark Khaki', 'value' => 'darkkhaki'],
            ['label' => 'Dark Magenta', 'value' => 'darkmagenta'],
            ['label' => 'Dark OliveGreen', 'value' => 'darkolivegreen'],
            ['label' => 'Dark Orange',  'value' => 'darkorange'],
            ['label' => 'Dark Orchid',  'value' => 'darkorchid'],
            ['label' => 'Dark Red',  'value' => 'darkred'],
            ['label' => 'Dark Salmon',  'value' => 'darksalmon'],
            ['label' => 'Dark Sea Green',  'value' => 'darkseagreen'],
            ['label' => 'Dark Slate Blue', 'value' => 'darkslateblue'],
            ['label' => 'Dark Slate Gray', 'value' => 'darkslategray'],
            ['label' => 'Dark Slate Grey', 'value' => 'darkslategrey'],
            ['label' => 'Dark Turquoise',  'value' => 'darkturquoise'],
            ['label' => 'Dark Violet',  'value' => 'darkviolet'],
            ['label' => 'Deep Pink', 'value' => 'deeppink'],
            ['label' => 'Deep Sky Blue', 'value' => 'deepskyblue'],
            ['label' => 'Dim Gray',  'value' => 'dimgray'],
            ['label' => 'Dim Grey',  'value' => 'dimgrey'],
            ['label' => 'Dodger Blue',  'value' => 'dodgerblue'],
            ['label' => 'Fire Brick', 'value' => 'firebrick'],
            ['label' => 'Floral White', 'value' => 'floralwhite'],
            ['label' => 'Forest Green', 'value' => 'forestgreen'],
            ['label' => 'Fuchsia', 'value' => 'fuchsia'],
            ['label' => 'Gainsboro', 'value' => 'gainsboro'],
            ['label' => 'Ghost White',  'value' => 'ghostwhite'],
            ['label' => 'Gold', 'value' => 'gold'],
            ['label' => 'Golden Rod', 'value' => 'goldenrod'],
            ['label' => 'Gray', 'value' => 'gray'],
            ['label' => 'Grey', 'value' => 'grey'],
            ['label' => 'Green',  'value' => 'green'],
            ['label' => 'Green Yellow', 'value' => 'greenyellow'],
            ['label' => 'Honey Dew', 'value' => 'honeydew'],
            ['label' => 'Hot Pink',  'value' => 'hotpink'],
            ['label' => 'Indian Red', 'value' => 'indianred'],
            ['label' => 'Indigo', 'value' => 'indigo'],
            ['label' => 'Ivory',  'value' => 'ivory'],
            ['label' => 'Khaki',  'value' => 'khaki'],
            ['label' => 'Lavender',  'value' => 'lavender'],
            ['label' => 'Lavender Blush',  'value' => 'lavenderblush'],
            ['label' => 'Lawn Green', 'value' => 'lawngreen'],
            ['label' => 'Lemon Chiffon', 'value' => 'lemonchiffon'],
            ['label' => 'Light Blue', 'value' => 'lightblue'],
            ['label' => 'Light Coral',  'value' => 'lightcoral'],
            ['label' => 'Light Cyan', 'value' => 'lightcyan'],
            ['label' => 'Light Golden Rod Yellow', 'value' => 'lightgoldenrodyellow'],
            ['label' => 'Light Gray', 'value' => 'lightgray'],
            ['label' => 'Light Grey', 'value' => 'lightgrey'],
            ['label' => 'Light Green',  'value' => 'lightgreen'],
            ['label' => 'Light Pink', 'value' => 'lightpink'],
            ['label' => 'Light Salmon', 'value' => 'lightsalmon'],
            ['label' => 'Light Sea Green', 'value' => 'lightseagreen'],
            ['label' => 'Light Sky Blue',  'value' => 'lightskyblue'],
            ['label' => 'Light Slat Gray', 'value' => 'lightslatgray'],
            ['label' => 'Light Slate Grey', 'value' => 'lightslategrey'],
            ['label' => 'Light Steel Blue', 'value' => 'lightsteelblue'],
            ['label' => 'Light Yellow', 'value' => 'lightyellow'],
            ['label' => 'Lime', 'value' => 'lime'],
            ['label' => 'Lime Green', 'value' => 'limegreen'],
            ['label' => 'Linen',  'value' => 'linen'],
            ['label' => 'Magenta', 'value' => 'magenta'],
            ['label' => 'Maroon', 'value' => 'maroon'],
            ['label' => 'Medium Aqua Marine',  'value' => 'mediumaquamarine'],
            ['label' => 'Medium Blue',  'value' => 'mediumblue'],
            ['label' => 'Medium Orchid', 'value' => 'mediumorchid'],
            ['label' => 'Medium Purple', 'value' => 'mediumpurple'],
            ['label' => 'Medium Sea Green', 'value' => 'mediumseagreen'],
            ['label' => 'Medium Slate Blue', 'value' => 'mediumslateblue'],
            ['label' => 'Medium Spring Green', 'value' => 'mediumspringgreen'],
            ['label' => 'Medium Turquoise', 'value' => 'mediumturquoise'],
            ['label' => 'Medium VioletRed', 'value' => 'mediumvioletred'],
            ['label' => 'Midnight Blue', 'value' => 'midnightblue'],
            ['label' => 'Mint Cream', 'value' => 'mintcream'],
            ['label' => 'Misty Rose', 'value' => 'mistyrose'],
            ['label' => 'Moccasin',  'value' => 'moccasin'],
            ['label' => 'Navajo White', 'value' => 'navajowhite'],
            ['label' => 'Navy', 'value' => 'navy'],
            ['label' => 'Old Lace',  'value' => 'oldlace'],
            ['label' => 'Olive',  'value' => 'olive'],
            ['label' => 'Olive Drab', 'value' => 'olivedrab'],
            ['label' => 'Orange', 'value' => 'orange'],
            ['label' => 'Orange Red', 'value' => 'orangered'],
            ['label' => 'Orchid', 'value' => 'orchid'],
            ['label' => 'Pale Golden Rod', 'value' => 'palegoldenrod'],
            ['label' => 'Pale Green', 'value' => 'palegreen'],
            ['label' => 'Pale Turquoise',  'value' => 'paleturquoise'],
            ['label' => 'Pale Violet Red', 'value' => 'palevioletred'],
            ['label' => 'Papaya Whip',  'value' => 'papayawhip'],
            ['label' => 'Peach Puff', 'value' => 'peachpuff'],
            ['label' => 'Peru', 'value' => 'peru'],
            ['label' => 'Pink', 'value' => 'pink'],
            ['label' => 'Plum', 'value' => 'plum'],
            ['label' => 'Powder Blue',  'value' => 'powderblue'],
            ['label' => 'Purple', 'value' => 'purple'],
            ['label' => 'Rebecca Purple',  'value' => 'rebeccapurple'],
            ['label' => 'Red', 'value' => 'red'],
            ['label' => 'Rosy Brown', 'value' => 'rosybrown'],
            ['label' => 'Royal Blue', 'value' => 'royalblue'],
            ['label' => 'Saddle Brown', 'value' => 'saddlebrown'],
            ['label' => 'Salmon', 'value' => 'salmon'],
            ['label' => 'Sandy Brown',  'value' => 'sandybrown'],
            ['label' => 'Sea Green', 'value' => 'seagreen'],
            ['label' => 'Sea Shell', 'value' => 'seashell'],
            ['label' => 'Sienna', 'value' => 'sienna'],
            ['label' => 'Silver', 'value' => 'silver'],
            ['label' => 'Sky Blue',  'value' => 'skyblue'],
            ['label' => 'Slate Blue', 'value' => 'slateblue'],
            ['label' => 'Slate Gray', 'value' => 'slategray'],
            ['label' => 'Slate Grey', 'value' => 'slategrey'],
            ['label' => 'Snow', 'value' => 'snow'],
            ['label' => 'Spring Green', 'value' => 'springgreen'],
            ['label' => 'Steel Blue', 'value' => 'steelblue'],
            ['label' => 'Tan', 'value' => 'tan'],
            ['label' => 'Teal', 'value' => 'teal'],
            ['label' => 'Thistle', 'value' => 'thistle'],
            ['label' => 'Tomato', 'value' => 'tomato'],
            ['label' => 'Turquoise', 'value' => 'turquoise'],
            ['label' => 'Violet', 'value' => 'violet'],
            ['label' => 'Wheat',  'value' => 'wheat'],
            ['label' => 'White',  'value' => 'white'],
            ['label' => 'WhiteSmoke', 'value' => 'whitesmoke'],
            ['label' => 'Yellow', 'value' => 'yellow'],
            ['label' => 'YellowGreen', 'value' => 'yellowgreen']                 
        );

        return $data;
    }
}
