import React from 'react'
import {PostForm as PostFormComponent , Container } from '../index'
function PostForm() {
  return (
   <Container childern={
     <div className='py-8'>
    <PostFormComponent/>
    </div>
    }></Container>
  )
}

export default PostForm
