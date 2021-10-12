import * as React from "react"
import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => {

    const user = getProfile()

    return (
        <Layout>
            <Seo title="Home" />
                <h1>Hi, {user.name ? user.name : "friend"}! Or should I say... new potential homeowner.</h1>
                <p>Welcome to Eli's page.</p>
        </Layout>
    )
}

export default Home