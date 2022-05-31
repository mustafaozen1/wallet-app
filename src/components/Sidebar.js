import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Profile">
        <img id="ProfilePhoto" src={require("../img/user.png")} />
        <h2 className="ProfileName">Osman Özüdoğru</h2>
      </div>

      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div>{" "}
              <div id="tittle">{val.tittle}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
