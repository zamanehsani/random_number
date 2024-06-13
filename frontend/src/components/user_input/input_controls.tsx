import { useState } from "react";


function Inputs() {
  const [points, setPoints] = useState('');
  const [multiplier, setMultiplier] = useState('');
  

  return ( 
    <div className="flex flex-col w-full max-w-md mx-auto  rounded-lg">
      <div className="flex  w-full mb-4 gap-x-2">
        <input type="number"
          placeholder="Points"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        />
        <input type="number"
          placeholder="Multiplier"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        />
      </div>
      <div className="w-full">
        <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
          Start
        </button>
      </div>
    </div>
  );
}

export default Inputs;