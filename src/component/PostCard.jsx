import React from 'react'
import service from '../Appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
   <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-200 rounded-lg p-4'>
    <div className='w-full justify-center mb-5 mt-5'>
    <img src={service.getfilepreview(featuredImage)} alt={title}
    className='rounded-xl p-2' />
    </div>
    <h2 className='text-xl font-bold'>
        {title}
    </h2>
    </div>
   </Link>
  )
}

export default PostCard
