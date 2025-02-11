import React from 'react'
import './About.css'
import blog from '../assets/blog-1.jpg'

export const About = () => {
  return (
    <div className='container my-5 mt-5 my'>
        <div className='about'>
            <div><img src= {blog} alt="blog" className='blog'/></div>
            <div className="about-text">
                <h4 className='About-Us'>About Us</h4>
                <h2 className='Innovative'><b>Innovative Way To Learn</b></h2>
                <p>Boldlinks Technology Solutions has been transforming<br />
                lives of young Nigerians with varieties of I.C.T Training Programmes,<br />
                which has seen many participant benefited immensely from it in the past and<br />
                continue to lead by example as the hottest I.C.T experts in the areas Software Dev<br />
                Database Administration, Web Design/Dev, Programming, Mobile Apps Dev,<br />
                Digital Marketing, Graphics Design & Career mentorship in various IT Sectors across<br />
                the Globe/Nation.</p>
                <button className='learn'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About