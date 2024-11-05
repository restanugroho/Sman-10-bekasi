import ButtonGrad from "@/Components/ButtonGrad"
import Footer from "@/Layouts/Footer"
import Headernya from "@/Layouts/Headernya"
import Sections2 from "@/Layouts/Sections2"
import { Head } from "@inertiajs/react"
import { useState, useEffect } from "react"
import { FaCaretLeft, FaCaretRight, FaRegNewspaper } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5"
import { PiStudentBold } from "react-icons/pi";

const Home = ({ Nama, Logo }) => {
    const [siswa, setSiswa] = useState(0);
    const [guru, setGuru] = useState(0);
    const [tenagaKerja, setTenagaKerja] = useState(0);

    const countUpTo = (setCount, maxCount) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= maxCount) {
                setCount(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    };

    useEffect(() => {
        countUpTo(setSiswa, 1058); 
        countUpTo(setGuru, 56);
        countUpTo(setTenagaKerja, 0);
    }, []);

    const textgrad = "bg-wargrad bg-clip-text text-transparent transition-all hover:text-war1 duration-150 ease-in-out"
    return(
        <div className="bg-abu1/50">
        <Head title="Beranda"/>
        <Headernya Nama={Nama} Logo={Logo}/>
        <div className="fixed -z-30">
            <img src="https://i.ibb.co.com/pLLDwmD/DJI-00602-1-1.jpg" alt="" className="w-full h-screen" />
        </div>
        
        <section id="ke1" className="w-full h-screen bg-white flex flex-col justify-center items-center text-abu2 text-center overflow-hidden">
            <div className="mt-16 px-4 md:px-8">
                <h1 className="text-3xl md:text-5xl font-medium pb-3">{Nama}</h1>
                <p className="pb-5 text-sm md:text-base lg:text-lg">"Terwujudnya sumber daya manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK."</p>
                <ButtonGrad text='Berita Kami' tambah="px-6 md:px-12 py-2"/>
            </div>
        </section>

        <Sections2/>

        <section id="ke3" className="w-full h-auto overflow-hidden">
            <div className="h-auto flex max-sm:flex-col max-sm:space-y-20 justify-between items-center overflow-hidden border border-abu1/25 rounded-[30px] shadow-xl p-16">
                <div className="space-y-4">
                    <div className="font-medium text-4xl text-white bg-wargrad px-4  rounded-full">
                    <p>{siswa}</p>
                    </div>
                    <div className="flex items-center space-x-3 text-4xl text-white">
                        <div className="pr-4 border-r-4 border-white text-white"><PiStudentBold/></div>
                        <p className="text-3xl text-white">Siswa</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="font-medium text-4xl text-white bg-wargrad px-4  rounded-full">
                    <p>{guru}</p>
                    </div>
                    <div className="flex items-center space-x-3 text-4xl text-white">
                        <div className="pr-4 border-r-4 border-white text-white"><PiStudentBold/></div>
                        <p className="text-3xl text-white">Guru</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="font-medium text-4xl text-white bg-wargrad px-4  rounded-full">
                    <p>{tenagaKerja}</p>
                    </div>
                    <div className="flex items-center space-x-3 text-4xl text-white">
                        <div className="pr-4 border-r-4 border-white text-white"><PiStudentBold/></div>
                        <p className="text-3xl text-white">Tenaga Kerja</p>
                    </div>
                </div>
            </div>
        </section>

    <section id="ke4" className="w-full h-auto bg-white overflow-hidden p-5 md:p-10 space-y-5 md:space-y-10">
        <div className="flex space-x-10 max-sm:space-x-0 max-sm:flex-col max-sm:space-y-10 max-sm:justify-center">
            {['Visi', 'Misi'].map((title, index) => (
                <div key={index} className="w-full h-auto flex-col space-y-10 rounded-[30px] shadow-xl border border-abu1/25 flex justify-between p-5 md:p-10">
                    <div className="flex justify-between w-full">
                        <div>
                            <p className="bg-wargrad rounded-full text-white px-8 md:px-16 py-2 shadow-xl">{title}</p>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full" />
                            <div className="w-4 h-4 bg-gray-400 rounded-full" />
                        </div>
                    </div>
                    <p>
                        1. Membentuk SDM yang memiliki budaya Religius.<br />
                        2. Melaksanakan KBM secara Profesional dan Proporsional yang didukung oleh media pembelajaran yang relevan.<br />
                        3. Mengembangkan bahan ajar berbasis TIK mengacu pada SKL.<br />
                        4. Mengutamakan prestasi akademik dan non akademik secara kompetitif.<br />
                        5. Menyiapkan lulusan yang mampu bersaing di masyarakat dan menuju jenjang pendidikan yang lebih tinggi.<br />
                        6. Mengembangkan sarana dan prasarana TIK untuk menunjang keberhasilan pendidikan.<br />
                        7. Menciptakan budaya baca melalui pelayanan perpustakaan yang optimal.<br />
                        8. Memberdayakan stakeholders dalam menciptakan lingkungan yang sehat, kondusif, dan alami.<br />
                        9. Mengembangkan budaya Senyum, Salam, Sapa, Sopan dan Santun (5S).
                    </p>
                </div>
            ))}
        </div>
    </section>

        <section id="ke5" className="bg-gray-100 p-5 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0 md:space-x-5">
                <div className="flex items-center space-x-3">
                    <FaRegNewspaper className="text-2xl md:text-3xl text-abu2"/>
                    <h1 className="text-2xl md:text-3xl text-abu1 font-medium">Berita Kami</h1>
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                    <input type="search" placeholder="Telusuri Berita..." className="border-abu1/25 rounded-full placeholder:text-abu1/80 px-3 py-2 w-full md:w-auto"/>
                    <div className="bg-wargrad grid justify-center items-center p-3 text-white rounded-full"><IoSearch/></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 p-5 md:p-10">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-full md:w-2/4 h-auto bg-white border border-abu1/25 shadow-xl rounded-[30px] p-5 space-y-5">
                        <div id="tumb" className="w-full h-48 rounded-[30px] overflow-hidden border border-abu1/25">

                        </div>
                        <div id="judul" className="space-y-2">
                            <p id="hastag" className={textgrad}>#Contoh</p>
                            <h1 className="font-semibold">Contoh Beritanya ya untuk ukuran dan desain nya</h1>
                        </div>
                        <div className="h-24 overflow-hidden">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dignissimos tenetur ex, ullam dolores placeat similique omnis obcaecati. Adipisci perspiciatis sequi at enim tempore reiciendis dolorum, quas in quos tenetur.
                        </p>
                        </div>
                        <a href="" className={textgrad}>Baca Selengkapnya...</a>
                        <div className="border-t border-abu1/25 pt-2">
                            <p className="text-gray-500 text-sm">Juli 05 2024 | {Nama}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-5 pb-5 md:pb-10">
                <button className="border bg-white border-abu1/25 rounded-full shadow-xl p-3 md:p-4 text-abu1"><FaCaretLeft/></button>
                <button className="border bg-white border-abu1/25 rounded-full shadow-xl p-3 md:p-4 text-abu1"><FaCaretRight/></button>
            </div>
        </section>

        <section id="ke6" className="p-5 md:p-10 bg-white w-full h-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-5">
                <div className="flex items-center space-x-3">
                    <FaRegNewspaper className="text-2xl md:text-3xl text-abu2"/>
                    <h1 className="text-2xl md:text-3xl text-abu1 font-medium">Ekstrakurikuler</h1>
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                    <input type="search" placeholder="Telusuri Ekstrakurikuler..." className="border-abu1/25 rounded-full placeholder:text-abu1/80 px-3 py-2 w-full md:w-auto"/>
                    <div className="bg-wargrad grid justify-center items-center p-3 text-white rounded-full"><IoSearch/></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 p-5 md:p-10">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-full md:w-2/4 h-auto bg-white border border-abu1/25 shadow-xl rounded-[30px] p-5 space-y-5">
                        <div id="tumb" className="w-full h-48 rounded-[30px] overflow-hidden border border-abu1/25">

                        </div>
                        <div id="judul" className="space-y-2">
                            <p id="hastag" className={textgrad}>#Contoh</p>
                            <h1 className="font-semibold">Contoh Beritanya ya untuk ukuran dan desain nya</h1>
                        </div>
                        <div className="h-24 overflow-hidden">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dignissimos tenetur ex, ullam dolores placeat similique omnis obcaecati. Adipisci perspiciatis sequi at enim tempore reiciendis dolorum, quas in quos tenetur.
                        </p>
                        </div>
                        <a href="" className={textgrad}>Baca Selengkapnya...</a>
                        <div className="border-t border-abu1/25 pt-2">
                            <p className="text-gray-500 text-sm">Juli 05 2024 | {Nama}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-5 pb-5 md:pb-10">
                <button className="border border-abu1/25 rounded-full shadow-xl p-3 md:p-4 text-abu1"><FaCaretLeft/></button>
                <button className="border border-abu1/25 rounded-full shadow-xl p-3 md:p-4 text-abu1"><FaCaretRight/></button>
            </div>
        </section>
        <Footer Nama={Nama} Logo={Logo}/>
        </div>
    )
}

export default Home
