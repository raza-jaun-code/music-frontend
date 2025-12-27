import { React, useState } from "react";

const SearchInput = ({ placeholder, id, value, setValue , onKeyDown }) => {
  const [selectState, setSelectState] = useState(false);

  return (
    <input
      type="search"
      name={id}
      id={id}
      placeholder={placeholder}
      className={`rounded-full py-4 px-8 text-md font-light outline-none ${
        selectState ? "outline-4 outline-gray-400" : "outline-none"
      }`}
      onFocus={() => {
        setSelectState(true);
      }}
      onBlur={() => {
        setSelectState(false);
      }}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }
      }
    onKeyDown={(e)=>{
      if(e.key==='Enter'){
        onKeyDown();
      }
    }}/>
  );
};

export default SearchInput;
