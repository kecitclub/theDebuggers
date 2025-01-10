<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Proposal;
use App\Models\ProposalTimeline;
use App\Models\ProposalDocument;
use Faker\Factory as Faker;

class ProposalSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Fetch users with the role 'user'
        $users = User::role('user')->get();

        foreach ($users as $user) {
            // Create 3-10 proposals for each user
            $numberOfProposals = rand(3, 10);

            for ($i = 0; $i < $numberOfProposals; $i++) {
                // Create a proposal
                $proposal = Proposal::create([
                    'user_id' => $user->id,
                    'category_id' => 1,
                    'description' => $faker->sentence(10),
                    'location' => $faker->city,
                    'thumbnail' => 'proposal_thumbnails/default.jpg',
                    'excerpt' => $faker->sentence(20),
                    'target_community' => $faker->words(3, true),
                    'expected_impact' => $faker->sentence(8),
                    'urgent' => $faker->boolean,
                    'why_urgent' => $faker->optional()->sentence(12),
                    'estimated_start_date' => $faker->dateTimeBetween('+1 week', '+2 weeks'),
                    'expected_completion_date' => $faker->dateTimeBetween('+2 months', '+6 months'),
                    'status' => 'pending',
                ]);

                // Create 2-5 timelines for each proposal
                $numberOfTimelines = rand(2, 5);

                for ($j = 0; $j < $numberOfTimelines; $j++) {
                    ProposalTimeline::create([
                        'proposal_id' => $proposal->id,
                        'name' => $faker->sentence(4),
                        'start_date' => $faker->dateTimeBetween('+1 week', '+2 weeks'),
                        'end_date' => $faker->dateTimeBetween('+3 weeks', '+2 months'),
                        'estimated_cost' => $faker->numberBetween(1000, 10000),
                        'status' => 'pending',
                    ]);
                }

                // Create 1-3 documents for each proposal
                $numberOfDocuments = rand(1, 3);

                for ($k = 0; $k < $numberOfDocuments; $k++) {
                    // Simulate storing a file
                    $fileName = $faker->uuid . '.pdf';
                    $fakePath = "proposal_documents/{$fileName}";
                    Storage::put($fakePath, 'Sample document content.');

                    ProposalDocument::create([
                        'proposal_id' => $proposal->id,
                        'path' => $fakePath,
                    ]);
                }
            }
        }

        $this->command->info('Proposals created successfully for users with the role "user".');
    }
}
