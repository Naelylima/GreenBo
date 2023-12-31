const Topicos = ({img,titulo, texto}) => {
    return (
        <>
            <div className="xl:w-[38vh] flex items-center 2xl:w-[40vh]">
                <img className='xl:h-[70px] w-[70px] mr-[1vh] 2xl:h-[90px] 2xl:w-[90px]' src={img} alt="" />
                <div className="text-justify">
                    <h1 className='xl:text-[16px] font-bold 2xl:text-[20px]'>{titulo}</h1>
                    <p className="2xl: text-[18px]">{texto}</p>
                </div>
            </div>
        </>
    )
}
export default Topicos;