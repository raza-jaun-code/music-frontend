import React from "react";

const TextInput = ({ id, placeholder, value, setValue , className, widthFull }) => {
  return (
    <div className={`${widthFull?"w-full":"w-1/2"} flex flex-col justify-center gap-3`}>
      <label htmlFor={id} className={`${className} text-sm font-bold`}>
        {placeholder}
      </label>
      <input
        type="text"
        name={id}
        autoComplete='true'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        id={id}
        placeholder={placeholder}
        className="border border-gray-300 px-5 py-3 rounded-lg text-sm"
      />
    </div>
  );
};

export default TextInput;
