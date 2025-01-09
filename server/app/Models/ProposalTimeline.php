<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProposalTimeline extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'proposal_id',
        'title',
        'description',
        'date',
        'time',
        'status',
    ];
}
