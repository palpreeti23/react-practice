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
      className={`py-2 px-3 border rounded-lg ${bgColor}${className}${textColor}`}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
