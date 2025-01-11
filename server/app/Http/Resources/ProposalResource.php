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
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'thumbnail' => $this->thumbnail,
            'raised' => 0,
            'goal' => $this->timelines->sum('amount'),
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}
