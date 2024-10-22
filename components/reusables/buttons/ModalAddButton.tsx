import Plus from "@/public/icons/Plus";
import React from "react";

function ModalAddButton() {
  return (
    <button
      className={`w-[40px] lg:w-[86px] h-[40px] rounded-lg bg-buttonsPrimary p-2 flex items-center space-x-2 justify-center`}
      type="button"
    >
      <Plus />
      <p className="hidden lg:block">Add</p>
    </button>
  );
}

export default ModalAddButton;
