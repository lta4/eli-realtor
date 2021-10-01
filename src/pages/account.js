import * as React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, isAuthenticated, getProfile } from "../utils/auth"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()

    return (
        <>
            <nav>
                <Link to="/account/">Home</Link>{" "}
                <Link to="/account/settings/">Settings</Link>{" "}
                <Link to="/account/billing/">Billing</Link>{" "}
            </nav>
            <Router>
                <Home path="/account/" user={user} />
                <Settings path="/account/settings" />
                <Billing path="/account/billing" />
            </Router>
        </>
    )
}

export default Account