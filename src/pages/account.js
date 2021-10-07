import * as React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import About from "./about"
import Approach from "./approach"
import Video from "./video"
import Case from "./case"
import Contact from "./contact"
import List from "./list"
import Review from "./review"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Callback = () => <p>Callback</p>


const Account = () => {

    const { movie } = useStaticQuery (
        graphql`
          query MyQuery {
            movie {
              movieList {
                title
                rate
                year
              }
            }
          }
        `
      )
    console.log("movie", movie)

    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()

  return (
    <Layout>
      <Seo title="Home" />
      <nav>
        <p className="headerLinks">
        <Link id="aboutL" to="/account/about/">About</Link>{" "}
        <Link id="approachL" to="/account/approach/">Our Approach</Link>{" "}
        <Link id="videoL" to="/account/video/">Videos</Link>{" "}
        <Link id="listL" to="/account/list/">Listings</Link>{" "}
        <Link id="caseL" to="/account/case/">Case Studies</Link>{" "}
        <Link id="reviewL" to="/account/review/">Reviews</Link>{" "}
        <Link id="contactL" to="/account/contact/">Contact</Link>{" "}
        </p>
      </nav>
      <Router>
          <About path="/account/about" />
          <Approach path="/account/approach" />
          <Video path="/account/video" />
          <Callback path="/account/callback" />
          <Case path="/account/case" />
          <Contact path="/account/contact" />
          <List path="/account/list" />
          <Review path="/account/review" />
      </Router>
      {/* <h1>Hi, {user.name ? user.name : "friend"} ! Or should I say, potential new homeowner.</h1> */}
      <p>Welcome to Eli's page.</p>
      <ul>
        {movie.movieList.map((mov, id) => (
          <li key={id}>
            <div>{mov.title}({mov.year})</div>
            <div className="rate-row">
                {/* <StarIcon /> */}
              <span className="rate-text">{mov.rate}</span>
            </div>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/account">Go to your account</Link>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default Account