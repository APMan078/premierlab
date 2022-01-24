<?php

use Illuminate\Database\Seeder;
use App\Models\Attendance;
class AttendancesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $attendances = factory(Attendance::class, 25)->create();
        $this->command->info("Successfully added {$attendances->count()} attendances to personnel user");
    }
}
