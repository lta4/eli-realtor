import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
// import StarIcon from "../Icons/starIcon"

const IndexPage = () => {
  return (
    <h1>this is the index page</h1>
    
  )

  // const { movie } = useStaticQuery (
  //   graphql`
  //     query MyQuery {
  //       movie {
  //         movieList {
  //           title
  //           rate
  //           year
  //         }
  //       }
  //     }
  //   `
  // )
  // console.log(movie)
  // return (
  //   <Layout>
  //     <Seo title="Home" />
  //     <h1>Hello potential new home owners</h1>
  //     <p>Welcome to Eli's page.</p>
  //     <ul>
  //       {movie.movieList.map(mov => (
  //         <li>
  //           <div>{mov.title}({mov.year})</div>
  //           <div className="rate-row">
  //               {/* <StarIcon /> */}
  //             <span className="rate-text">{mov.rate}</span>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //     {/* <StaticImage
  //       src="../images/gatsby-astronaut.png"
  //       width={300}
  //       quality={95}
  //       formats={["auto", "webp", "avif"]}
  //       alt="A Gatsby astronaut"
  //       style={{ marginBottom: `1.45rem` }}
  //     /> */}
  //     <p>
  //       <Link to="/account">Go to your account</Link>
  //       <Link to="/page-2/">Go to page 2</Link> <br />
  //       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //     </p>
  //   </Layout>
  // )
}

export default IndexPage
