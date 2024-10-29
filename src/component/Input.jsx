import React from "react";
import { useId } from "react";

const Input = React.forwardRef(function Input(
  { label = '',
    type = "text", 
    className = "",
    ...Props 
},ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (<label 
      htmlFor={id} 
        className="inline-block
        pb-1 pl-1 text-slate-950">
     {label}
    </label>
      )}

      <input
     
    type={type}
    className={` px-3 py-2
        rounded-lg
        bg-white shadow-lg
        text-black 
        outline-none
       focus:bg-gray-100 
        duration-200 
        border-gray-200 
        w-full 
        ${className}`}
        ref={ref}
        {...Props}
        id={id}
      />
    </div>
  )
});

export default Input;
