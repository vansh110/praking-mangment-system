<?php

namespace App\Http\Controllers\API;

use App\Models\Obook;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ObookController extends Controller
{
    
    public function index()
    {
        $obooks = Obook::all();
        return response()->json([
            'status' => 200,
            'obook' => $obooks
        ], 200);
    }



    // public function edit($id)
    // {
    //     $owner = Owner::find($id);
    //     if($owner) {
    //         return response()->json([
    //             'status' => 200,
    //             'owner' => $owner
    //         ]);
    //     }
    //     else
    //     {
    //         return response()->json([
    //             'status' => 404,
    //             'message' => 'Owner not found'
    //         ]);
    //     }
    // }




    public function st(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'o_name' => 'required|max:191',
            'v_no' => 'required|max:191|unique:owner_booking',
            'in_time' => 'required|max:191',
            'out_time' => 'required|max:191',
            'd_slot' => 'required|max:191|unique:owner_booking',
            'v_type' => 'required|max:191',
            'fees' => 'required',
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

            $obook = new Obook;
            $obook->o_name = $request->input('o_name');
            $obook->v_no = $request->input('v_no');
            $obook->in_time = $request->input('in_time');
            $obook->out_time = $request->input('out_time');
            $obook->d_slot = $request->input('d_slot');
            $obook->v_type = $request->input('v_type');
            $obook->fees = $request->input('fees');
            $obook->save();

            return response()->json([
                'status' => 200,
                'message' => 'Owner Booking Added Successfully'
            ]);

        }
    }


    // public function update(request $request, $id)
    // {

    //     $validator = Validator::make($request->all(), [
    //         'firstname' => 'required|max:191',
    //         'lastname' => 'required|max:191',
    //         'email' => 'required|email|max:191|unique:tbl_owner',
    //         'contactno' => 'required|max:191',
    //     ]);
    //     if($validator->fails())
    //     {
    //         return response()->json([
    //             'status' => 422,
    //             'errors' => $validator->messages(),
    //         ]);
    //     }
    //     else
    //     {

    //         $owner = Owner::find($id);
    //         if($id)
    //         {
    //             $owner->firstname = $request->input('firstname');
    //             $owner->lastname = $request->input('lastname');
    //             $owner->contactno = $request->input('contactno');
    //             $owner->email = $request->input('email');
    //             $owner->status = $request->input('status') == true ? 1 : 0;
    //             $owner->save();
    //             return response()->json([
    //                 'status' => 200,
    //                 'message' => 'Owner update successfully',
    //                 ]);
    //             }
            
    //         else
    //         {
    //             return response()->json([
    //                 'status' => 404,
    //                 'message' => 'Owner not found'
    //                 ]);
    //             }
    //         }
    //     }

       
    // public function destroy($id)
    // {
    //     $owner = Owner::find($id);
    //     if($owner)
    //     {
    //         $owner->delete();
    //         return response()->json([
    //             'status' => 200,
    //             'message' => 'Owner deleted successfully'
    //         ]);
    //     }
    //     else
    //     {
    //         return response()->json([
    //             'status' => 404,
    //             'message' => 'Owner not found'
    //         ]);
    //     }
    // }

}

