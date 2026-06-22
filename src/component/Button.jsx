import React from 'react'

function Button({
    childern,
    type = 'button',
    bgColor = 'bg-gradient-to-r from-blue-600 to-blue-700',
    textColor = 'text-white',
    className = '',
    variant = 'primary',
    ...Props
}) {
  const baseStyles = 'px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
  
  const variants = {
    primary: `${bgColor} ${textColor} hover:shadow-lg hover:shadow-blue-500/50 shadow-md`,
    secondary: 'bg-slate-700 text-white hover:bg-slate-600 shadow-md hover:shadow-lg',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/50 shadow-md',
    ghost: 'bg-transparent text-blue-400 hover:bg-slate-800/50 hover:text-blue-300'
  }
  
  return (
    <button
    type={type}
    className={`${baseStyles} ${variants[variant]} ${className}`}
    {...Props}>
      {childern}
    </button>
  )
}

export default Button
