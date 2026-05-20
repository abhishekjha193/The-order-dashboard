function Header({ toggleSidebar }) {
  return (
    <header className="header">

      <div className="header-left">

        <div
          className="hamburger-menu"
          onClick={toggleSidebar}
        >
          <i className="ri-menu-line"></i>
        </div>


        <div className="menu-icon">
          <i className="ri-apps-2-line"></i>
        </div>

        <h2>Aludecor</h2>

      </div>



      <div className="header-right">

        <div className="search-box">
          <i className="ri-search-line"></i>
        </div>

        <div className="divider"></div>

        <div className="icon-box">
          <i className="ri-notification-3-line"></i>
        </div>

        <div className="icon-box">
          <i className="ri-calendar-line"></i>
        </div>

        <div className="icon-box">
          <i className="ri-settings-3-line"></i>
        </div>

        <div className="divider"></div>

        <div className="profile-avatar">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="profile"
          />

        </div>

      </div>

    </header>
  );
}

export default Header;