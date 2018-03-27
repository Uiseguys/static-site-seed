import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

const Index = ({i18n}) => (
  <div>
    <scb-alert type='primary'>I am a stencil alert</scb-alert>

    <div className='jumbotron'>
      <h1 className='display-4'>
        <Trans>Hello, world!</Trans>
      </h1>
      <p className='lead'>This is bootstrap.</p>

      <Link to={i18n.t`/about`}>About</Link>
    </div>
  </div>
)

export default withI18n()(Index)