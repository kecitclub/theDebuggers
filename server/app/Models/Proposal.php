<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'thumbnail',
        'excerpt',
        'description',
        'location',
        'target_community',
        'expected_impact',
        'urgent',
        'why_urgent',
        'estimated_budget',
        'estimated_start_date',
        'expected_completion_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function timelines()
    {
        return $this->hasMany(ProposalTimeline::class);
    }

    public function documents()
    {
        return $this->hasMany(ProposalDocument::class);
    }
}
