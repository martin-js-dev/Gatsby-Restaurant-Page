import * as React from "react"
import Layout from "../components/layout";
import heroimg from "../images/hero.jpg";


const IndexPage = () => {
  return (
    <Layout>
      

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-2/3 mx-auto mb-8 rounded-md"
          src={heroimg}
        />

        
      </section>
    </Layout>
  )
}

export default IndexPage
