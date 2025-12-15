import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

function Select({ option, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="w-full mb-1 px-2">
          {label}
        </label>
      )}
      <select
        option={option}
        label={label}
        ref={ref}
        id={id}
        className={` bg-gray-200 px-4 py-2 border-2 text-gray-900 font-medium ${className}`}
      >
        {option?.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
