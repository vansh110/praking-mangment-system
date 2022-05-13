<?php

namespace App\Http\Controllers\API;

use App\Models\Vehicle;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    
    public function index()
    {
        $vehicles = Vehicle::all();
        return response()->json([
            'status' => 200,
            'vehicle' => $vehicles
        ], 200);
    }



    public function edit($id)
    {
        $vehicle = Vehicle::find($id);
        if($vehicle) {
            return response()->json([
                'status' => 200,
                'vehicle' => $vehicle
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Vehcile not found'
            ]);
        }
    }




    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:3|unique:tbl_vehicle',
            'lc_number' => 'required|max:25|unique:tbl_vehicle',
            'description' => 'required|max:191',
            'owner_id' => 'required|max:25|unique:tbl_vehicle',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }
        else
        {

            $vehicle = new Vehicle;
            $vehicle->category_id = $request->category_id;
            $vehicle->lc_number = $request->lc_number;
            $vehicle->description = $request->description;
            $vehicle->photo = $request->photo;
            $vehicle->owner_id = $request->owner_id;
            $vehicle->status = $request->input('status') == true ? 0 : 1;
            $vehicle->save();
            return response()->json([
                'status' => 200,
                'message' => 'Vehicle added successfully',
            ]);

        }
    }


    public function update(request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:3',
            'lc_number' => 'required|max:25',
            'description' => 'required|max:191',
            'owner_id' => 'required|max:25',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        }
        else
        {

            $vehicle = Vehicle::find($id);
            if($id)
            {
                $vehicle->category_id = $request->category_id;
                $vehicle->lc_number = $request->lc_number;
                $vehicle->description = $request->description;
                $vehicle->photo = $request->photo;
                $vehicle->owner_id = $request->owner_id;
                $vehicle->status = $request->input('status') == true ? 0 : 1;
                $vehicle->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Vehicle update successfully',
                    ]);
                }
            
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => 'Owner not found'
                    ]);
                }
            }
        }

       
    public function destroy($id)
    {
        $vehicle = Vehicle::find($id);
        if($vehicle)
        {
            $vehicle->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Vehicle deleted successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Vehicle not found'
            ]);
        }
    }

}

