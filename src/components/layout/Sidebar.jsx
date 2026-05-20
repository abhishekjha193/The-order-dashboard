const sidebarItems = [
  {
    icon: "ri-stack-line",
    active: true,
  },

  {
    icon: "ri-shopping-bag-line",
  },

  {
    icon: "ri-truck-line",
  },

  {
    icon: "ri-store-2-line",
  },

  {
    icon: "ri-home-office-line",
  },

  {
    icon: "ri-building-line",
  },

  {
    icon: "ri-links-line",
  },
];

function Sidebar({ sidebarOpen }) {
  return (
    <aside
      className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}
    >

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