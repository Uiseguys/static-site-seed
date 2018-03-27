import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

const Dashboard = ({ i18n }) => (
  <div>
    <Trans render='h1'>Dashboard</Trans>
    <Trans render='p' id='lorem' />
    <Link to={i18n.t`/`}>
      <Trans>Go to homepage</Trans>
    </Link>
  </div>
)

export default withI18n()(Dashboard)
