import Frame from "@/Components/Frame"
import Footer from "@/Layouts/Footer"
import Headernya from "@/Layouts/Headernya"
import { Head } from "@inertiajs/react"
import { FaArrowRightLong } from "react-icons/fa6"

const Strukture = ({ Nama, Logo}) => {
    return(
        <div>
            <Head title="Struktur"/>
            <div>
                <Headernya Nama={Nama} Logo={Logo}/>
                <section className=" w-full h-auto flex flex-col justify-center">
                    <div className="w-full flex flex-col justify-center text-center space-y-5 p-10 pt-48">
                        <div className="w-full flex justify-center">
                        <img src={Logo} alt="" className="w-24"/>
                        </div>
                        <h1 className="text-3xl font-medium">Struktur Organisasi</h1>
                        <div className="w-full flex items-center justify-center text-lg text-gray-300">
                        <p className="bg-wargrad bg-clip-text text-transparent">{Nama}</p>
                        <FaArrowRightLong className="mx-2" />
                        <p>Struktur Organisasi</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                    <div className="border border-abu1/25 rounded-[30px] shadow-xl m-10 p-10 flex flex-wrap">
                        <Frame />
                    </div>
                    </div>
                </section>
                <Footer Nama={Nama} Logo={Logo}/>
            </div>
        </div>
    )
}

export default Strukture