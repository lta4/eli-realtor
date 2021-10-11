import * as React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/header.css"
import About from "../pages/about"
import Approach from "../pages/approach"
import Video from "../pages/video"
import List from "../pages/list"
import Case from "../pages/case"
import Review from "../pages/review"
import Contact from "../pages/contact"
import Home from "../pages/home"

const Account = ({ siteTitle }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    // <Layout>
      <>
      <Seo title="Home" />
      <nav>
            <Link to="/account/">Home</Link>{" "}
            <Link id="aboutL" to="/account/about/">About</Link>{" "}
            <Link id="approachL" to="/account/approach/">Our Approach</Link>{" "}
            <Link id="videoL" to="/account/video/">Videos</Link>{" "}
            <Link id="listL" to="/account/list/">Listings</Link>{" "}
            <Link id="caseL" to="/account/case/">Case Studies</Link>{" "}
            <Link id="reviewL" to="/account/review/">Reviews</Link>{" "}
            <Link id="contactL" to="/account/contact/">Contact</Link>{" "}
            <a href ="#logout" onClick={e => {
              logout() 
              e.preventDefault()
            }}
          >
            Log Out
          </a>
      </nav>
      {/* <h1>Hi, {user.name ? user.name : "friend"}! Or should I say, potential new homeowner.</h1>
      <p>Welcome to Eli's page.</p> */}
      <Router>
          <Home path="/account/" user={user} />
          <About path="/account/about" />
          <Approach path="/account/approach" />
          <Video path="/account/video" />
          <Case path="/account/case" />
          <Contact path="/account/contact" />
          <List path="/account/list" />
          <Review path="/account/review" />
      </Router>
      {/* <p>
        <Link to="/account">Go to your account</Link>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
      </>
    // </Layout>
  )
}

export default Account