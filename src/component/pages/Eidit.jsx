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
    <div className='py-8'>
    <Container childern={
    <PostForm post={post}/>
    }>
    </Container> 
    </div>
  ) :null 
}

export default Eidit
