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
    {label && <label htmlFor={id} className='text-white '></label>}
        <select
         {...Props}
         id={id}
         ref={ref}
         className={`px-3 py-2
        rounded-lg
        bg-white
        text-black 
        outline-none
       focus:bg-gray-100 
        duration-200 
        border-gray-200 
        w-full ${className}` }
         >
        {
            options?.map((option) => (
                <option key={option}>
                {option}
                </option>
            ))}
        </select>
      
    </div>
  )
}

export default React.forwardRef(SelectInput)
