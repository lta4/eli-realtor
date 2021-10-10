import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Router } from "@reach/router"
// import Account from "../pages/account"
// import About from "../pages/about"
// import Approach from "../pages/approach"
// import Video from "../pages/video"
// import Case from "../pages/case"
// import Contact from "../pages/contact"
// import List from "../pages/list"
// import Review from "../pages/review"
// import StarIcon from "../Icons/starIcon"

const IndexPage = () => (
    <Layout>
      <Seo title="Index"/>
      {/* <Router>
          <Account path="/account/about" page={About} />
          <Approach path="/account/approach" pages={Approach} />
          <Video path="/account/video" pages={Video} />
          <Case path="/account/case" pages={Case} />
          <Contact path="/account/contact" pages={Contact} />
          <List path="/account/list" pages={List} />
          <Review path="/account/review" pages={Review} />
      </Router> */}
    </Layout>
    
  )

export default IndexPage
