import Graph from "./graph";
import Stats from "./stats";


function GraphWindow() {
  
  return (
    <div className="flex flex-wrap">
      <Stats />

        <Graph />
    
    </div>
   );
}

export default GraphWindow;