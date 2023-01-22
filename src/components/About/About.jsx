import React from 'react'
import cshub from '../../Assets/cshub.png'

const About = () => {
  return (
    <div id="aboutp">
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 left'>
            <img src={cshub} />
          </div>
          <div className='col-md right'>
            <div className='head row-md-4'>About us</div>
            <div className='content row-md'>
              At Computing Students Hub, we empower undergraduate students at
              Lassonde by providing representation, resources, and opportunities
              for growth in the tech industry. Through our educational events,
              such as workshops on industry-standard technologies, as well as
              professional and social gatherings, we strive to foster a
              community of over 1200+ members on our Discord server, making us
              one of the most prominent clubs at Lassonde. Our membership base
              is continually expanding, as we strive to provide valuable
              resources and experiences for all students.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
