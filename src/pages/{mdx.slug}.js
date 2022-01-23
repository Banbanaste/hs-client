import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Page = ({ data }) => {

    console.log("data", data)

    const siteLinksArray = data.allMdx.nodes

    const heroImg = getImage(data.mdx.frontmatter.heroImg)

    return (
        <div className='w-container h-screen mx-auto px-8 relative flex justify-between font-hs-mono'>
            <div className='w-118 mt-48'>
                <h1 className='text-6xl font-hs-mono m-0'>{data.mdx.frontmatter.pageTitle} <br/> Hacker Sunday</h1>
                <p className='text-slate-400'>{data.mdx.frontmatter.subTitle}</p>
                <h2 className='font-hs-mono capitalize m-0 mb-4'>{data.mdx.frontmatter.title}</h2>
                {data.mdx.frontmatter.title !== "links" &&
                    <>
                        <p className='mb-8'>{data.mdx.frontmatter.body}</p>
                    </>
                }
                {siteLinksArray.map(link => link.slug !== data.mdx.frontmatter.title && <p className='m-0 mb-4 capitalize text-blue-700'><Link to={`/${link.slug}`}>{link.slug}</Link></p>)}

            </div>
            <div className='w-104 mt-72 relative flex justify-center	'> 
            <div className='w-56 absolute absolute -translate-y-32 z-10'><StaticImage className='animate-spin-slow' src="../images/circular_text.webp" alt="circular text" /></div> 
            <div className='w-104 absolute top-0'><GatsbyImage image={heroImg} alt="hero images"/></div>
            </div>
        </div>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        pageTitle
        subTitle
        body
        heroImg{
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMdx {
        nodes {
          slug
        }
    }
  }
`

export default Page