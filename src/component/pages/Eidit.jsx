import React,{useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Container, PostForm} from  '../index'
import service from '../../Appwrite/config'
function Eidit() {
   const [post, setpost] = useState(null)
   const {slug} = useParams();
   const navigate = useNavigate();
   useEffect(() =>{
    if (slug){
    service.getPost(slug).then((post) =>{
        if (post) {
            setpost(post);
        }
    })
    }else{
        navigate('/');
    }
   },[slug, navigate])
  return post ? (
    <div className='py-12'>
      <Container childern={
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl font-bold text-slate-100 mb-8'>Edit Post</h1>
          <PostForm post={post}/>
        </div>
      }>
      </Container> 
    </div>
  ) : null 
}

export default Eidit
