const Frame = ({ i, NamaFoot  }) => {
    const textgrad = "bg-wargrad bg-clip-text text-transparent transition-all hover:text-war1 duration-150 ease-in-out"
    return(
        <>
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
                    <p className="text-gray-500 text-sm">Juli 05 2024 | {NamaFoot}</p>
                </div>
            </div>
        </>
    )
}

export default Frame