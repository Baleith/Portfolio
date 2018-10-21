import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Right } from './nav/right'
import { Left } from './nav/left'
import { Top } from './nav/top'
import { Bottom } from './nav/bottom'
import { Content } from './content'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="app">
            <Top />
            <Left />

            <Content children={children} />

            <Right />
            <Bottom />
        </div>
      </>
    )}
  />
)


export default Layout
