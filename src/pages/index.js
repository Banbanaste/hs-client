import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div className='container h-screen max-h-screen mx-auto relative lg:flex lg:justify-center font-hs-mono overflow-hidden'>
      <div className='md:w-118 mt-32 mr-16 z-50 relative ml-6 md:ml-0'>
      <div className='lg:hidden w-56 absolute right-0 -translate-y-64 -translate-x-20'><StaticImage className='animate-spin-slow' src="../images/circular_text.webp" alt="circular text" /></div>
        <h1 className='md:text-6xl font-hs-mono m-0'>Welcome to,<br /> Hacker Sunday</h1>
        <p className='text-slate-400'>Remote hackathon every Sunday</p>
        <h2 className='font-hs-mono capitalize m-0 mb-4'>About</h2>

        <div className='mb-8 text-sm'>
          <p>Founded in 2016, we are a collective of hackers who host a weekly hack-a-thon on Sundays. We band together to explore our ideas and hack them into existence. We are developers, artists, students, and friends. Hacker Sunday is supposed to be a sustainable hack-a-thon experience, unlike your typical 24hr hack-a-thon. </p>
          <p>There’s no specific topic except you can’t hack on “work” projects. Hacker Sunday is a place where you can explore freely with the support of your peers. We want to set aside Sundays for you to try things out and genuinely do cool shit. Not do more work for your corporate overlords. </p>
        </div>

        <p className='m-0 capitalize text-blue-700'><Link to="">Become a Hacker and Join Us</Link></p>
        <p className="text-slate-400 text-xs">Join our Discord Server and add the Hacker Sunday Role</p>

      </div>
      <div className='hidden lg:block w-96 mt-64 relative'>
        <div className='w-56 absolute mx-auto -translate-y-32 z-10 right-0 left-0'><StaticImage className='animate-spin-slow' src="../images/circular_text.webp" alt="circular text" /></div>
        <div className='w-full absolute top-0'><StaticImage src="../images/akagi.webp" alt="akagi looking all contemplative" /></div>
      </div>
    </div>
  )
}

export default IndexPage
