import React, { useState } from 'react'
import service from '../Appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageUrl = featuredImage ? service.getFileDownload(featuredImage) : null

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 border border-slate-700/50 hover:border-blue-500/50 group'>
        <div className='relative w-full h-48 mb-4 mt-2 overflow-hidden rounded-lg bg-slate-800/80'>
          {/* Skeleton Shimmer while image is loading */}
          {!imageLoaded && !imageError && imageUrl && (
            <div className='absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center'>
              <svg className='w-8 h-8 text-slate-500 animate-spin' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8H4z'></path>
              </svg>
            </div>
          )}

          {imageError || !imageUrl ? (
            <div className='w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-500 gap-2 border border-slate-700/40 rounded-lg'>
              <svg className='w-10 h-10 opacity-40' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
              </svg>
              <span className='text-xs font-medium tracking-wide'>No Image Available</span>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={title}
              loading='lazy'
              decoding='async'
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`rounded-lg w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
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
