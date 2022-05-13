<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Vehicle extends Model
{
    use HasFactory;
    protected $table = 'tbl_vehicle';
    protected $fillable = [
        'category_id',
        'lc_number',
        'description',
        'photo',
        'owner_id',
        'status',
    ];
}
