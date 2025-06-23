<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rsDatas = Post::latest()->paginate(10)->appends(request()->query());
        
        return Inertia::render('Post/Index', [
            'postData' => $rsDatas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $rsCat = Category::all();

        return Inertia::render('Post/CreateEdit', [
            'datas' => '',
            'category' => $rsCat
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Post $model)
    {
        $validated = $request->validate([
            'category_id' => 'required',
            'title' => 'required|max:255|min:2',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads/posts', 'public');
            $validated['image'] = $imagePath;
        }

        Post::create($validated);

        return redirect()->route('post.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        $rsDatasModel = Post::find($id);
        return Inertia::render('Post/CreateEdit', [
            'datas' => $rsDatasModel
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'category_id' => 'required',
            'title' => 'required|max:255|min:2',
            'description' => 'required',
            'image' => 'required',
        ]);
        
        $rsDatasModel = Post::find($id);
        $rsDatasModel->update($request->all());

        return redirect()->route('post.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $rsDatasModel = Post::find($id);
        $rsDatasModel->delete();

        return back()->with('message', 'Deleted successfully');
    }
}
