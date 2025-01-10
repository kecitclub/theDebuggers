<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Proposal;
use Illuminate\Database\Seeder;
use App\Models\ProposalDocument;
use App\Models\ProposalTimeline;
use Illuminate\Support\Facades\Storage;

class ProposalSeeder extends Seeder
{
    public function run()
    {
        // Ensure storage directories exist
        Storage::makeDirectory('proposal_thumbnails');
        Storage::makeDirectory('proposal_documents');
        $organization = User::role('organization')->first();
        if (!$organization) {
            echo "No organization user found. Please create an organization user first.\n";
            return;
        }
        // Create a sample proposal
        $proposal = Proposal::create([
            'user_id' => $organization->id, // Adjust based on existing user IDs
            'description' => 'A sample proposal for testing.',
            'thumbnail' => 'proposal_thumbnails/sample_thumbnail.jpg',
            'excerpt' => 'This is a sample proposal excerpt.',
            'location' => 'Sample Location',
            'target_community' => 'Sample Community',
            'expected_impact' => 'Positive impact on the community.',
            'urgent' => true,
            'why_urgent' => 'Immediate funding required.',
            'estimated_start_date' => now()->addDays(7),
            'expected_completion_date' => now()->addDays(30),
            'status' => 'pending',
        ]);

        // Create sample timelines
        $timelines = [
            [
                'name' => 'Initial Research',
                'start_date' => now()->addDays(7),
                'end_date' => now()->addDays(14),
                'estimated_cost' => 5000,
                'status' => 'pending',
            ],
            [
                'name' => 'Implementation Phase',
                'start_date' => now()->addDays(15),
                'end_date' => now()->addDays(25),
                'estimated_cost' => 10000,
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
        $documents = [
            'proposal_documents/sample_doc1.pdf',
            'proposal_documents/sample_doc2.pdf',
        ];

        foreach ($documents as $doc) {
            Storage::put($doc, 'Sample content for testing.');
            ProposalDocument::create([
                'proposal_id' => $proposal->id,
                'path' => $doc,
            ]);
        }

        echo "Sample proposal, timelines, and documents created successfully.\n";
    }
}
