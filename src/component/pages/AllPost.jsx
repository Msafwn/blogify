import React,{useEffect, useState} from 'react'
import service from '../../Appwrite/config'
import {Container, PostCard} from '../index'

function AllPost() {
  const [posts, setposts] =  useState([])
  useEffect(() =>{},[])
  service.getPosts([]).then((Posts) => {
    if(Posts){
        setposts(Posts.documents)
    }
  })
  return (
    <div className='w-full py-12'>
      <Container childern={
        <div>
          <h1 className='text-4xl font-bold text-slate-100 mb-8'>All Posts</h1>
          {posts.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {posts.map((post) =>(
                  <div key={post.$id} className='transition-all duration-300 hover:-translate-y-2'>
                    <PostCard {...post} />
                  </div>
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center min-h-96 text-slate-400'>
              <p className='text-xl'>No posts available yet.</p>
            </div>
          )}
        </div>
      }></Container>
    </div>
  )
}

export default AllPost
