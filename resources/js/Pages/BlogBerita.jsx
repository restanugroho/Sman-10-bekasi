import Footer from "@/Layouts/Footer";
import Headernya from "@/Layouts/Headernya";
import { Head } from "@inertiajs/react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ArticlePage = ({ Nama, Logo }) => {
    // Data artikel utama
    const article = {
        title: "Judul Artikel Utama",
        date: "04 November 2024",
        image: "/path/to/article-image.jpg", // Ganti dengan URL gambar utama yang sesuai
        content: [
            "Ini adalah paragraf pertama dari artikel utama. Artikel ini berisi informasi penting yang berkaitan dengan topik tertentu.",
            "Ini adalah paragraf kedua. Artikel ini bisa berisi lebih banyak informasi dan penjelasan.",
            "Ini adalah paragraf ketiga. Tambahkan detail yang menarik atau relevan di sini."
        ]
    };

    // Data artikel populer
    const popularArticles = [
        { title: "Berita Populer 1", date: "01 November 2024", slug: "berita-populer-1", thumbnail: "/path/to/popular1-thumbnail.jpg" },
        { title: "Berita Populer 2", date: "30 Oktober 2024", slug: "berita-populer-2", thumbnail: "/path/to/popular2-thumbnail.jpg" },
        { title: "Berita Populer 3", date: "28 Oktober 2024", slug: "berita-populer-3", thumbnail: "/path/to/popular3-thumbnail.jpg" }
    ];

    // Data berita lainnya
    const otherArticles = [
        { title: "Berita Lainnya 1", date: "02 November 2024", slug: "berita-lainnya-1", thumbnail: "/path/to/other1-thumbnail.jpg" },
        { title: "Berita Lainnya 2", date: "29 Oktober 2024", slug: "berita-lainnya-2", thumbnail: "/path/to/other2-thumbnail.jpg" },
        { title: "Berita Lainnya 3", date: "27 Oktober 2024", slug: "berita-lainnya-3", thumbnail: "/path/to/other3-thumbnail.jpg" }
    ];

    // URL halaman artikel saat ini untuk dibagikan di media sosial
    const currentUrl = window.location.href;

    return (
        <div>
            <Head title={article.title} />
            <div>
                <Headernya Nama={Nama} Logo={Logo} />
                <section className="w-full flex flex-col justify-center">
                    {/* Header Title Section */}
                    <div className="w-full flex flex-col justify-center text-center space-y-5 p-10 pt-48">
                        <div className="w-full flex justify-center">
                            <img src={Logo} alt="" className="w-24" />
                        </div>
                        <h1 className="text-3xl font-medium">Blog Berita</h1>
                        <div className="w-full flex items-center justify-center text-lg text-gray-300">
                            <p className="bg-wargrad bg-clip-text text-transparent">{Nama}</p>
                            <FaArrowRightLong className="mx-2" />
                            <p>Blog Berita</p>
                        </div>
                    </div>

                    <div className="container mx-auto flex flex-wrap py-16 px-4 md:flex-nowrap">
                        {/* Main Content - Blog Article */}
                        <div className="w-full md:w-2/3 lg:w-3/4 px-4">
                            <div className="border border-abu1/25 rounded-3xl shadow-xl p-8">
                                <h1 className="text-4xl font-semibold mb-4">{article.title}</h1>
                                <p className="text-gray-500 mb-6">{article.date}</p>
                                <img src={article.image} alt="Article Image" className="w-full h-auto rounded-lg mb-6" />
                                <div className="text-gray-700 leading-relaxed space-y-6 mb-8">
                                    {article.content.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* Social Media Share Buttons */}
                                <div className="flex items-center space-x-4 mb-8">
                                    <span className="text-lg font-semibold">Bagikan:</span>
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                        <FaFacebook size={24} />
                                    </a>
                                    <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${article.title}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                        <FaTwitter size={24} />
                                    </a>
                                    <a href={`https://wa.me/?text=${article.title} ${currentUrl}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                                        <FaWhatsapp size={24} />
                                    </a>
                                </div>

                                {/* Feedback Section */}
                                <div className="border-t pt-6">
                                    <h2 className="text-2xl font-semibold mb-4">Apakah artikel ini bermanfaat?</h2>
                                    <div className="flex space-x-4">
                                        <button className="flex items-center space-x-2 text-green-600 hover:text-green-800">
                                            <FaThumbsUp size={20} />
                                            <span>Ya</span>
                                        </button>
                                        <button className="flex items-center space-x-2 text-red-600 hover:text-red-800">
                                            <FaThumbsDown size={20} />
                                            <span>Tidak</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Popular Articles and Other News */}
                        <aside className="w-full md:w-1/3 lg:w-1/4 px-4 mt-10 md:mt-0 space-y-8">
                            {/* Popular Articles */}
                            <div className="border border-abu1/25 rounded-3xl shadow-xl p-6">
                                <h2 className="text-2xl font-semibold mb-4">Populer Berita</h2>
                                {popularArticles.map((popular, index) => (
                                    <div key={index} className="flex mb-4">
                                        <img src={popular.thumbnail} alt="Thumbnail" className="w-16 h-16 rounded mr-4" />
                                        <div>
                                            <a href={`/blog/${popular.slug}`} className="text-lg font-medium text-blue-500 hover:underline">
                                                {popular.title}
                                            </a>
                                            <p className="text-gray-400 text-sm">{popular.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Other News */}
                            <div className="border border-abu1/25 rounded-3xl shadow-xl p-6">
                                <h2 className="text-2xl font-semibold mb-4">Berita Lainnya</h2>
                                {otherArticles.map((other, index) => (
                                    <div key={index} className="flex mb-4">
                                        <img src={other.thumbnail} alt="Thumbnail" className="w-16 h-16 rounded mr-4" />
                                        <div>
                                            <a href={`/blog/${other.slug}`} className="text-lg font-medium text-gray-700 hover:underline">
                                                {other.title}
                                            </a>
                                            <p className="text-gray-400 text-sm">{other.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </section>
                <Footer Nama={Nama} Logo={Logo} />
            </div>
        </div>
    );
};

export default ArticlePage;
