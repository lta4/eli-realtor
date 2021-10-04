import * as React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header.css"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>
const About = () => <p>About</p>
const Approach = () => <p>Approach</p>
const Video = () => <p>Video</p>
const Callback = () => <p>Callback</p>
const Case = () => <p>Case</p>
const Contact = () => <p>Contact</p>
const List = () => <p>List</p>
const Review = () => <p>Review</p>

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
        <Link id="aboutL" to="/account/about">About</Link>{" "}
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
      <h1>Hi, {user.name ? user.name : "friend"} ! Or should I say, potential new homeowner.</h1>
      <p>Welcome to Eli's page.</p>
      <ul>
        {movie.movieList.map(mov => (
          <li>
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

    // return (
    //     <>
    //         <nav>
    //             <Link to="/account/">Home</Link>{" "}
    //             <Link to="/account/settings/">Settings</Link>{" "}
    //             <Link to="/account/billing/">Billing</Link>{" "}
    //             <a href="#logout" onClick={e => {
    //                 logout() 
    //                 e.preventDefault()
    //             }}
    //             >
    //                 Log Out
    //             </a>
    //         </nav>
    //         <Router>
    //             <Home path="/account/" user={user} />
    //             <Settings path="/account/settings" />
    //             <Billing path="/account/billing" />
    //         </Router>
    //     </>
    // )
}

export default Account