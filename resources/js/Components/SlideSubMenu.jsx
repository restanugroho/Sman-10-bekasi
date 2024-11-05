import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaXmark } from "react-icons/fa6";

const SlideSubMenu = ({ Logo, Sub, slideSub, subStyle }) => {
    const [indexnya, setIndexnya] = useState(null);

    const gantiDown = (index) => {
        setIndexnya((prev) => (prev === index ? null : index));
    };

    return (
        <div className={`list-none bg-white w-full p-10 space-y-8 shadow-2xl ${
            Sub ? "block" : "hidden"
        } transition-all duration-250`}
        >
            <img src={Logo} alt="Logo" className="w-12 pb-10 border-b border-abu2" />
        </div>
    );
};

export default SlideSubMenu;
