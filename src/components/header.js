import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3498db`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.75rem 0.75rem`,
        display: `flex`,
        justifyItems: `space-between`,
        alignItems: `left`,
      }}
    >
      <Link to="/">
        <StaticImage
          src="../images/thunderbots-logo-complex-white.PNG"
          formats={['auto']}
          alt='Thunderbots Logo'
          loading='eager'
        />
      </Link>
    </div>
    <div
      style={{
        margin: `0 auto`,
        padding: `0.75rem 0.75 rem`,
        display: `flex`,
        justifyItems: `space-between`,
        alignItems: `right`,
      }}
    >
      <h1 style={{ margin: 0, flex: 1}}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/page-2"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Page 2
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
