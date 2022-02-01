/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
              menuLinks {
                name
                link
              }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'Thunderbots 5604'}
          meta={[
            {name:'description', content:'Mountain View\'s FTC robotics team\'s website'},
          ]}
        >
        </Helmet>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 0.5rem 0.5rem`,
            }}
          >
            {children}
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            , Website by Dao Zhu
          </footer>
        </div>
      </React.Fragment>
    )}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
