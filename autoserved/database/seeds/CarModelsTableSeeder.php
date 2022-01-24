<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class CarModelsTableSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'master_car_models';
        $this->csv_delimiter = ',';
        $this->filename = base_path().'/database/seeds/csv/car_model.csv';
        $this->offset_rows = 1;
        $this->mapping = [
            0 => 'id',
            1 => 'make_id',
            2 => 'name',
            3 => 'type_id',
            4 => 'created_at',
            5 => 'updated_at'
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
