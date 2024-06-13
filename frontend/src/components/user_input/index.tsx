
import {useSelector} from "react-redux";
import Auth from "./auth";
import Inputs from "./input_controls";
import CurrentRound from "./current_round";
import Speed from "./slider";


function InputCard() {
  const {isAuthenticated} = useSelector((state:any) => state.auth);

  return ( <>
    {/* if not authenticated, show the enter your name form. */}
    {!isAuthenticated && <Auth/>}

    {/* show the input window  */}
    {isAuthenticated && <div className="bg-white p-6 rounded-lg shadow-md">
      <Inputs />
      <CurrentRound />
      <Speed />
    </div>
    }
      
  </> );
}

export default InputCard;