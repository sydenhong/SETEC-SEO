<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;

class Chats extends Model
{
    use HasFactory;
    protected $table      = 'chats';
    protected $primarykey = 'id';

    protected $fillable = [
        'content',
    ];

    protected static function booted()
    {
        static::creating(function ($chats) {
            if (!$chats->user_id) {
                $chats->user_id = Auth::id();
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
