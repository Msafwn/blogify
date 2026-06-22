import React, { useState } from 'react'
import service from '../Appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  const [imageError, setImageError] = useState(false)
  const imageUrl = featuredImage ? service.getFileDownload(featuredImage) : null

  return (
   <Link to={`/post/${$id}`}>
    <div className='w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 border border-slate-700/50 hover:border-blue-500/50 group'>
      <div className='w-full justify-center mb-4 mt-4 overflow-hidden rounded-lg bg-slate-700/50'>
        {imageError || !imageUrl ? (
          <div className='w-full h-48 bg-slate-700 flex items-center justify-center text-slate-400'>
            <span>No Image Available</span>
          </div>
        ) : (
          <img 
            src={imageUrl}
            alt={title}
            className='rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <h2 className='text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2'>
        {title}
      </h2>
    </div>
   </Link>
  )
}

export default PostCard
