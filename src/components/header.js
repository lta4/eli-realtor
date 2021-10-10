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
        <Link to="/account" 
          style={{ color: `black`,
            textDecoration: `none`,
          }}>
          {siteTitle}
          <nav>
            <p className="headerLinks">
            {/* <Link id="aboutL" to="/account/about/">About</Link>{" "}
            <Link id="approachL" to="/account/approach/">Our Approach</Link>{" "}
            <Link id="videoL" to="/account/video/">Videos</Link>{" "}
            <Link id="listL" to="/account/list/">Listings</Link>{" "}
            <Link id="caseL" to="/account/case/">Case Studies</Link>{" "}
            <Link id="reviewL" to="/account/review/">Reviews</Link>{" "}
            <Link id="contactL" to="/account/contact/">Contact</Link>{" "} */}
            {/* <a href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
            >
              Log Out
            </a> */}
            </p>
          </nav>
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
