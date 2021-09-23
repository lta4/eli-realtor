import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lavender`,
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
          style={{ color: `black`,
            textDecoration: `none`,
          }}>
          {siteTitle}
            <div>
              <p className="headerLinks">
                <Link id="aboutL" to="/about/">About</Link>
                <Link id="approachL" to="/approach/">Our Approach</Link>
                <Link id="videoL" to="/video/">Videos</Link>
                <Link id="listL" to="/list/">Listings</Link>
                <Link id="caseL" to="/case/">Case Studies</Link>
                <Link id="reviewL" to="/review/">Reviews</Link>
                <Link id="contactL" to="/contact/">Contact</Link>
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
