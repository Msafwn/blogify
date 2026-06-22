import React,{useEffect, useState} from 'react'
import service from '../../Appwrite/config'
import {Button, Container, PostCard} from '../index'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setposts] = useState([])

  

    useEffect(() => {
        service.getPosts().then((Posts) => {
            if(Posts){
                setposts(Posts.documents)
            }
          })
        
    },[])
  if (posts.length === 0) {
    return(
        <div className='w-full py-16 text-center'>
          <Container childern={
              <div className='flex flex-col items-center justify-center min-h-96'>
                <div className='mb-8'>
                  <h1 className='text-4xl font-bold text-slate-100 mb-4'>
                    Welcome to Blogify
                  </h1>
                  <p className='text-slate-400 text-lg mb-8'>
                    Discover amazing stories and insights
                  </p>
                </div>
                <Link to='/signIn'>
                  <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95'>
                    Sign In to Read Posts
                  </button>
                </Link>
              </div>
          }>
          </Container>
        </div>
    )
  }
  return (
    <div className='w-full py-12'>
      <Container childern={
        <div>
          <h1 className='text-4xl font-bold text-slate-100 mb-8'>Featured Posts</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
              posts.map((post) => (
                <div key={post.$id} className='transition-all duration-300 hover:-translate-y-2'>
                  <PostCard {...post}/>
                </div>
              ))
            }
          </div>
        </div>
      }>
      </Container>
    </div>
  )
}

export default Home
