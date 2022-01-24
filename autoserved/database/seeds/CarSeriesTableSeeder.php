<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class CarSeriesTableSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'master_car_series';
        $this->csv_delimiter = ',';
        $this->filename = base_path().'/database/seeds/csv/car_serie.csv';
        $this->offset_rows = 1;
        $this->mapping = [
            0 => 'id',
            1 => 'model_id',
            2 => 'gen_id',
            3 => 'name',
            4 => 'type_id',
            5 => 'created_at',
            6 => 'updated_at'
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
