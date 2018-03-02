import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div>
    <h1>Hi!</h1>
    <p>
      <Link to='/dashboard/'>Dashboard</Link>
    </p>
    <p>
      <Link to='/about/'>About</Link>
    </p>
  </div>
)
