import { useState } from "react"
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

const Footer = ({ Nama, Logo }) => {
    const [showFullText, setShowFullText] = useState(false);
    const handleReadMore = () => 
        setShowFullText(!showFullText);
    return(
        <footer className="w-full h-auto bg-gray-300 mt-10 flex flex-col md:flex-row justify-between items-start p-10 text-abu1 space-y-10 md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-start space-y-5 md:w-1/3">
            <a href="/" id="logo" className="flex items-center space-x-3">
                <img src={Logo} alt="Logo" className="w-12 h-auto" />
                <h1 className="text-lg font-semibold hidden sm:block">{Nama}</h1>
            </a>
            <p className="text-sm leading-relaxed">
                {showFullText ? (
                    <>
                        Dahulunya SMAN 10 Kota Bekasi merupakan filial dari SMA Negeri 4 Kota Bekasi, kemudian memisahkan diri menjadi sekolah independen dan terbentuklah SMAN 10 Kota Bekasi. Pada awalnya kami hanya memiliki satu gedung pembelajaran dan tepat di belakang gedung itu merupakan rawa, tetapi, setelah beberapa pergantian tahun, kami mulai berbenah dan sekarang ini menjadi sekolah yang asri dan memiliki empat gedung utama.
                    </>
                ) : (
                    <>
                        Dahulunya SMAN 10 Kota Bekasi merupakan filial dari SMA Negeri 4 Kota Bekasi, kemudian memisahkan diri menjadi sekolah independen dan terbentuklah SMAN 10 Kota Bekasi...
                    </>
                )}
                <button onClick={handleReadMore} className="text-blue-500 hover:underline ml-1">
                    {showFullText ? "Tutup" : "Baca Selengkapnya"}
                </button>
            </p>
            <p className="text-sm">&copy; 2024 SMAN 10 Bekasi</p>
        </div>
        
        <div className="flex flex-col space-y-5 md:w-1/3">
            <h1 className="text-xl font-medium">Peta Situs</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <ul className="space-y-2">
                    <li><a href="/" className="hover:underline">Beranda</a></li>
                    <li><a href="/" className="hover:underline">Sambutan</a></li>
                    <li><a href="/" className="hover:underline">Visi Misi</a></li>
                    <li><a href="/" className="hover:underline">Berita Kami</a></li>
                    <li><a href="/" className="hover:underline">Ekstrakurikuler</a></li>
                </ul>
                <ul className="space-y-2">
                    <li><a href="/" className="hover:underline">Profil</a></li>
                    <li><a href="/" className="hover:underline">Struktur</a></li>
                    <li><a href="/" className="hover:underline">Ekstrakurikuler</a></li>
                </ul>
                <ul className="space-y-2">
                    <li><a href="/" className="hover:underline">Info</a></li>
                    <li><a href="/" className="hover:underline">Berita</a></li>
                    <li><a href="/" className="hover:underline">Pengumuman</a></li>
                    <li><a href="/" className="hover:underline">Kelulusan</a></li>
                    <li><a href="/" className="hover:underline">Ujian Online</a></li>
                </ul>
            </div>
        </div>
        
        <div className="flex flex-col space-y-5 md:w-1/3">
            <h1 className="text-xl font-medium">Media Sosial & Contact</h1>
            <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                    <FaPhone className="text-lg" />
                    <p>(021) 889 759 28</p>
                </div>
                <div className="flex items-center space-x-2">
                    <IoMail className="text-lg" />
                    <p>info@sman10bekasi.sch.id</p>
                </div>
            </div>
            <div className="flex space-x-4">
                <FaFacebook className="text-xl hover:text-blue-700" />
                <FaInstagram className="text-xl hover:text-pink-500" />
            </div>
        </div>
    </footer>
    )
}

export default Footer