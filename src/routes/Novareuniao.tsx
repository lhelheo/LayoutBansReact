function Novareuniao () {
    return (
      <>
        <div>
            <h1 className="text-green-700">Nova Reunião</h1>
        </div>

        <div className="flex flex-col items-center justify-center h-[800px] ">
            <p className="text-sm font-semibold">Link da Reunião: </p>
            <label htmlFor="">
                <input type="text" placeholder="Digite aqui" className="text-sm border-2 border-green-700 border-opacity-50 rounded-sm w-[300px] h-[30px]"/>
            </label>
        </div>

        <button className="bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-lg cursor-pointer">Gravar Reunião</button>  

      </>
    );
  }
  
  export default Novareuniao;