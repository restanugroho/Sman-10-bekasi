import Footer from "@/Layouts/Footer";
import Headernya from "@/Layouts/Headernya";
import { Head } from "@inertiajs/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Pengumuman = ({ Nama, Logo }) => {
    const pengumumanData = [
        { judul: "Jadwal Kegiatan Olimpiade Tingkat SMA 2022", tanggal: "2022/03/26 17:42" },
        { judul: "Pengumuman Kelulusan 2021/2022", tanggal: "2022/04/27 21:39" },
        { judul: "Info PPDB 2022", tanggal: "2022/05/11 13:24" },
        { judul: "Info CPD PPDB 2022 Jalur Non Akademik", tanggal: "2022/06/12 12:05" },
        { judul: "TES DIAGNOSTIK KOGNITIF 22-23", tanggal: "2022/07/05 19:39" },
      ];
    return (
        <div>
            <Head title="Pengumuman" />
            <div>
                <Headernya Nama={Nama} Logo={Logo} />
                <section className="w-full h-auto flex flex-col justify-center">
                    <div className="w-full flex flex-col justify-center text-center space-y-5 p-10 pt-48">
                        <div className="w-full flex justify-center">
                            <img src={Logo} alt="Logo" className="w-24" />
                        </div>
                        <h1 className="text-3xl font-medium">Pengumuman</h1>
                        <div className="w-full flex items-center justify-center text-lg text-gray-300">
                            <p className="bg-wargrad bg-clip-text text-transparent">{Nama}</p>
                            <FaArrowRightLong className="mx-2" />
                            <p>Pengumuman</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="border border-abu1/25 rounded-[30px] shadow-xl m-10 p-10">
                            <table className="min-w-full border">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border-b-2 font-semibold text-left">Judul</th>
                                        <th className="px-4 py-2 border-b-2 font-semibold text-left">Tanggal</th>
                                        <th className="px-4 py-2 border-b-2 font-semibold text-center">Lihat</th>
                                        <th className="px-4 py-2 border-b-2 font-semibold text-center">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pengumumanData.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="px-4 py-2">{item.judul}</td>
                                            <td className="px-4 py-2">{item.tanggal}</td>
                                            <td className="px-4 py-2 text-center">
                                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                                    Lihat Pengumuman
                                                </button>
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <Footer Nama={Nama} Logo={Logo} />
            </div>
        </div>
    );
};

export default Pengumuman;