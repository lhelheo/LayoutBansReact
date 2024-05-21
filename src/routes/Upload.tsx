import { HiArrowUpTray } from "react-icons/hi2";

function Upload () {
    return (
      <>
        <div>
          <h1 className="text-green-700">Upload de Reunião</h1>
        </div>

        <div className="border-2 border-dashed border-green-700 w-max p-20 flex flex-col items-center gap-3
        ">
          <HiArrowUpTray size={70} className="text-green-700" />
          <p className="text-sm w-[200px] text-center">Arraste aqui e solte o arquivo da reunião ou</p>
          <button className="bg-green-700 text-white text-xs font-bold py-2 px-4 rounded-lg cursor-pointer">Fazer Upload</button>  
        </div>

        <button className="bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-lg cursor-pointer">Gravar Reunião</button>  
      </>
    );
  }
  
  export default Upload;