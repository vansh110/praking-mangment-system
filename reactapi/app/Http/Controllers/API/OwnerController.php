<?php

namespace App\Http\Controllers\API;

use App\Models\Owner;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OwnerController extends Controller
{
    
    public function index()
    {
        $owners = Owner::all();
        return response()->json([
            'status' => 200,
            'owner' => $owners
        ], 200);
    }



    public function edit($id)
    {
        $owner = Owner::find($id);
        if($owner) {
            return response()->json([
                'status' => 200,
                'owner' => $owner
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




    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
            'email' => 'required|email|max:191|unique:tbl_owner',
            'contactno' => 'required|min:10|max:10',
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

            $owner = new Owner;
            $owner->firstname = $request->input('firstname');
            $owner->lastname = $request->input('lastname');
            $owner->contactno = $request->input('contactno');
            $owner->email = $request->input('email');
            $owner->status = $request->input('status') == true ? 1 : 0;
            $owner->save();
            return response()->json([
                'status' => 200,
                'message' => 'Owner added successfully',
            ]);

        }
    }


    public function update(request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'firstname' => 'required|max:191',
            'lastname' => 'required|max:191',
            'email' => 'required|email|max:191',
            'contactno' => 'required|min:10|max:10',
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

            $owner = Owner::find($id);
            if($id)
            {
                $owner->firstname = $request->input('firstname');
                $owner->lastname = $request->input('lastname');
                $owner->contactno = $request->input('contactno');
                $owner->email = $request->input('email');
                $owner->status = $request->input('status') == true ? 1 : 0;
                $owner->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Owner update successfully',
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
        $owner = Owner::find($id);
        if($owner)
        {
            $owner->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Owner deleted successfully'
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

