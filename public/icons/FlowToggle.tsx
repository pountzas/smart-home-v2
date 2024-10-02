import React from "react";

function FlowToggle({ size = 12, fill = "#373D42" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33333 8.66667L6.66667 6V3.88C7.44 3.6 8 2.86667 8 2C8 0.893333 7.10667 0 6 0C4.89333 0 4 0.893333 4 2C4 2.86667 4.56 3.6 5.33333 3.88V6L2.66667 8.66667H0V12H3.33333V9.96667L6 7.16667L8.66667 9.96667V12H12V8.66667H9.33333Z"
        fill={fill}
      />
    </svg>
  );
}

export default FlowToggle;
