import ButtonGrad from '@/Components/ButtonGrad';
import Navbar from '@/Layouts/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react';

function NotFound({ Logo, Nama }) {

    return (
        <div>
        <div className="flex flex-col justify-center items-center w-full h-screen bg-white text-abu2 text-center">
            <Head title='Tidak Di Temukan'/>
            <div className=" px-4 md:px-8 flex-col justify-center">
                <div className='w-full flex justify-center'>
                <img src={Logo} alt="Logo" className="w-24 h-24 md:w-32 md:h-32 mb-8" />
                </div>
                <h1 className="text-3xl md:text-5xl font-medium pb-3">{Nama}</h1>
                <p className="text-sm md:text-base lg:text-lg pb-5">
                    404 Maaf, halaman yang Anda cari tidak ditemukan.
                </p>
                <ButtonGrad tambah='px-6 py-2' text='Ke Beranda' link="/"/>
            </div>
        </div>
        </div>
    );
}

export default NotFound;