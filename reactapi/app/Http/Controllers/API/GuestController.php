<?php

namespace App\Http\Controllers\API;


use App\Models\Guest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class GuestController extends Controller
{
    public function index()
    {
        $guests = Guest::all();
        return response()->json([
            'status' => 200,
            'guest' => $guests
        ], 200);
    }



    public function edit($id)
    {
        $guest = Guest::find($id);
        if($guest) {
            return response()->json([
                'status' => 200,
                'guest' => $guest
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Guest not found'
            ]);
        }
    }




    public function store(Request $request)
    {


        
        $validator = Validator::make($request->all(), [
            'guest_name' => 'required|max:191',
            'lc_number' => 'required|min:16|max:16|unique:tbl_guest_booking',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // 'duration' => 'required|max:191',
            'duration' => 'required',
            'slot_id' => 'required|min:2|max:2|unique:tbl_guest_booking',
            'start_date' => 'required|max:191',
            'charge' => 'required|max:191',
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
           
            $guest = new Guest;
            $guest->guest_name = $request->guest_name;
            $guest->lc_number = $request->lc_number;
            $guest->image = $request->image;
            $guest->duration = $request->duration;
            $guest->slot_id = $request->slot_id;
            $guest->start_date = $request->start_date;
            $guest->charge = $request->charge;
            $guest->remarks = $request->remarks;

            if($request->hasFile('image'))
            {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('uploads/guest/', $filename);
                $guest->image = 'uploads/guest/'. $filename;
            }


            $guest->save();

            return response()->json([
                'status' => 200,
                'message' => 'Guest added successfully',
            ]);

        }
    }


    public function update(request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'guest_name' => 'required|max:191',
            'lc_number' => 'required|min:16|max:16',
            // 'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'duration' => 'required',
            'slot_id' => 'required|min:2|max:2',
            'start_date' => 'required|max:191',
            'charge' => 'required|max:191',
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

            $guest = Guest::find($id);
            if($id)
            {
                $guest->guest_name = $request->guest_name;
                $guest->lc_number = $request->lc_number;
                $guest->image = $request->image;
                $guest->duration = $request->duration;
                $guest->slot_id = $request->slot_id;
                $guest->start_date = $request->start_date;
                $guest->charge = $request->charge;
                $guest->remarks = $request->remarks;

                if($request->hasFile('image'))
                {
                    $path = $guest->image;
                    if(File::exists($path))
                    {
                        File::delete($path);
                    }

                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('uploads/guest/', $filename);
                    $guest->image = 'uploads/guest/'. $filename;
                }


                $guest->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Guest update successfully',
                    ]);
                }
            
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => 'Guest not found'
                    ]);
                }
            }
        }

       
    public function destroy($id)
    {
        $guest = Guest::find($id);
        if($guest)
        {
            $guest->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Guest deleted successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Guest not found'
            ]);
        }
    }
}
