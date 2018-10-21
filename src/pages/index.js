import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
      <div className="welcome-container">
          <span className="color-right" >H</span>
          <span className="halfStyle" data-content="E">E</span>
          <span className="color-left" >J</span>
          <span className="color-left">!</span>
      </div>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
