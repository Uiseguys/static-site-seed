import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'
const Lang = ({ lang, onClick, selected }) => (
  <a style={{ color: '#666', marginRight: '10px', textDecoration: selected ? 'underline' : 'none', cursor: 'pointer' }} onClick={onClick}>
    {lang}
  </a>
)
const Header = ({i18n, onLangClick, lang}) => (
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
        <Link slot='slot-navbar-brand-left' className='navbar-brand' to={i18n.t`/`}>
          <Trans>Home</Trans>
        </Link>

        <ul slot='slot-navbar-content' className='navbar-nav'>
          <li className='nav-item active' />
          <li className='nav-item'>
            <Link className='nav-link' to={i18n.t`/about`}>
              <Trans>About</Trans>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={i18n.t`/dashboard`}>
              <Trans>Dashboard</Trans>
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
              <Trans>Todos</Trans>
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <Link className='dropdown-item' to={i18n.t`/todos-static`}>
                Static
              </Link>
              <Link className='dropdown-item' to={i18n.t`/todos-dynamic`}>
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
              <Trans>Disabled</Trans>
            </a>
          </li>
        </ul>
        <div slot='slot-navbar-content' className='mr-0 ml-auto'>
          <Lang lang='en' onClick={(e) => onLangClick('en')} selected={lang == 'en'} />
          <Lang lang='ro' onClick={(e) => onLangClick('ro')} selected={lang == 'ro'} />
        </div>
      </scb-navbar>
    </div>
  </div>
)

export default withI18n()(Header)
