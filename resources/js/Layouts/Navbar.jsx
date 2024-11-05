import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronRight, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import DropMenu from "@/Components/DropMenu";
import { motion } from "framer-motion";

const Navbar = ({ Nama, Logo }) => {
    const menuItems = {
        profil: [
            { label: "Struktur Organisasi", href: "/profil/strukturorganisasi" },
            { label: "Ekstrakurikuler", href: "/profil/ekstrakurikuler" },
        ],
        info: [
            { label: "Berita", href: "/info/berita" },
            { label: "Pengumuman", href: "/pengumuman" },
        ],
        aplikasi: [
            { label: "Pengumuman Kelulusan", href: "/pengumumankelulusan" },
            { label: "Ujian Online", href: "/ujianonline" },
        ],
    };

    const [activeIndex, setActiveIndex] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveIndex(null);
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinkStyle = "flex space-x-2 items-center p-2 rounded-full text-white bg-wargrad duration-250 transition-all";

    return (
        <div className="font-Roboto mx-5 mt-3" ref={dropdownRef}>
            <div id="nav" className="bg-white/75 w-full flex justify-between items-center border border-abu1/25 rounded-[30px] p-4 backdrop-blur shadow-xl">
                <button href="/" id="logo" className="flex items-center w-[12rem] space-x-3">
                    <img src={Logo} alt="Logo" className="max-w-12" />
                    <h1 className="text-lg font-semibold max-[400px]:hidden">{Nama}</h1>
                </button>
                <ul className="flex space-x-14 max-lg:space-x-2 text-lg mr-8 items-center max-sm:hidden">
                    <DropMenu jenis={false}>
                        <a href="/">Beranda</a>
                    </DropMenu>
                    {Object.entries(menuItems).map(([key, items], index) => (
                        <DropMenu
                            key={key}
                            items={items}
                            indexnya={index + 1}
                            drop={activeIndex}
                            onClick={() => toggleDropdown(index + 1)}
                        >
                            <a>{key.charAt(0).toUpperCase() + key.slice(1)}</a>
                        </DropMenu>
                    ))}
                    <DropMenu jenis={false}>
                        <a href="#">Galeri</a>
                    </DropMenu>
                </ul>
                <FaBars className="hidden max-sm:block text-3xl" onClick={toggleSidebar} />
            </div>
            <motion.div
                id="slideSubModePhon"
                initial={{ x: "100%" }}
                animate={{ x: isSidebarOpen ? "0%" : "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute list-none bg-white top-0 h-screen p-10 right-0 space-y-8 shadow-2xl"
            >
                <div className="text-xl">
                    <FaXmark onClick={toggleSidebar} />
                </div>
                <img src={Logo} alt="" className="w-12 pb-10 border-b border-abu2" />
                <li>
                    <a href="/" className="flex space-x-2 items-center">
                        <p>Beranda</p>
                    </a>
                </li>
                {Object.entries(menuItems).map(([key, items], index) => (
                    <li key={key}>
                        <a
                            className={`flex space-x-2 items-center ${activeIndex === index + 1 ? navLinkStyle : ""}`}
                            onClick={() => toggleDropdown(index + 1)}
                        >
                            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                            <div className="text-sm">
                                {activeIndex === index + 1 ? <FaChevronRight /> : <FaChevronDown />}
                            </div>
                        </a>
                        <div className={`grid space-y-2 border-b border-abu1 transition-transform duration-300 max-h-0 overflow-hidden ${activeIndex === index + 1 ? "max-h-[200px] opacity-100 p-4" : "opacity-0"}`}>
                            {activeIndex === index + 1 && items.map((item, itemIndex) => (
                                <a className="hover:bg-wargrad hover:bg-clip-text hover:text-transparent" key={itemIndex} href={item.href}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </li>
                ))}
                <li>
                    <a href="#" className="flex space-x-2 items-center">
                        <p>Galeri</p>
                    </a>
                </li>
            </motion.div>
        </div>
    );
};

export default Navbar;
