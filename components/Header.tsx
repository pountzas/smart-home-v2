import SmartHome from "@/public/icons/SmartHome";
import React from "react";
const iconItems = [
  {
    name: "notifications",
    icon: "notifications",
    color: "black",
    colorDark: "white"
  },
  {
    name: "mail",
    icon: "mail",
    color: "black",
    colorDark: "white"
  },
  {
    name: "alerts",
    icon: "alerts",
    color: "black",
    colorDark: "white"
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
