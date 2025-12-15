import React from "react";

function Container({ children }) {
  return (
    <div className="w-auto max-h-screen py-2 px-4 rounded-lg my-4">
      {children}
    </div>
  );
}

export default Container;
