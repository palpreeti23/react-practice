import React from "react";

function Button({
  children,
  type = "submit",
  bgColor = "blue",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-3 py-1 border m-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
