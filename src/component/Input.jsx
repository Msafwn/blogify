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
        className="inline-block pb-2 pl-1 text-slate-300 font-medium text-sm">
        {label}
      </label>
      )}

      <input
        type={type}
        className={`w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border-2 border-slate-700 outline-none transition-all duration-300 placeholder-slate-500 focus:border-blue-500 focus:bg-slate-700/50 focus:shadow-lg focus:shadow-blue-500/20 hover:border-slate-600 ${className}`}
        ref={ref}
        {...Props}
        id={id}
      />
    </div>
  )
});

export default Input;
