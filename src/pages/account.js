import * as React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/header.css"

const Account = ({ siteTitle }) => {

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout>
      <Seo title="Home" />
      {siteTitle}
      <h1>Hi, {user.name ? user.name : "friend"}! Or should I say, potential new homeowner.</h1>
      <p>Welcome to Eli's page.</p>
      <p>
        <Link to="/account">Go to your account</Link>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default Account