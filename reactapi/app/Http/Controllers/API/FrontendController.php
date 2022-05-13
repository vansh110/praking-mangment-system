<?php

// namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use App\Models\Guest;

// class FrontendController extends Controller
// {
//     public function guest()
//     {
//         $guest = Guest::where('status','0')->get();
//         return response()->json([
//             'status' => 200,
//             'guest' => $guest
//         ]);
//     }


//     public function slottrans($slot_id)
//     {
//         $guest = Guest::where('slot_id',$slot_id)->where('status','0')->First();
//         if($guest)
//         {
//             $guest = Guest::where('slot_id',$guest->slot_id)->where('status','0')->get();
//             if($guest)
//             {
//                 return response()->json([
//                     'status' => 200,
//                     'guest' => $guest,
//                 ]);
//             }
//             else
//             {
//                 return response()->json([
//                     'status' => 404,
//                     'message' => 'No data found'
//                 ]);
//             }
//         }  
//         else
//         {
//             return response()->json([
//                 'status' => 404,
//                 'message' => 'Slot not found'
//             ]);
//         }  
//     }


//     public function viewslot($slot_id)
//     {

//         $guest = Guest::where('slot_id',$slot_id)->where('status','0')->First();
//         if($guest)
//         {
//             $guest = Guest::where('slot_id',$guest->slot_id)->where('status','0')->get();
//             if($guest)
//             {
//                 return response()->json([
//                     'status' => 200,
//                     'guest' => $guest,
//                 ]);
//             }
//             else
//             {
//                 return response()->json([
//                     'status' => 404,
//                     'message' => 'No data found'
//                 ]);
//             }
//         }  
//         else
//         {
//             return response()->json([
//                 'status' => 404,
//                 'message' => 'Slot not found'
//             ]);
//         }

//     }


// }
