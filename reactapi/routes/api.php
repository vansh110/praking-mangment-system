<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\OwnerController;
use App\Http\Controllers\API\GuestController;
use App\Http\Controllers\API\SlotController;
use App\Http\Controllers\API\VehicleController;
use App\Http\Controllers\API\SlottransController;
use App\Http\Controllers\API\FrontendController;
use App\Http\Controllers\API\ObookController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


//getguest for booking in navbar
// Route::get('getGuest', [FrontendController::class, 'guest']);
// Route::get('fetchGuest/{slot_id}', [FrontendController::class, 'guest']);
// Route::get('view-slot/${guest_name}', [FrontendController::class, 'viewslot']);

//obook
Route::post('st-obook', [ObookController::class, 'st']);
Route::get('/view-obook', [ObookController::class, 'index']);

Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function () {

    Route::get('/checkingAuthencated', function () {
        return response()->json(['message' => 'You are in', 'status' => 200],200);
    });


    //Owner
    Route::get('/view-owner', [OwnerController::class, 'index']);   
    Route::post('store-owner', [OwnerController::class, 'store']);
    Route::get('edit-owner/{id}', [OwnerController::class, 'edit']);
    Route::put('update-owner/{id}', [OwnerController::class, 'update']);
    Route::delete('delete-owner/{id}', [OwnerController::class, 'destroy']);



    //Guest
    Route::get('/view-guest', [GuestController::class, 'index']);
    Route::post('store-guest', [GuestController::class, 'store']);
    Route::get('edit-guest/{id}', [GuestController::class, 'edit']);
    Route::put('update-guest/{id}', [GuestController::class, 'update']);
    Route::delete('delete-guest/{id}', [GuestController::class, 'destroy']);


    //Slot
    Route::get('/view-slot', [SlotController::class, 'index']);
    Route::post('store-slot', [SlotController::class, 'store']);
    Route::get('edit-slot/{id}', [SlotController::class, 'edit']);
    Route::put('update-slot/{id}', [SlotController::class, 'update']);
    Route::delete('delete-slot/{id}', [SlotController::class, 'destroy']);


    //Vehicle
    Route::get('/view-vehicle', [VehicleController::class, 'index']);
    Route::post('store-vehicle', [VehicleController::class, 'store']);
    Route::get('edit-vehicle/{id}', [VehicleController::class, 'edit']);
    Route::put('update-vehicle/{id}', [VehicleController::class, 'update']);
    Route::delete('delete-vehicle/{id}', [VehicleController::class, 'destroy']);

    //Slottrans
    Route::get('/view-slottrans', [SlottransController::class, 'index']);
    Route::post('store-slottrans', [SlottransController::class, 'store']);
    Route::get('edit-slottrans/{id}', [SlottransController::class, 'edit']);
    Route::put('update-slottrans/{id}', [SlottransController::class, 'update']);
    Route::delete('delete-slottrans/{id}', [SlottransController::class, 'destroy']);

});


Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('logout', [AuthController::class, 'logout']);

});



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
