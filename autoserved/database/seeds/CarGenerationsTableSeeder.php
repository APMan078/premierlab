<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class CarGenerationsTableSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'master_car_generations';
        $this->csv_delimiter = ',';
        $this->filename = base_path().'/database/seeds/csv/car_generation.csv';
        $this->offset_rows = 1;
        $this->mapping = [
            0 => 'id',
            1 => 'model_id',
            2 => 'name',
            3 => 'year_start',
            4 => 'year_end',
            5 => 'type_id',
            6 => 'created_at',
            7 => 'updated_at'
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
