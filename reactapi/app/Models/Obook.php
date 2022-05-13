<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Obook extends Model
{
    use HasFactory;
    protected $table = 'owner_booking';
    protected $fillable = [
        'o_name',
        'v_no',
        'in_time',
        'out_time',
        'd_slot',
        'v_type',
    ];
}
