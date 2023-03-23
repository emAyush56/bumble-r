import Sidebar from "./Sidebar/Sidebar";
import Index from "./Index/Index";
import Mobile from "./components/Mobile";
import NotFound from "./components/NotFound";
import SidebarProfile from "./SidebarProfile/SidebarProfile";
import EditProfile from "./Profile/EditProfile/EditProfile";
import Settings from "./Profile/Settings/Settings";
import Faq from "./Profile/Faq/Faq";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Mobile />
      <aside className="hidden w-full min-w-[260px] max-w-[400px] border-r border-gray-300 sm:block">
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/edit-profile" element={<SidebarProfile />} />
          <Route path="/settings" element={<SidebarProfile />} />
          <Route path="/faq" element={<SidebarProfile />} />
        </Routes>
      </aside>
      <main className="hidden w-full sm:block sm:flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
