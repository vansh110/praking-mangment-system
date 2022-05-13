<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Slot extends Model
{
    use HasFactory;
    protected $table = 'tbl_slot';
    protected $fillable = [
        'number',
        'owner_id',
    ];
}
