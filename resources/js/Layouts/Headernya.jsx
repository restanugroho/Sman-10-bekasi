import Pengumuman from "@/Components/Pengumuman"
import Navbar from "./Navbar"

const Headernya = ({ Nama, Logo }) => {
    return(
    <div id="header" className="fixed w-full justify-center z-20">
        <Pengumuman />
        <Navbar Logo={Logo} Nama={Nama}/>
    </div>
    )
}

export default Headernya