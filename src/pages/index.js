import { graphql, Link } from 'gatsby'
import React from "react"
import Layout from '../components/Layout'
import styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer based in Cicurug</p>
          <Link className={styles.btn} to="/projects">My Project</Link>
        </div>
        <img src="/1.jpg" alt="banner" style={{ maxWidth: '100%' }} />
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  )
}


export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`