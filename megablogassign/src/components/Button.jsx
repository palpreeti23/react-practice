import React, { forwardRef } from "react";

function Button(
  {
    children,
    type = "submit",
    bgColor = "bg-blue-500",
    textColor = "text-black",
    className = "",
    ...props
  },
  ref
) {
  return (
    <button
      type={type}
      className={`px-3 py-1 border m-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
