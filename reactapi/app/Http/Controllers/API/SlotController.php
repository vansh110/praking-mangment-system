<?php

namespace App\Http\Controllers\API;

use App\Models\Slot;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SlotController extends Controller
{
    
    public function index()
    {
        $slots = Slot::all();
        return response()->json([
            'status' => 200,
            'slot' => $slots
        ], 200);
    }



    public function edit($id)
    {
        $slot = Slot::find($id);
        if($slot) {
            return response()->json([
                'status' => 200,
                'slot' => $slot
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Slot not found'
            ]);
        }
    }




    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'number' => 'required|min:10|max:10|unique:tbl_slot',
            'owner_id' => 'required|min:2|max:5|unique:tbl_slot',
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

            $slot = new Slot;
            $slot->number = $request->input('number');
            $slot->owner_id = $request->input('owner_id');
            $slot->status = $request->input('status') == true ? 0 : 1;
            $slot->save();
            return response()->json([
                'status' => 200,
                'message' => 'Slot added successfully',
            ]);

        }
    }


    public function update(request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'number' => 'required|max:10',
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

            $slot = Slot::find($id);
            if($id)
            {
                $slot->number = $request->input('number');
                $slot->owner_id = $request->input('owner_id');
                $slot->status = $request->input('status') == true ? 0 : 1;
                $slot->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Slot update successfully',
                    ]);
                }
            
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => 'Slot not found'
                    ]);
                }
            }
        }

       
    public function destroy($id)
    {
        $slot = Slot::find($id);
        if($slot)
        {
            $slot->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Slot deleted successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Slot not found'
            ]);
        }
    }

}

