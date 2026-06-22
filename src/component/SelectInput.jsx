import React,{useId} from 'react'

function SelectInput({
    options = [], 
    label,
    className = '',
    ...Props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='inline-block pb-2 pl-1 text-slate-300 font-medium text-sm'>{label}</label>}
      <select
        {...Props}
        id={id}
        ref={ref}
        className={`w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border-2 border-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-slate-700/50 focus:shadow-lg focus:shadow-blue-500/20 hover:border-slate-600 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} className='bg-slate-800 text-slate-100'>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(SelectInput)
