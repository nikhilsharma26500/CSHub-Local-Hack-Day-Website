import React, { useState } from 'react'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div id="faq">
    <div id='faq'>
      <div className='accordion'>
        <div className='titleName'>
          <p>Frequently Asked Questions</p>
        </div>
        <div className='blur'>
          <div
            className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleClick(0)}
          >
            <span>Where will the event take place?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 0 ? 'open' : ''}`}
          >
            The event will be held at The Bergeron Centre 125 & Eatery, located
            at 11 Arboretum Ln, North York, ON M3J 2S5.
          </div>
          <div
            className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleClick(1)}
          >
            <span>How much does it cost to join?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}
          >
            Joining CSHub LHD is absolutely free of charge for York University
            students! However, please note that registration is exclusively
            available to current York University students.
          </div>
          <div
            className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleClick(2)}
          >
            <span>Can I work on previous projects?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}
          >
            To ensure a fair competition for all, all projects must be started
            and completed during the event. Your team is welcome to plan and
            brainstorm ideas beforehand, but any use of pre-existing work will
            result in disqualification.
          </div>
          <div
            className={`accordion-header ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleClick(3)}
          >
            <span>How many people can be on a team?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}
          >
            The number of members on a team can vary from 1 to 4. However, it is
            also possible to participate in the event as an individual. Teams
            can be formed before or during the event, giving you the flexibility
            to work with others or tackle the challenge on your own.
          </div>
          <div
            className={`accordion-header ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => handleClick(4)}
          >
            <span>What if I don’t have any experience?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 4 ? 'open' : ''}`}
          >
            No experience is needed to participate in our hackathon. Whether
            you're a beginner or a seasoned pro, we have something for everyone.
            We'll be hosting pre-hackathon workshops and providing mentorship to
            help guide you through your project, so you can learn and grow along
            the way. Come join us and discover the possibilities!
          </div>
          <div
            className={`accordion-header ${activeIndex === 5 ? 'active' : ''}`}
            onClick={() => handleClick(5)}
          >
            <span>What do I need to bring?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 5 ? 'open' : ''}`}
          >
            For the CSHub LHD hackathon, you won't need to bring any overnight
            essentials as it's a 12-hour event. However, it's important to bring
            all the necessary equipment and tools to work on your project. This
            includes laptops, chargers, and any additional hardware that you may
            require.
          </div>
          <div
            className={`accordion-header ${activeIndex === 6 ? 'active' : ''}`}
            onClick={() => handleClick(6)}
          >
            <span>What do I do after I apply?</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 6 ? 'open' : ''}`}
          >
            Sit back and start flexing those keyboard muscles and hack like a
            pro!.
          </div>
          <div
            className={`accordion-header ${activeIndex === 7 ? 'active' : ''}`}
            onClick={() => handleClick(7)}
          >
            <span>I have more questions!</span>
            <span className='plus'>+</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === 8 ? 'open' : ''}`}
          >
            Email us at cshub.localhackday@gmail.com
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Faq
