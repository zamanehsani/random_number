import { useState } from "react";

function Speed() {
  const steps = [];
  for (let i = 1.0; i <= 5.0; i += 0.1) {
    steps.push(i.toFixed(1));
  }

  const [speed, setSpeed] = useState(1.0);
  return ( 
    <div className="flex flex-col items-start w-full max-w-md mx-auto bg-white p-2 rounded-lg ">
      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        </svg>
        <label htmlFor="slider" className="text-lg font-semibold mb-1 pl-2 heading-1">
          Speed
        </label>
      </div>

      <input type="range"  id="slider" name="slider" min="1.0" max="5.0" step="0.1" defaultValue={speed}
        onChange={(e)=>setSpeed(parseFloat(e.target.value))}
        className="w-full h-3 bg-gray-200 border rounded-lg appearance-none cursor-pointer"/>

      <div className="w-full flex justify-between mt-2 ">
        {[1,2,3,4,5].map(step => (
          <span key={step} className="text-gray-500 text-sm">
            {step}x
          </span>
        ))}
      </div>
    </div>

   );
}

export default Speed;