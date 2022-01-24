<?php

namespace App\Services;

use App\Models\Vehicle;
use App\Models\Schedule;
use App\Models\MasterPmsList;
use App\Models\User;

class ScheduleService
{
    /**
     * =========================
     * |      CRUD METHODS     |
     * =========================
     */
    public function get_car_schedules($user, $car_id)
    {
        $result = null;

        if ($user->user_type === config('user.type.customer')) {
            $result = Schedule::all();
            // $result = CarSchedule::withTrashed()->get(); // includes soft deleted records
        } else if ($user->user_type === config('user.type.customer')) {
            $result = Schedule::where('car_id', $car_id)->orderBy('schedule', 'asc')->get();
        }

        return $result;
    }

    public function get_car_schedule($car_id, $pms_id)
    {
        return Schedule::where(['masterlist_pms_id' => $pms_id, 'car_id' => $car_id])->first();
    }

    public function get($id)
    {
        $car_sched = Schedule::find($id);

        return $car_sched;
    }

    /**
     * =============================
     * |  Car Schedule Generation  |
     * ============================
     */
    // returns the car schedules created
    public function generate_schedule($car_id, $type)
    {

        $car = Vehicle::find($car_id);

        if (is_null($car)) {
            return response()->json([
                "success" => false,
                "message" => "Car profile cannot be found with car id=" . $car_id
            ]);
        }

        $schedules = array();
        $sched_count = 0;

        $masterlist_pms = MasterPmsList::orderBy('mileage', 'asc')->get();

        // delete existing FUTURE car schedules
        $schedule = Schedule::where([
            ['car_id', $car->id],
            ['schedule', '>', new \DateTime(now())],
        ])->delete();

        $current_mileage = $car->current_mileage;
        // echo "current mileage = " . $current_mileage;

        $daily_mileage = $this->get_daily_mileage($current_mileage, $car->date_purchased);
        // echo "\ndaily mileage = " . $daily_mileage;

        // get ideal interval so that the next PMS schedule will not exceed maximum ideal interval
        $interval = !is_null($car->user->fleet_id) ? config('vehicle.pms.max_months_interval_fleet') : config('vehicle.pms.max_months_interval_customer');
        $prev_sched = !is_null($car->last_serviced) ? $car->last_serviced : $car->date_purchased;
        $max_mileage = config('vehicle.pms.max_mileage');
        $interval_mileage = config('vehicle.pms.interval_mileage');
        foreach ($masterlist_pms as $pms) {
            if (($current_mileage % $max_mileage ) < $pms->mileage) {
                $ndays = ceil( $interval_mileage / $daily_mileage);
                $next_sched = $this->get_next_schedule($ndays, $prev_sched, $interval);

                $schedule = Schedule::create([
                    'schedule' => $next_sched,
                    'type' => $type,
                    'service_id' => $pms->id,
                    'car_id' => $car->id,
                ]);

                array_push($schedules, $schedule);

                $prev_sched = $next_sched;
                $sched_count++;
            }
        }

        if (count($schedules) <= 0) {
            return response()->json([
                "success" => false,
                "message" => "Car schedules were unsuccessfully generated. Count of car schedules is 0."
            ]);
        }

        return response()->json([
            "success" => true,
            'message' => "Request success!",
        ]);
    }

    /**
     * =========================
     * |    Helper METHODS     |
     * =========================
     */
    // Returns daily mileage based on current mileage
    private function get_daily_mileage($current_mileage, $prev_sched)
    {
        $daily_mileage = 0;

        if (!is_null($current_mileage) && !is_null($prev_sched)) {
            $dateNow = new \DateTime(now());
            $dateBefore = new \DateTime($prev_sched);

            // compute difference in days
            $difference = date_diff($dateNow, $dateBefore, true);
            $days = $difference->days;

            $daily_mileage = $current_mileage / $days;
        }

        return $daily_mileage;
    }

    // returns date of the next PMS
    private function get_next_schedule($ndays, $prev_sched, $interval)
    {
        // echo "\n\nmileage = " . $mileage;
        // echo "\nprev_sched = " . $prev_sched;
        // echo "\ndaily_mileage = " . $daily_mileage . "\n";

        // compute schedule
        $dp = new \DateTime($prev_sched);

        $next_schedule = $dp->add(new \DateInterval('P' . $ndays . 'D'))->format('Y-m-d');
        // Uncomment to check computation
        // echo "days = " . $ndays;
        // echo "\nnext sched = " . $next_schedule . "\n";

        // Ensure that the next car schedule doesn't exceed the specified number of months
        $ideal_duration = date('Y-m-d', strtotime("+" . $interval . " months", strtotime($prev_sched)));
        // echo $next_schedule . "     -     " . $ideal_duration . "\n";

        if ($next_schedule > $ideal_duration && $ideal_duration > date('Y-m-d')) {
            $next_schedule = $ideal_duration;
        }

        return $next_schedule;
    }
}
