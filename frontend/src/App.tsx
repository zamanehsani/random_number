import './App.css'
import InputCard from './components/user_input';
import GraphWindow from './components/graph';
import ChatWindow from './components/chat';
import RankingWindow from './components/ranking';

function App() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-300 p-4">
      <main className="w-full max-w-screen-xl flex flex-col gap-2">
        <div className="flex flex-wrap w-full">
          <section className="w-full md:w-1/3 p-2">
            <InputCard />
          </section>
          <section className="w-full md:w-2/3 p-2">
            <GraphWindow />
          </section>
        </div>
        <div className="flex flex-wrap w-full">
          <section className="w-full md:w-1/2 p-2">
            <RankingWindow />
          </section>
          <section className="w-full md:w-1/2 p-2">
            <ChatWindow />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
