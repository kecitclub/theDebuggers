<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ProposalDocument;
use App\Models\ProposalTimeline;
use App\Http\Resources\ProposalResource;

class ProposalController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string',
            'description' => 'required|string',
            'thumbnail' => 'required|file',
            'excerpt' => 'required|string',
            'location' => 'required|string',
            'target_community' => 'required|string',
            'expected_impact' => 'required|string',
            'urgent' => 'required|boolean',
            'why_urgent' => 'nullable|string',
            'estimated_start_date' => 'required|date',
            'expected_completion_date' => 'required|date',
            'status' => 'nullable|string|in:pending,approved,rejected',
            'timelines' => 'required|array',
            'timelines.*.name' => 'required|string',
            'timelines.*.start_date' => 'required|date',
            'timelines.*.end_date' => 'required|date',
            'timelines.*.estimated_cost' => 'required|integer',
            'timelines.*.status' => 'required|string',
            'documents' => 'required|array',
            'documents.*' => 'required|file',
        ]);

        // Create the proposal
        $proposal = Proposal::create([
            'user_id' => $validatedData['user_id'],
            'category_id' => $validatedData['category_id'],
            'title' => $validatedData['title'],
            'slug' => Str::slug($validatedData['title']),
            'description' => $validatedData['description'],
            'thumbnail' => $validatedData['thumbnail']->store('proposal_thumbnails'),
            'excerpt' => $validatedData['excerpt'],
            'location' => $validatedData['location'],
            'target_community' => $validatedData['target_community'],
            'expected_impact' => $validatedData['expected_impact'],
            'urgent' => $validatedData['urgent'],
            'why_urgent' => $validatedData['why_urgent'],
            'estimated_start_date' => $validatedData['estimated_start_date'],
            'expected_completion_date' => $validatedData['expected_completion_date'],
            'status' => $validatedData['status'] ?? 'pending',
        ]);

        // Create the proposal timelines
        foreach ($validatedData['timelines'] as $timeline) {
            ProposalTimeline::create([
                'proposal_id' => $proposal->id,
                'name' => $timeline['name'],
                'start_date' => $timeline['start_date'],
                'end_date' => $timeline['end_date'],
                'estimated_cost' => $timeline['estimated_cost'],
                'status' => $timeline['status'],
            ]);
        }

        // Create the proposal documents
        foreach ($validatedData['documents'] as $document) {
            $path = $document->store('proposal_documents');

            ProposalDocument::create([
                'proposal_id' => $proposal->id,
                'path' => $path,
            ]);
        }

        return response()->json([
            'message' => 'Proposal created successfully!',
            'proposal' => $proposal,
        ], 201);
    }

    public function getTrandingProposal()
    {
        $proposals = Proposal::with('timelines')->limit(3)->get();
        return ProposalResource::collection($proposals);
    }

    public function getProposal($slug)
    {
        $proposal = Proposal::where('slug', $slug)->with('timelines')->first();
        return new ProposalResource($proposal);
    }

    public function index()
    {
        $proposals = Proposal::with('timelines')->get();
        return ProposalResource::collection($proposals);
    }
}
