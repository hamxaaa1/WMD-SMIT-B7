import React from 'react'
import footerStyle from './Footer.module.css'
function Footer() {
  return (
    <div id='footer'>
    <div id={footerStyle.footerMainDiv} className='container-fluid'>
      <div className='row justify-content-center pt-5'>
        <div className='col-md-4 col-11'>
          <p id={footerStyle.footerHeading}>About Hamza</p>
          <p id={footerStyle.footerPara}>I’m Hamza Ashfaq from Faisalabad, Pakistan, pursuing a Computer Science degree at GC University. I began coding in 2021, initially finding it overwhelming but gradually mastering the complexities. Through persistent effort and diverse projects, I've transformed challenges into achievements, developing strong skills and a deep passion for programming.</p>
        </div>
        <div className='col-md-3 col-11'>
          <p id={footerStyle.footerHeading}>Site Links</p>
          <a href='#nav' style={{textDecoration: 'none'}}><p id={footerStyle.footerPara}>Home</p></a>
          <a href='#about' style={{textDecoration: 'none'}}><p id={footerStyle.footerPara}>About</p></a>
          <a href='#services' style={{textDecoration: 'none'}}><p id={footerStyle.footerPara}>Services</p></a>
          <a href='#contact' style={{textDecoration: 'none'}}><p id={footerStyle.footerPara}>Contact</p></a>
        </div>
        <div className='col-md-3 col-11'>
          <p id={footerStyle.footerHeading}>Newsletter</p>
          <p id={footerStyle.footerPara}>Stay updated with the latest in web development trends and techniques.</p>
          <form>
          {/* <button></button> */}
          <input id={footerStyle.footerEmailBtn} placeholder='Your Email Address' />
          <button type='submit' id={footerStyle.footerSubricbeBtn} for='footerEmailBtn'>Subcribe</button>
          </form>
        </div>


        
      </div>
      <div className='row  justify-content-center' style={{marginTop: 80}}>
      <div className='col-md-4 col-11 mb-5'>
        <div  className='' style={{color: '#FEF6E6'}}>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
        </svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg></a>
          </div>
        </div>
        <div className='col-md-3 col-6'> 
          <p id={footerStyle.popyrightPara}>© Copyright Hamza 2024 <br/> Design by <span style={{color: '#DADBDB'}}>Hamza Ashfaq✨</span></p>
        </div>
        <div className='col-md-3 col-5 text-end'>
          <a href='#nav' style={{textDecoration: 'none'}}>  <button id={footerStyle.upArrowBtn}><svg xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}} width="35" height="30" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
          </svg></button></a>
        </div>
      </div>
    </div>
    
    
    </div>
  )
}

export default Footer