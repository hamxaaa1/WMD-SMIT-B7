import React from 'react'
import serviceStyle from './Services.module.css'
function Services() {
  return (
    <div id='services'>
    <div className='container-fluid' style={{marginTop: 150, marginBottom: 100}}>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-11'>
          <p id={serviceStyle.serviceExpertiesTag}>Expertise</p>
          <p id={serviceStyle.keyExperties}>My key areas of expertise.</p>
          <p id={serviceStyle.servicesPara}>
          I’m a web developer skilled in HTML, CSS, and JavaScript, with experience in Bootstrap and a basic understanding of React. I build responsive, interactive websites and am passionate about creating user-friendly applications. My foundational knowledge in data structures and algorithms supports my problem-solving and coding efficiency.
          </p>
          <a href='#contact' style={{textDecoration:'none'}}><button id={serviceStyle.serviceBtn} className='d-none d-md-block'>View All Services</button></a>
        </div>
        <div className='col-md-5 col-11 mt-5'>
          <p id={serviceStyle.keyHeading}><span id={serviceStyle.keyNumbering}>01.</span>HTML & CSS:</p>
          <p id={serviceStyle.headingPara}>
            Proficient in structuring web pages with HTML to ensure content is well-organized and accessible. Advanced CSS techniques are applied to create visually appealing, responsive designs that adapt to various screen sizes and devices.
          </p>
          <p id={serviceStyle.keyHeading}><span id={serviceStyle.keyNumbering}>02.</span>JavaScript:</p>
          <p id={serviceStyle.headingPara}>
          Skilled in adding interactivity to web pages, including handling events, validating forms, and creating dynamic content that enhances user experience and engagement.
          </p>
          <p id={serviceStyle.keyHeading}><span id={serviceStyle.keyNumbering}>03.</span>Bootstrap:</p>
          <p id={serviceStyle.headingPara}>
          Experienced in employing Bootstrap to develop mobile-first, responsive layouts quickly. This framework provides pre-designed components and utilities, facilitating consistent and efficient design.
          </p>
          <p id={serviceStyle.keyHeading}><span id={serviceStyle.keyNumbering}>04.</span>React:</p>
          <p id={serviceStyle.headingPara}>
          Familiar with React for building modern web applications, involving the creation of reusable components that manage their own state. This approach supports the development of complex user interfaces and efficient state management.
          </p>
          <p id={serviceStyle.keyHeading}><span id={serviceStyle.keyNumbering}>05.</span>Basic Data Structures & Algorithms (DSA):</p>
          <p id={serviceStyle.headingPara}>
          Possess foundational knowledge in data structures and algorithms, which enhances the ability to write optimized code and tackle programming problems effectively.
          </p>
          <button id={serviceStyle.serviceBtn} className='d-block d-md-none' style={{width: '100%'}}>View All Services</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services
