import { IoNotifications } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Pengumuman = ({ text = "" }) => { 
    const [isVisible, setIsVisible] = useState(true);

    const hilangkan = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    id="pengumuman"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-white/75 flex items-center border border-abu1/25 rounded-full p-2 justify-between space-x-2 overflow-hidden mx-5 mt-3 backdrop-blur shadow-xl"
                >
                    <div className="bg-wargrad flex items-center space-x-2 px-10 max-sm:px-5 max-lg:px-3 py-2 rounded-full">
                        <IoNotifications className="text-yellow-400 text-xl" />
                        <p className="max-lg:hidden text-white">Pengumuman</p>
                    </div>
                
                    <div className="relative mx-3 overflow-hidden w-full sm:w-[20rem] lg:w-[30rem] max-sm:block hidden">
                        <motion.p
                            className="whitespace-nowrap"
                            initial={{ x: "100%" }}
                            animate={{ x: `-${(text.length + 80) * 0.5}rem` }}
                            transition={{ 
                                repeat: Infinity,
                                duration: (text.length + 80) / 5,
                                ease: "linear"
                            }}
                        >
                            {text} "Terwujudnya sumber daya manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK."
                        </motion.p>
                    </div>

                    <div className="max-sm:hidden">
                        <p>"Terwujudnya sumber daya manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK."</p>
                    </div>
                    
                    <button className="bg-wargrad text-white text-xl p-2 z-20 shadow-xl rounded-full" onClick={hilangkan}>
                        <FaXmark />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Pengumuman;
