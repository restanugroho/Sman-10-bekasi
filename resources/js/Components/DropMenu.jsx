import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const DropMenu = ({ children, items, jenis = true, indexnya, drop, onClick }) => {
    return (
        <div>
            {jenis ? (
                <div>
                    <div className="relative inline-block space-y-2">
                        <button
                            onClick={onClick}
                            className={`flex space-x-2 p-2 items-center ${
                                drop === indexnya ? "bg-wargrad rounded-full text-white" : ""
                            }`}
                        >
                            <div className="hover:bg-wargrad hover:bg-clip-text hover:text-transparent transition-all duration-150 ease-in-out">
                                {children}
                            </div>
                            <div className="text-sm">
                                {drop === indexnya ? <FaChevronRight /> : <FaChevronDown />}
                            </div>
                        </button>
                        <div
                            className={`absolute left-0 z-30 w-auto grid space-y-2 bg-white rounded-[30px] border border-abu1/50 shadow-md p-4 transition-all duration-300 ease-in-out ${
                                drop === indexnya ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 -translate-y-2"
                            }`}
                            style={{ pointerEvents: drop === indexnya ? 'auto' : 'none' }}
                        >
                            {drop === indexnya && items.map((item, index) => (
                                <a
                                    className="hover:bg-wargrad hover:bg-clip-text hover:text-transparent transition-all duration-150 ease-in-out"
                                    key={index}
                                    href={item.href}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <button className={`flex space-x-2 p-2 items-center`}>
                    <div className="hover:bg-wargrad hover:bg-clip-text hover:text-transparent transition-all duration-150 ease-in-out">
                        {children}
                    </div>
                </button>
            )}
        </div>
    );
};

export default DropMenu;
