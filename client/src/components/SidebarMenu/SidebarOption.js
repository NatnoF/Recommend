import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ active, text, Icon, to }) {
  return (
    <Link
      to={to}
      className={`sidebarOption ${active && "sidebarOption--active"}`}
    >
      <Icon />
      <h2>{text}</h2>
    </Link>
  );
}

export default SidebarOption;
