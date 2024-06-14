import socketService from '../../utils/socket';
import { PollEvent } from '../../utils/types';
import { useEffect, useState } from 'react';

function CurrentRound() {
  const [polls, setPolls] = useState<PollEvent[]>([]);
  const [CurrentPoll, setCurrentPoll] = useState<string>('');
  const [random_number, setRandom_number] = useState<string>('');

  useEffect(() => {
      socketService.connect(import.meta.env.VITE_BASE_URL);
      socketService.on('poll', (poll:{body:PollEvent}) => {setPolls(prevPolls => [...prevPolls, poll.body]);});
      socketService.on('poll_participation', (data) => {setCurrentPoll(data.ngeId);});

      // Listen for NGE event
      socketService.on(CurrentPoll, (message) => {console.log("sdf:", message); setRandom_number(message.randomNumber)});

      // Cleanup on component unmount
      return () => {
        socketService.off('poll_participation',()=>{console.log("I ahave left this round")});
        socketService.off('poll',()=>{console.log("I ahave left this round")});
        socketService.off(CurrentPoll, ()=>{console.log("I have left this round")});
        socketService.disconnect();
      };
  },[CurrentPoll,]);

return (
  <div className="flex flex-col items-start w-full max-w-lg mx-auto p-2 rounded-lg my-3">
    {/* this is for testing. just to show the backend return a number */}
    {random_number && <p className='text-red-500'>the Number Generated is {random_number}</p>}
    <div className="flex">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-indigo-600">
        <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
      </svg>
      <h1 className="text-lg font-semibold mb-1 pl-2">Current Round</h1>

    </div>
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
            {polls.map((player, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-1 px-4">{player?.name}</td>
                <td className="py-1 px-4">{player?.points}</td>
                <td className="py-1 px-4">{player?.multiplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
}

export default CurrentRound;