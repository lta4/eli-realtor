import * as React from "react"
import { getProfile } from "../utils/auth"

const Home = () => {

    const user = getProfile()

    return (
        <>
            <h1>Hi, {user.name ? user.name : "friend"}! Or should I say... new potential homeowner.</h1>
            <p>Welcome to Eli's page.</p>
        </>
    )
}

export default Home