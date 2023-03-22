import Sidebar from "./Sidebar/Sidebar";
import Index from "./Index/Index";
import Mobile from "./components/Mobile";

function App() {
  return (
    <div className="flex h-screen">
      <aside className="hidden w-full min-w-[260px] max-w-[400px] border-r border-gray-300 sm:block">
        <Sidebar />
      </aside>
      <main className="w-full sm:flex-1">
        <Index />
        <Mobile />
      </main>
    </div>
  );
}

export default App;
