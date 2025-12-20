import React from "react";
import { useId } from "react";
import { forwardRef } from "react";

function Input({ label, type, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="text-black px-2 font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-3/4 px-3 py-2 bg-gray-200 rounded-xl border border-gray-800  mb-3 ${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
