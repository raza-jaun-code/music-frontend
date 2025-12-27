import React from "react";

const PasswordInput = ({ id, placeholder, value, setValue }) => {
  return (
    <div className="w-1/2 flex flex-col justify-center gap-3">
      <label htmlFor={id} className="text-sm font-bold">
        {placeholder}
      </label>
      <input
        type="password"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name={id}
        id={id}
        placeholder={placeholder}
        className="border border-gray-300 px-5 py-3 rounded-lg text-sm"
      />
    </div>
  );
};

export default PasswordInput;
