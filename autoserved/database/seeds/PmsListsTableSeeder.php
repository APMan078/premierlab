<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class PmsListsTableSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'master_pms_lists';
        $this->csv_delimiter = ';';
        $this->filename = base_path().'/database/seeds/csv/pms.csv';
        $this->offset_rows = 1;
        $this->mapping = [
            0 => 'id',
            1 => 'mileage',
            2 => 'check_items',
            3 => 'clean_items',
            4 => 'change_items',
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
