import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    console.log(data)
    const articles = data.articles.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Artikel</h2>
                <h3>Siapa sih mereka??</h3>
                <div className={styles.projects}>
                    {articles.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key ={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.stack }</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Pengen kenalan sesama wota? Email { contact }</p>
            </div>
        </Layout>
    )
}


// export page query
export const query = graphql`
query ArticlePages {
    articles: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
  }  
`