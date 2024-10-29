import React from 'react'

function Button({
    childern,
    type = 'button',
    bgColor ='bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...Props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg hover:bg-blue-800 ${bgColor} ${textColor} ${className}`} {...Props}>
    {childern}</button>
    
  )
}

export default Button
