import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Contact = () => (
    <Layout>
        <Seo title="Contact" />
            <h1>Get in touch with Eli'</h1>
            <form method="post" action="#">
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </form>
    </Layout>
)

export default Contact