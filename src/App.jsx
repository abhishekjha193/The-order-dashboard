import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Header setSidebarOpen={setSidebarOpen} />

      <div className="main-layout">
        <Sidebar sidebarOpen={sidebarOpen} />

        <Dashboard />
      </div>
    </div>
  );
}

export default App;
