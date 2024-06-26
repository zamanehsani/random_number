import React, { useState, useEffect, useRef } from 'react';
import socketService from '../../utils/socket';
import { ChatEvent, RootState } from '../../utils/types';
import { useSelector } from 'react-redux';

const ChatWindow:React.FC = () => {
  const auth = useSelector((state:RootState)=>state.auth);
  const [chatMessages, setChatMessages] = useState<ChatEvent[]>([]);

  useEffect(() => {
      socketService.connect(import.meta.env.VITE_BASE_URL);
      socketService.on('chat', (message: {body:ChatEvent}) => {
        setChatMessages(prevMessages => [...prevMessages, message.body]);
      });

    return () => { socketService.disconnect();};
  }, []);


  const [input, setInput] = useState<string>('');
  const messageEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    // trim and send to the server...
    if (input.trim()) {
      const newMessage = {
        user_name: auth.user_name,
        message: input
      };

      const chatMessage: ChatEvent = { ...newMessage };
      socketService.emit('chat', chatMessage);
      setInput('');
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  return (
    <div className='flex flex-col w-full justify-center p-2'>
      <div className=" max-h-86 h-86 bg-gray-100 rounded-lg p-4 ">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-indigo-600">
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
          </svg>
          <h1 className="text-lg font-semibold mb-1 pl-2">Chat</h1>
        </div>
        <div className="flex-1 overflow-auto max-h-48 min-h-48 bg-white p-4 rounded-lg ">
          <div className="space-y-1">
            {chatMessages.map((msg, index) => (
              <div key={index} className="flex flex-row">
                <span className="font-semibold text-indigo-700 ">{msg.user_name} : </span>
                <span className="text-gray-600"> { msg.message}</span>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        </div>
        <div className="flex items-center mt-4 gap-x-2">
          <input type="text" value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-lg p-2"
            placeholder="Type your message..."/>

          <button onClick={handleSend}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
            Send
          </button>
        </div>
      </div>

    </div>
  );
};

export default ChatWindow;
