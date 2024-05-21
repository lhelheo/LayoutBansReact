import { HiCalendarDays, HiClock, HiMiniWrench, HiPlus } from "react-icons/hi2";
import { HiArrowUpTray } from "react-icons/hi2";
import { Outlet } from "react-router-dom";



function App() {
  const btnStyle = "flex items-center bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg cursor-pointer my-3"

  return (
      <div className="flex h-screen">
       
        <div className="flex-auto bg-gradient-to-r from-slate-200 to-white border-r-2 shadow-2xl px-10">
          <p className="text-black text-2xl p-4">Logomarca</p>

          <div className="flex flex-col text-center">
            <p>RCU</p>
            <p>Reunião e Criação de Us</p>
          </div>

          <p className="my-10 text-xs text-gray-500">Menu</p>
          <div className="mb-4">
            
            <div className={btnStyle}>
              <HiPlus className="mr-4"/>
                <p className="flex items-end font-medium">Nova Reunião</p>
            </div>
            
            <div className={btnStyle}>
              <HiArrowUpTray className="mr-4"/>
                <p className="flex items-end font-medium">Upload de Reunião</p>
            </div>
            <div className={btnStyle}>
              <HiCalendarDays className="mr-4"/>
              <p className="flex items-end font-medium">Agendar Reunião</p>
            </div>
          </div>

          <div className="my-10"></div>

          <p className="mb-10 text-xs text-gray-500">Opções</p>
          <div>

          <div className={btnStyle}>
            <HiClock className="mr-4"/>
            <p className="flex items-end font-medium">Histórico de Reuniões</p>  
          </div>
          
          <div className={btnStyle}>
            <HiMiniWrench className="mr-4"/>
              <p className="flex items-end font-medium">Configurações</p>
          </div>
          </div>

        </div>
        <div className="flex-auto">
          <p className="text-black text-2xl p-4 w-[1500px]">
            <Outlet />
          </p>
        </div>
      </div>
  );
}

export default App
