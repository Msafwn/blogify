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
    <div className='w-full py-8'>
    <Container childern={
    <div className='flex flex-wrap'>
    {posts.map((post) =>(
        <div key={posts.$id} className='p-2 w-1/4 '>
        <PostCard {...post} />
        </div>
    ))}
    </div>
    }></Container>
    </div>
  )
}

export default AllPost
