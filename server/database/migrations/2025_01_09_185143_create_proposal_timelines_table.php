<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proposal_timelines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('proposal_id')->constrained();
            $table->string('name');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->integer('estimated_cost');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposal_timelines');
    }
};
