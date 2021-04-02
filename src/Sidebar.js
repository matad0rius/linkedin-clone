import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://image.freepik.com/vector-gratis/fondo-remolino-colores-vivos-arco-iris-girando-centro-ilustracion_175838-855.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>aKa Godas</h2>
        <h4>akagodas@godas.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,545</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,442</p>
        </div>
        <div className="sidebar__stat"></div>
      </div>

      <div className="sidebar__botton">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
