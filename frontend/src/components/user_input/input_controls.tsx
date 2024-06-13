import { useState } from "react";


function Inputs() {
  const [points, setPoints] = useState('');
  const [multiplier, setMultiplier] = useState('');
  

  return ( 
    <div className="flex flex-col w-full max-w-md mx-auto  rounded-lg">
      <div className="flex  w-full mb-4">
        <input type="text"
          placeholder="Points"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        />
        <input type="text"
          placeholder="Multiplier"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="w-full">
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Start
        </button>
      </div>
    </div>
  );
}

export default Inputs;