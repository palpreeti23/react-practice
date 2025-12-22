import React, { forwardRef } from "react";

import { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full flex flex-col  items-center">
      {label && (
        <label className="text-black mb-1 " htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-3/4 px-3 py-2 bg-gray-200 rounded-xl border border-gray-800  mb-3 ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
}

export default forwardRef(Input);
