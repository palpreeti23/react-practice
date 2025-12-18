import React from "react";

function Select({ option, label, className = "", ...props }) {
  return (
    <div>
      {label && <label className="px-3 text-black my-1 ">{label}</label>}
      <select className="w-2/3 bg-gray-200 px-3 py-2 border rounded-lg text-black">
        {option?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
