<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Owner extends Model
{
    use HasFactory;
    protected $table = 'tbl_owner';
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'contactno',
    ];
}
