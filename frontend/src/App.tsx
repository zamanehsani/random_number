
import './App.css'

function App() {

  return (
    <main className='flex flex-col bg-slate-700 h-screen p-2 items-center '>
      {/* The entire page is divided into two section of upper part for the user input and the status with the graph
      and the lower part is for the ranking and chat window. */}


      {/* the upper section */}
      <div className='max-w-2x1 my-2 p-2'>
        {/* this section is also divided into two part of right and left.  */}
          <div className='flex flex-row gap-x-4 bg-slate-50'>
            {/* the user input window */}
            <div className='basis-1/3  h-72'>
              <p>this is the user input window</p>
            </div>
            
            {/* the graph and status window */}
            <div className='basis-full h-72'>
              <p>this is the graph part graph</p>
            </div>
          </div>
      </div>

      {/* the lower section */}
      <div className='max-w-2x1 my-2 p-2'>
        {/* this section is also divided into two part of right and left.  */}
          <div className='flex flex-row gap-x-4 bg-slate-50'>
            {/* the user input window */}
            <div className=' h-72'>
              <p>this is the ranking window</p>
            </div>
            
            {/* the graph and status window */}
            <div className=' h-72'>
              <p>this is the chat window</p>
            </div>
          </div>
      </div>
     
      
    </main>
  )
}

export default App
