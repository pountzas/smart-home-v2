import Alerts from "@/public/icons/Alerts";
import Mail from "@/public/icons/Mail";
import Notifications from "@/public/icons/Notifications";
import SmartHome from "@/public/icons/SmartHome";
import User from "@/public/icons/User";
import React from "react";
import SearchComponent from "./reusables/SearchComponent";
const iconItems = [
  {
    name: "notifications",
    icon: <Notifications />,
    color: "black",
    colorDark: "white",
    onclick: null
  },
  {
    name: "mail",
    icon: <Mail />,
    color: "black",
    colorDark: "white",
    onclick: null
  },
  {
    name: "alerts",
    icon: <Alerts />,
    color: "black",
    colorDark: "white",
    onclick: null
  }
];

function Header() {
  return (
    <div className="flex items-center justify-between bg-primary">
      <SmartHome />
      <div className="flex items-center space-x-2">
        {iconItems.map((item) => (
          <div key={item.name}>
            {/* <span>{item.name}</span> */}
            <span>{item.icon}</span>
          </div>
        ))}
        {/* <User /> */}
      </div>
    </div>
  );
}

export default Header;
