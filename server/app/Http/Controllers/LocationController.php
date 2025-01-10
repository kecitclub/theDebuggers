<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Province;
use App\Models\Municipality;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function getProvinces()
    {
        $provinces = Province::all();

        return response()->json($provinces);
    }

    public function getDistricts($provinceId)
    {
        $districts = District::where('province_id', $provinceId)->get();

        return response()->json($districts);
    }

    public function getMunicipalities($districtId)
    {
        $municipalities = Municipality::where('district_id', $districtId)->get();

        return response()->json($municipalities);
    }
}
