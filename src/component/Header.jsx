import React from 'react'
import { Logout, Container, } from './index'
import Logo from './Logo'
import { Link, useNavigate} from 'react-router-dom'
import {useSelector}  from 'react-redux'

function Header() {
  const authstatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate();

  const navIteam =[
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'signIn',
      slug: '/signIn',
      active: !authstatus,
    },
    {
      name: 'signUp',
      slug: '/signUp',
      active: !authstatus
    },
    {
      name: 'All Posts',
      slug: '/AllPosts',
      active: authstatus
    },
    {
      name: 'Add posts',
      slug: '/AddPosts',
      active: authstatus
    },

  ]
  return (

    <>
    <header className='py-3 shadow bg-gray-500'>
      <Container childern={
    
        <nav className='flex'>
          <div className='mr-4'>
        <Link to='/'>
       <div className='px-10'>
       <Logo/>
       </div>
        </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navIteam.map((iteam) =>
              iteam.active ? (
                <li key={iteam.name}>
                <button className='inline-block px-6 py-2 font-bold
                duration-200 hover:bg-slate-900  text-white rounded-2xl'
                onClick={() => navigate(iteam.slug)}
                >
                {iteam.name}</button>
                </li>
              ) :  null
              )}
              {authstatus && (
                <li>
                  <Logout/>
                </li>
              )}
          </ul>
        </nav>
        }>
      </Container>
    </header>
    </>
    
  )
}

export default Header
