import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" 
          style={{ color: `white`,
            textDecoration: `none`,
          }}>
          {siteTitle}
            <div>
              <p>
                <Link to="/about/">About</Link>
                <Link to="/approach/">Our Approach</Link>
                <Link to="/video/">Videos</Link>
                <Link to="/list/">Listings</Link>
                <Link to="/case/">Case Studies</Link>
                <Link to="/review/">Reviews</Link>
                <Link to="/contact/">Contact</Link>
                <Link to="/404/">404</Link>
              </p>
            </div>
        </Link>
      </h1>
    </div>
  </header>
)

console.log(Link)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
