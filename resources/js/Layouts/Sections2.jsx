import React, { useState } from 'react';

const Sections2 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id="ke2" className="w-full h-auto bg-white overflow-hidden p-5 md:p-10">
            <div id="sambutan" className="border flex flex-col justify-between rounded-[30px] h-auto p-5 shadow-xl">
                <div className='w-full flex justify-between'>
                    <div>
                        <p className="bg-wargrad rounded-full text-white py-2 shadow-xl text-center md:w-80">Sambutan Kepala Sekolah</p>
                    </div>
                    <div className="flex justify-center space-x-2 mt-4 md:mt-0">
                        <div className="w-4 h-4 bg-gray-300 rounded-full" />
                        <div className="w-4 h-4 bg-gray-400 rounded-full" />
                    </div>
                </div>
                <div className="flex max-sm:flex-col w-full justify-between max-sm:justify-center max-sm:space-y-10 items-center space-x-10 pt-10">
                    <div className="space-y-5">
                    <div className="rounded-[30px] overflow-hidden">
                        <img src="https://i.ibb.co.com/5RrgL23/kepala-sekolah.png" alt="" className="object-cover" />
                    </div>
                    <p className="bg-wargrad rounded-full text-white text-center p-2">Dra. Hj. Mukaromah, M.Pd</p>
                    </div>
                    <div className="rounded-[30px] overflow-hidden overflow-y-scroll p-5 w-3/4 h-96 max-sm:w-full">
                        <p>
                        Assalamalaikum wr.wb.
                        <br /><br />
                        Selamat datang di website SMAN 10 Kota Bekasi.
                        <br /><br />
                        Alhamdulillah, puji syukur kehadirat Allah SWT, Pencipta seluruh semesta alam, atas kemurahanNya kami hadir menyapa publik dalam rangka berbagi informasi seputar dunia pendidikan.
                        <br /><br />
                        Kehadiran website SMAN 10 Kota Bekasi menjadi bagian yang tak dapat dipisahkan terhadap konstelasi institusi pendidikan. Keberadaannya sangat penting agar mempermudah seluruh civitas pendidikan, baik pendidik/tenaga kependidikan, peserta didik, orang tua, dan masyarakat dapat mengakses informasi dan memperluas jejaring.
                        <br /><br />
                        Derasnya perkembangan teknologi informasi saat ini menjadi tantangan tersendiri dalam dunia pendidikan. Untuk itu, rekayasa teknologi menjadi pilihan agar melahirkan generasi yang adaptif terhadap teknologi.
                        <br /><br />
                        SMA Negeri 10 Kota Bekasi diusianya yang cukup matang senantiasa terus mengembangkan prestasi menuju sekolah unggul sebagaimana tertuang dalam visi sekolah:
                        <br /><br />
                        "Terwujudnya Sumber Daya Manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK."
                        <br /><br />
                        Keunggulan tidak hanya sebatas ditandai dengan capaian prestasi akademik tetapi secara integral dengan implementasi karakter. Budaya mutu menjadi satu kesatuan antara kualitas akademik dengan nilai-nilai karakter.
                        <br /><br />
                        SMAN 10 Kota Bekasi di era pandemi ini melaksanakan pembelajaran dari rumah (BDR) dengan sistem blended learning, kombinasi antara belajar dalam jaringan (daring) dengan belajar di luar jaringan (luring). Menghadapi masa AKB (adaptasi kebiasaan baru) kami tim manajemen sekolah telah menyiapkan berbagai sarana dan prosedur.
                        <br /><br />
                        Semoga pandemi virus COVID-19 segera berakhir sehingga seluruh elemen dapat kembali melaksanakan aktivitas rutin di sekolah.
                        <br /><br />
                        Billahi Taufiq wal Hidayah, Wassalamu’alaikum wr.wb
                        <br /><br />
                        Kepala Sekolah
                        <br />
                        Dra. Hj. Mukaromah, M.Pd
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sections2;