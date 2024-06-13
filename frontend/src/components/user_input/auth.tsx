import { useState } from "react";


function Auth() {
  const [name, setName] = useState('');

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    console.log("form", name)
  }
  return ( 
    <div className="flex flex-col bg-white p-2 py-4 rounded-lg shadow-md items-center justify-center">
      <h2 className=" font-bold text-2xl my-8 ">Welcome</h2>

      <form className="flex flex-col my-6 mt-8 gap-y-6" onSubmit={handleSubmit}>
        <div className="sm:col-span-4">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Please insert your name</label>
          <div className="mt-4">
            <input onChange={(e)=>setName(e.target.value)} id="name" name="name" type="text"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

        </div>
        <div className="mt-3 flex items-center justify-center gap-y-6">
          <button type="submit"
            className="rounded-md w-36 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Accept
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;