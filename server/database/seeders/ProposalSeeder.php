<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Proposal;
use Illuminate\Database\Seeder;
use App\Models\ProposalDocument;
use App\Models\ProposalTimeline;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProposalSeeder extends Seeder
{
    public function run()
    {
        // Ensure storage directories exist
        Storage::makeDirectory('proposal_thumbnails');
        Storage::makeDirectory('proposal_documents');

        $organizations = User::role('organization')->get();
        $categories = Category::all();

        if ($organizations->isEmpty() || $categories->isEmpty()) {
            echo "Ensure you have organization users and categories in the database first.\n";
            return;
        }

        $proposals = [
            [
                'title' => 'School Renovation in Dhading',
                'description' => 'Renovating a school affected by recent landslides.',
                'location' => 'Dhading',
                'target_community' => 'Local students and teachers',
                'expected_impact' => 'Improved learning environment for 200 students.',
                'why_urgent' => 'Monsoon season is approaching rapidly.',
                'thumbnail' => 'proposal_thumbnails/1.jpeg',
            ],
            [
                'title' => 'Clean Drinking Water in Sindhupalchok',
                'description' => 'Setting up clean water pipelines in remote areas.',
                'location' => 'Sindhupalchok',
                'target_community' => 'Rural villages',
                'expected_impact' => 'Access to safe drinking water for 500 households.',
                'why_urgent' => 'Current water sources are contaminated.',
                'thumbnail' => 'proposal_thumbnails/8.jpg',
            ],
            [
                'title' => 'Health Camp in Humla',
                'description' => 'Providing free medical checkups and medicines.',
                'location' => 'Humla',
                'target_community' => 'Underserved populations',
                'expected_impact' => 'Improved health awareness and treatment.',
                'why_urgent' => 'Lack of immediate healthcare facilities.',
                'thumbnail' => 'proposal_thumbnails/9.jpeg',
            ],
            [
                'title' => 'Solar Panels for Remote Villages in Dolpa',
                'description' => 'Installing solar panels for electricity in off-grid areas.',
                'location' => 'Dolpa',
                'target_community' => 'Residents of remote villages',
                'expected_impact' => 'Electricity access for 150 households.',
                'why_urgent' => 'To provide electricity before winter.',
                'thumbnail' => 'proposal_thumbnails/10.jpeg',
            ],
            [
                'title' => 'Reforestation in Chitwan',
                'description' => 'Planting trees to restore deforested areas.',
                'location' => 'Chitwan',
                'target_community' => 'Wildlife and local farmers',
                'expected_impact' => 'Improved ecosystem and biodiversity.',
                'why_urgent' => 'To prevent soil erosion during the rainy season.',
                'thumbnail' => 'proposal_thumbnails/2.jpeg',
            ],
            [
                'title' => 'Flood Relief in Bardiya',
                'description' => 'Providing relief materials to flood-affected families.',
                'location' => 'Bardiya',
                'target_community' => 'Flood victims',
                'expected_impact' => 'Support for 300 families to recover.',
                'why_urgent' => 'Immediate assistance needed post-flood.',
                'thumbnail' => 'proposal_thumbnails/3.jpeg',
            ],
            [
                'title' => 'Women Empowerment Program in Jumla',
                'description' => 'Providing skill development training to women.',
                'location' => 'Jumla',
                'target_community' => 'Underprivileged women',
                'expected_impact' => 'Economic independence for 50 women.',
                'why_urgent' => 'Training needs to start before harvest season.',
                'thumbnail' => 'proposal_thumbnails/4.jpeg',
            ],
            [
                'title' => 'Community Library in Kavre',
                'description' => 'Setting up a library for students and locals.',
                'location' => 'Kavre',
                'target_community' => 'Students and villagers',
                'expected_impact' => 'Access to books and learning materials.',
                'why_urgent' => 'To encourage reading habits in children.',
                'thumbnail' => 'proposal_thumbnails/5.jpeg',
            ],
            [
                'title' => 'Agricultural Training in Palpa',
                'description' => 'Providing modern farming techniques to farmers.',
                'location' => 'Palpa',
                'target_community' => 'Local farmers',
                'expected_impact' => 'Increased crop production and income.',
                'why_urgent' => 'Training must align with planting season.',
                'thumbnail' => 'proposal_thumbnails/6.jpg',
            ],
            [
                'title' => 'Waste Management in Pokhara',
                'description' => 'Implementing waste segregation and recycling.',
                'location' => 'Pokhara',
                'target_community' => 'Urban residents',
                'expected_impact' => 'Cleaner environment and reduced pollution.',
                'why_urgent' => 'To mitigate health hazards from unmanaged waste.',
                'thumbnail' => 'proposal_thumbnails/7.jpg',
            ],
        ];

        foreach ($proposals as $proposalData) {
            $organization = $organizations->random();
            $category = $categories->random();

            $proposal = Proposal::create([
                'user_id' => $organization->id,
                'category_id' => $category->id,
                'title' => $proposalData['title'],
                'slug' => Str::slug($proposalData['title']),
                'description' => $proposalData['description'],
                'thumbnail' => $proposalData['thumbnail'],
                'excerpt' => Str::limit($proposalData['description'], 100),
                'location' => $proposalData['location'],
                'target_community' => $proposalData['target_community'],
                'expected_impact' => $proposalData['expected_impact'],
                'urgent' => true,
                'why_urgent' => $proposalData['why_urgent'],
                'estimated_start_date' => now()->addDays(rand(7, 15)),
                'expected_completion_date' => now()->addDays(rand(30, 60)),
                'status' => 'pending',
            ]);

            $timelines = [
                [
                    'name' => 'Initial Planning',
                    'start_date' => now()->addDays(rand(1, 7)),
                    'end_date' => now()->addDays(rand(8, 14)),
                    'estimated_cost' => rand(5000, 10000),
                    'status' => 'pending',
                ],
                [
                    'name' => 'Resource Mobilization',
                    'start_date' => now()->addDays(rand(8, 14)),
                    'end_date' => now()->addDays(rand(15, 20)),
                    'estimated_cost' => rand(10000, 15000),
                    'status' => 'pending',
                ],
                [
                    'name' => 'Implementation',
                    'start_date' => now()->addDays(rand(15, 20)),
                    'end_date' => now()->addDays(rand(25, 35)),
                    'estimated_cost' => rand(15000, 25000),
                    'status' => 'pending',
                ],
                [
                    'name' => 'Monitoring & Evaluation',
                    'start_date' => now()->addDays(rand(36, 45)),
                    'end_date' => now()->addDays(rand(46, 60)),
                    'estimated_cost' => rand(5000, 10000),
                    'status' => 'pending',
                ],
            ];

            foreach ($timelines as $timeline) {
                ProposalTimeline::create([
                    'proposal_id' => $proposal->id,
                    'name' => $timeline['name'],
                    'start_date' => $timeline['start_date'],
                    'end_date' => $timeline['end_date'],
                    'estimated_cost' => $timeline['estimated_cost'],
                    'status' => $timeline['status'],
                ]);
            }

            // Create sample documents
            for ($i = 1; $i <= 2; $i++) {
                $docPath = 'proposal_documents/' . Str::slug($proposalData['title']) . "_doc$i.pdf";
                Storage::put($docPath, 'Sample content for testing.');
                ProposalDocument::create([
                    'proposal_id' => $proposal->id,
                    'path' => $docPath,
                ]);
            }
        }

        echo "10 proposals with timelines and documents created successfully.\n";
    }
}
