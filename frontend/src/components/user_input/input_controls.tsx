import socketService from '../../utils/socket';
import { PollEvent } from '../../utils/types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { names } from '../../utils/names';
import { RootState } from '../../utils/types';

function Inputs() {
  const auth = useSelector((state:RootState)=>state.auth);
  const [points, setPoints] = useState<string>('');
  const [multiplier, setMultiplier] = useState<string>('');

  const handleStart = () =>{

    const poll: PollEvent = { name:auth.user_name, points:parseFloat(points), multiplier:parseFloat(multiplier) };
    socketService.emit('poll', poll);

    // create 4 random players to join the poll
    for(let i=1; i<=4; i++){
      const randomNumber = Math.random() * 10;
      // Get the integer part of the randomNumber
      const integerPart = Math.floor(randomNumber);
      const decimalPart = randomNumber - integerPart;
      
      const pollgen: PollEvent = { 
        name: names[Math.floor(Math.random() * names.length)], 
        points: Math.floor(Math.random() * 1000) + 1, 
        multiplier: parseFloat( decimalPart.toFixed(2))
      };
      socketService.connect(import.meta.env.VITE_BASE_URL);
      socketService.emit('poll', pollgen);
      // end of for block
    }

    return () => {socketService.disconnect();};
  }


  return ( 
    <div className="flex flex-col w-full max-w-md mx-auto  rounded-lg">
      <div className="flex  w-full mb-4 gap-x-2">
        <input type="number" onChange={(e)=>setPoints(e.target.value)}
          placeholder="Points"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        />
        <input type="number" onChange={(e)=>setMultiplier(e.target.value)}
          placeholder="Multiplier"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        />
      </div>
      <div className="w-full">
        <button onClick={()=>handleStart()} className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
          Start
        </button>
      </div>
    </div>
  );
}

export default Inputs;