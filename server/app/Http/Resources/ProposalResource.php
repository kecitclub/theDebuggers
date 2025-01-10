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
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'thumbnail' => $this->thumbnail,
            'raised' => 0,
            'goal' => $this->timelines->sum('amount'), // Sum the milestones' amounts
        ];
    }
}
