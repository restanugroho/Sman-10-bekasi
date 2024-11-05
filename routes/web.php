<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'Nama' => 'SMA NEGERI 10 KOTA BEKASI',
        'Logo' => 'https://i.ibb.co.com/yp1xGTs/logo-sman-10-bekasi-4-1.png',
    ]);
});

Route::get('/profil/strukturorganisasi', function () {
    return Inertia::render('Strukture', [
        'Nama' => 'SMA NEGERI 10 KOTA BEKASI',
        'Logo' => 'https://i.ibb.co.com/yp1xGTs/logo-sman-10-bekasi-4-1.png',
    ]);
});
Route::get('/profil/ekstrakurikuler', function () {
    return Inertia::render('Ekstra', [
        'Nama' => 'SMA NEGERI 10 KOTA BEKASI',
        'Logo' => 'https://i.ibb.co.com/yp1xGTs/logo-sman-10-bekasi-4-1.png',
    ]);
});
Route::get('/info/berita', function () {
    return Inertia::render('BlogBerita', [
        'Nama' => 'SMA NEGERI 10 KOTA BEKASI',
        'Logo' => 'https://i.ibb.co.com/yp1xGTs/logo-sman-10-bekasi-4-1.png',
    ]);
});
Route::get('/pengumuman', function () {
    return Inertia::render('Pengumuman', [
        'Nama' => 'SMA NEGERI 10 KOTA BEKASI',
        'Logo' => 'https://i.ibb.co.com/yp1xGTs/logo-sman-10-bekasi-4-1.png',
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback(function () {
    return Inertia::render('NotFound', [
        'Logo' => 'https://i.ibb.co.com/yp1xGTs/logo-sman-10-bekasi-4-1.png',
        'Nama' => 'SMA NEGERI 10 KOTA BEKASI',
    ]);
});

require __DIR__.'/auth.php';
