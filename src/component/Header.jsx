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
    <header className='py-4 shadow-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50'>
      <Container childern={
        <nav className='flex items-center'>
          <div className='mr-4 hover:opacity-80 transition-opacity duration-300'>
            <Link to='/'>
              <div className='px-2'>
                <Logo/>
              </div>
            </Link>
          </div>
          <ul className='flex ml-auto items-center gap-2'>
            {
              navIteam.map((iteam) =>
              iteam.active ? (
                <li key={iteam.name}>
                  <button 
                    className='inline-block px-5 py-2.5 font-semibold text-slate-100 rounded-lg transition-all duration-300 hover:bg-slate-700/60 hover:text-blue-300 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50'
                    onClick={() => navigate(iteam.slug)}
                  >
                    {iteam.name}
                  </button>
                </li>
              ) : null
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
