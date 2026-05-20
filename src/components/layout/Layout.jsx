import Header from "./Header";
import Sidebar from "./Sidebar";

import "../../styles/layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header toggleSidebar={toggleSidebar} />

      <div className="layout-body">

        <Sidebar sidebarOpen={sidebarOpen} />


        <main className="layout-content">{children}</main>
        
      </div>
    </div>
  );
}

export default Layout;
