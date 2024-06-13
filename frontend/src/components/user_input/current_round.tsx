
function CurrentRound() {
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
  <div className="flex flex-col items-start w-full max-w-lg mx-auto p-2 rounded-lg my-3">
      <h2 className="text-lg font-semibold mb-1">Current Round</h2>
      <div className="overflow-x-auto w-full overflow-auto max-h-40 ">
        <table className="min-w-full border-collapse overflow-hidden rounded-md border-1 border-slate-400 ">
          <thead >
            <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
              <th className="text-left py-1 px-4">Name</th>
              <th className="text-left py-1 px-4">Points</th>
              <th className="text-left py-1 px-4">Multiplier</th>
            </tr>
          </thead>
          <tbody>
            {data.map((player, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-1 px-4">{player.name}</td>
                <td className="py-1 px-4">{player.points}</td>
                <td className="py-1 px-4">{player.multiplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
}

export default CurrentRound;