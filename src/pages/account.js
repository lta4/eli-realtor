import * as React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

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