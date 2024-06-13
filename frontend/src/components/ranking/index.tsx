
function RankingWindow() {
  // import the global states here.
// Example data for the table
const data = [
  { name: 'Player 1', points: 100, multiplier: 2 },
  { name: 'Player 2', points: 80, multiplier: 1.5 },
  { name: 'Player 3', points: 120, multiplier: 3 },
  { name: 'Player 4', points: 90, multiplier: 2.2 },
  { name: 'Player 5', points: 110, multiplier: 2.5 },
  { name: 'Player 6', points: 95, multiplier: 1.8 }
];

return (
  <div className="flex flex-col bg-white items-start w-full mx-auto p-4 rounded-lg my-3">
    <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-indigo-600">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
        </svg>
      <h1 className="text-lg font-semibold mb-1 pl-2">Ranking  </h1>

    </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border-collapse overflow-hidden rounded-md border-1 border-slate-400 ">
          <thead>
            <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
              <th className="text-left py-1 px-4">No</th>
              <th className="text-left py-1 px-4">Name</th>
              <th className="text-left py-1 px-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((player, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-1 px-4">{index+1}</td>
                <td className="py-1 px-4">{player.name}</td>
                <td className="py-1 px-4">{player.multiplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
}

export default RankingWindow;