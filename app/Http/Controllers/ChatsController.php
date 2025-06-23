<?php

namespace App\Http\Controllers;
use App\Models\Chats;
use App\Events\ChatsUpdated;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatsController extends Controller
{
    public function index()
    {
        return Inertia::render('Chats/Index', ['chatsData' => Chats::with('user')->latest()->get()]);
    }

    public function store(Request $request)
    {
        $chats = Chats::create($request->validate([
            'content' => 'required',
        ]));

        broadcast(new ChatsUpdated($chats))->toOthers();

        return redirect()->route('chat.index');
    }

    public function update(Request $request, Chats $chats)
    {
        $chats->update($request->validate([
            'content' => 'required',
        ]));

        broadcast(new ChatsUpdated($chats))->toOthers();

        return redirect()->route('chat.index');
    }

    public function destroy(Chats $chats)
    {
        $chats->delete();
        broadcast(new ChatsUpdated($chats))->toOthers();

        return redirect()->route('chat.index');
    }
}
