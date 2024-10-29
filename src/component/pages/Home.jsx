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
        <div className='w-full py-8 text-center text-emerald-50 mt-48 mb-10'>
          <Container childern={
              <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                    <Link to='/SignIn'>
                    <h1 className='text-2xl font-bold hover:text-gray-600'>
                    please login to read posts
                    </h1>
                    </Link>
                   
                </div>
                </div>
          }>
              
          </Container>
          
        </div>

    )
    
  }
  return (
    <div className='w-full py-8'>
    <Container childern={
    <div className='flex flex-wrap'>
    {
       
        posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
            <PostCard {...post}/>

            </div>
        ))
    }
    </div>
    }>
    </Container>
    </div>
  )
}

export default Home
