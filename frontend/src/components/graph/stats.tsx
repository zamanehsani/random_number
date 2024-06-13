

function Stats() {
  return ( 
    <div className="flex flex-nowrap justify-center gap-4">
      <div className="w-1/3 bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Column 1</h2>
        <p>Content for column 1</p>
      </div>
      <div className="w-1/3 bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Column 2</h2>
        <p>Content for column 2 </p>
      </div>
      <div className="w-1/3 bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Column 3</h2>
        <p>Content for column 3 </p>
      </div>
    </div>
  );
}

export default Stats;