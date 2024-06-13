import { useState } from "react";
import Auth from "./auth";

import Inputs from "./input_controls";
import CurrentRound from "./current_round";

function InputCard() {
  const [auth, setAuth] = useState(false);

  return ( <>
  
    {/* if not authenticated, show the enter your name form. */}
    {!auth && <Auth/>}

    {/* show the input window  */}
    {auth && <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User control window</h2>
      <p>This is the content of user control window</p>
      <Inputs />
      <CurrentRound />
    </div>
    }
      
  </> );
}

export default InputCard;