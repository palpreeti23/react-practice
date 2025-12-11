import React, { forwardRef } from "react";
import { ForwardedRef } from "react";
import { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="text-black mb-2 px-4" htmlFor="id">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full py-4 px-3 m-3 bg-gray-200 rounded-xl border-2 border-gray-800 ${className}`}
        {...props}
        ref={ref}
        id="id"
      />
    </div>
  );
}

export default forwardRef(Input);
