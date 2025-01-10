<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = ['id'];

    public function proposals()
    {
        return $this->hasMany(Proposal::class);
    }
}
