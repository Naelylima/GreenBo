
const Fluxo = ({cor, numero, texto}) => {
  return (
    <>
     <div className={`xl:h-[17vh] p-2 2xl:h-[20vh] w-[40vh] flex items-center rounded-lg justify-center  ${cor} 2xl:`}>
        <h1 className="xl:text-[60px] 2xl:text-[70px] w-[20%] flex items-center justify-center">{numero}</h1>
        <p className="text-[18px] w-[75%] text-justify">{texto}</p>
     </div>
    </>
  );
};
export default Fluxo;
