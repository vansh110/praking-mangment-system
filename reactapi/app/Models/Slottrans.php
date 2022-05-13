<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Slottrans extends Model
{
    use HasFactory;
    protected $table = 'tbl_slot_transaction';
    protected $fillable = [
        // 'slot_id',
        'vehicle_id',
        'lc_number',
        'start_date_time',
        'end_date_time',
    ];

}
