<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Entry extends Model
{
    protected $fillable = [
        'category_id',
        'retrieval_date',
        'source_year',
        'title',
        'content',
        'source',
        'author',
        'tags',
        'images',
    ];

    public function index(){
        return Entry::all();
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
