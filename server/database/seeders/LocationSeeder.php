<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Load JSON data
        $jsonPath = database_path('seeders/nepal_location.json'); // Place the JSON file in this directory
        $jsonData = File::get($jsonPath);
        $data = json_decode($jsonData, true);

        foreach ($data['provinceList'] as $province) {
            // Insert province
            DB::table('provinces')->insert([
                'id' => $province['id'],
                'name' => $province['name'],
            ]);

            foreach ($province['districtList'] as $district) {
                // Insert district
                DB::table('districts')->insert([
                    'id' => $district['id'],
                    'province_id' => $province['id'],
                    'name' => $district['name'],
                ]);

                foreach ($district['municipalityList'] as $municipality) {
                    // Insert municipality
                    DB::table('municipalities')->insert([
                        'id' => $municipality['id'],
                        'district_id' => $district['id'],
                        'name' => $municipality['name'],
                    ]);
                }
            }
        }
    }
}
