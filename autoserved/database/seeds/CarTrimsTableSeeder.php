<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class CarTrimsTableSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'master_car_trims';
        $this->csv_delimiter = ',';
        $this->filename = base_path().'/database/seeds/csv/car_trim.csv';
        $this->offset_rows = 1;
        $this->mapping = [
            0 => 'id',
            1 => 'series_id',
            2 => 'model_id',
            3 => 'name',
            4 => 'year_start',
            5 => 'year_end',
            6 => 'type_id',
            7 => 'created_at',
            8 => 'updated_at'
        ];
        // $this->should_trim = true;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		// Recommended when importing larger CSVs
		DB::disableQueryLog();

		// Uncomment the below to wipe the table clean before populating
		// DB::table($this->table)->truncate();

		parent::run();
    }
}
