import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#f8f9fa',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <scb-navbar size='lg' navbarcolor='light' bgcolor='light' placement=''>
        <Link slot='slot-navbar-brand-left' className='navbar-brand' to='/'>
          Home
        </Link>

        <ul slot='slot-navbar-content' className='navbar-nav mr-auto'>
          <li className='nav-item active' />
          <li className='nav-item'>
            <Link className='nav-link' to='/about/'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/dashboard/'>
              Dashboard
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Todos
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <Link className='dropdown-item' to='/todos-static/'>
                Static
              </Link>
              <Link className='dropdown-item' to='/todos-dynamic/'>
                Dynamic
              </Link>
              <div className='dropdown-divider' />
              <Link className='dropdown-item' to='/404/'>
                404
              </Link>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>
              Disabled
            </a>
          </li>
        </ul>
      </scb-navbar>
    </div>
  </div>
)

export default Header
