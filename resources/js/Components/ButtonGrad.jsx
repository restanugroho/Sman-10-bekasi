const ButtonGrad = ({ text, tambah, link }) => {
    return(
        <button href={link} className={`max-w-96 text-white bg-wargrad rounded-full border border-war0 ${tambah} hover:bg-wargradwar hover:scale-[1.05] hover:shadow-2xl hover:shadow-war2 duration-150 transition-all`}>
            <a href={link}>{text}</a>
        </button>
    )
}

export default ButtonGrad