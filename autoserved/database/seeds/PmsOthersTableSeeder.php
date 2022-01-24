<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class PmsOthersTableSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'master_pms_others';
        $this->csv_delimiter = ',';
        $this->filename = base_path().'/database/seeds/csv/pms_others.csv';
        $this->offset_rows = 1;
        $this->mapping = [
            0 => 'id',
            1 => 'name',
            2 => 'type_id',
            3 => 'created_at',
            4 => 'updated_at'
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
