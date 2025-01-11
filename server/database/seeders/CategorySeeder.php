<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Education', 'icon' => 'fa-solid fa-school']);
        Category::create(['name' => 'Healthcare
', 'icon' => 'fa-solid fa-heartbeat']);
        Category::create(['name' => 'Environment', 'icon' => 'fa-solid fa-leaf']);
        Category::create(['name' => 'Water and Sanitation', 'icon' => 'fa-solid fa-water']);
        Category::create(['name' => 'Energy', 'icon' => 'fa-solid fa-solar-panel']);
        Category::create(['name' => 'Agriculture', 'icon' => 'fa-solid fa-seedling']);
    }
}
