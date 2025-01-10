<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\ProposalController;

require __DIR__ . '/auth.php';
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/provinces', [LocationController::class, 'getProvinces']);
Route::get('/districts/{provinceId}', [LocationController::class, 'getDistricts']);
Route::get('/municipalities/{districtId}', [LocationController::class, 'getMunicipalities']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('trading-proposals', [ProposalController::class, 'getTradingProposal']);

Route::group(['middleware' => ['auth:sanctum', 'role:organization']], function () {
    Route::post('/proposals', [ProposalController::class, 'store']);
    Route::get('/proposals', [ProposalController::class, 'index']);
    Route::get('/proposals/{id}', [ProposalController::class, 'show']);
    Route::put('/proposals/{id}', [ProposalController::class, 'update']);
    // Route::delete('/proposals/{id}', [ProposalController::class, 'destroy']);

    Route::post('/proposals/{id}/approve', [ProposalController::class, 'approve']);
    Route::post('/proposals/{id}/reject', [ProposalController::class, 'reject']);
    Route::post('/proposals/{id}/complete', [ProposalController::class, 'complete']);
    Route::post('/proposals/{id}/cancel', [ProposalController::class, 'cancel']);
});
