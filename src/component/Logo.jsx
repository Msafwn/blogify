import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex items-center'>
      <h2 className='font-bold text-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-500 transition-all duration-300'>Blogify</h2>
    </div>
  )
}

export default Logo
