import * as React from "react"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const List = () => {

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

    return (
        <Layout>
            <Seo title="List" />
                <h1>Hello from List</h1>
                <ul>
                    {movie.movieList.map((mov, id) => (
                    <li key={id}>
                        <div>{mov.title}({mov.year})</div>
                        <div className="rate-row">
                        <span className="rate-text">{mov.rate}</span>
                        </div>
                    </li>
                    ))}
                </ul>
        </Layout>
    )
}

export default List