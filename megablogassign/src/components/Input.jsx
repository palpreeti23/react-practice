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
        className={`w-full py-2 px-3 bg-gray-300 border rounded-lg ${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
