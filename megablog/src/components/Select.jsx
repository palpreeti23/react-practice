import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

function Select({ option, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="flex flex-col items-center">
      {label && (
        <label htmlFor={id} className="w-full mb-1 px-2 ">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        ref={ref}
        className={` bg-gray-200 px-4 py-2 border-2 text-gray-900 font-medium w-5/7 mb-8 ${className}`}
      >
        {option?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
