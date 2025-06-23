<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ChatsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Post;

Route::get('/', function () {
    $rsDatas = Post::latest()->paginate(10)->appends(request()->query());
    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'postData' => $rsDatas
    ]);
});

Route::get('/posts/detail/{id}', function($id) {
    $rsDatas = Post::where('id', $id)->with('category')->first();
    return Inertia::render('PostDetail', [
        'postDataDetail' => $rsDatas
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
    Route::get('/categories/create', [CategoryController::class, 'create'])->name('categories.create');
    Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
    Route::patch('/categories/{id}', [CategoryController::class, 'update'])->name('categories.update');
    Route::get('/categories/{id}', [CategoryController::class, 'edit'])->name('categories.edit');
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');

    Route::get('/post', [PostController::class, 'index'])->name('post.index');
    Route::get('/post/create', [PostController::class, 'create'])->name('post.create');
    Route::post('/post', [PostController::class, 'store'])->name('post.store');
    Route::patch('/post/{id}', [PostController::class, 'update'])->name('post.update');
    Route::get('/post/{id}', [PostController::class, 'edit'])->name('post.edit');
    Route::delete('/post/{id}', [PostController::class, 'destroy'])->name('post.destroy');

    Route::get('/chat', [ChatsController::class, 'index'])->name('chat.index');
    Route::post('/chat', [ChatsController::class, 'store'])->name('chat.store');
    Route::put('/chat/{post}', [ChatsController::class, 'update'])->name('chat.update');
    Route::delete('/chat/{post}', [ChatsController::class, 'destroy'])->name('chat.destroy');
});

require __DIR__.'/auth.php';
