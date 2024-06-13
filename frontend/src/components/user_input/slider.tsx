import { useState } from "react";

function Speed() {
  const steps = [];
  for (let i = 1.0; i <= 5.0; i += 0.1) {
    steps.push(i.toFixed(1));
  }

  const [speed, setSpeed] = useState(1.0);
  return ( 
    <div className="flex flex-col items-start w-full max-w-md mx-auto bg-white p-2 rounded-lg ">
      <label htmlFor="slider" className="mb-2 text-lg font-semibold">
        Speed
      </label>
      <input type="range"  id="slider" name="slider" min="1.0" max="5.0" step="0.1" defaultValue={speed}
        onChange={(e)=>setSpeed(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>

      <div className="w-full flex justify-between mt-2">
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