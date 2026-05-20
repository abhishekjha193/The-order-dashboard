import { sidebarItems } from "../../data/mockData";

function Sidebar({ sidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`sidebar-icon ${item.active ? "active" : ""}`}
        >
          <i className={item.icon}></i>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
