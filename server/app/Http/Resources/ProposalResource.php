<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProposalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'category' => $this->category->name,
            'category_id' => $this->category_id,
            'location' => $this->location,
            'target_community' => $this->target_community,
            'expected_impact' => $this->expected_impact,
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'thumbnail' => $this->thumbnail,
            'raised' => 0,
            'goal' => $this->timelines->sum('amount'),
            'status' => $this->status,
            'created_at' => $this->created_at,
            'organization_name' => $this->user->name,
            'estimated_start_date' => $this->estimated_start_date,
            'expected_completion_date' => $this->expected_completion_date,
            'timelines' => ProposalTimelineResource::collection($this->timelines),
        ];
    }
}
