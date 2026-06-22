import React from 'react'
import {PostForm as PostFormComponent , Container } from '../index'
function PostForm() {
  return (
    <Container childern={
      <div className='py-12'>
        <h1 className='text-4xl font-bold text-slate-100 mb-8'>Create New Post</h1>
        <PostFormComponent/>
      </div>
    }></Container>
  )
}

export default PostForm
