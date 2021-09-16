import React from "react";
import Layout from "../components/layout";

export default function blogPost (props) {
    console.log(props)
    let base = props.pageContext.blog.node
    return (
        <Layout>
            <h1>{base.frontmatter.title}</h1>
            <h2>{base.frontmatter.date}</h2>
            <p
                key = {`p`}
                id = "___gatsby"
                dangerouslySetInnerHTML = {{ __html: props.pageContext.blog.node.html }}
            />
            <p>{base.frontmatter.author}</p>
        </Layout>
    )
}