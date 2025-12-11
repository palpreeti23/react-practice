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
      className={`px-3 py-2 border-2 m-2 ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
