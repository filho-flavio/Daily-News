import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <>
      <div className='container'>

        <div className='header'>

          <div className='header-box-1'>
            <img id='img-logo' src="/public/news.png" alt="" />
            <h1>Daily News</h1>
          </div>

          <div className='header-box-2'>
            <ul className='box-2-ul'>
              <li>Home</li>
              <li><a href="#news">News</a></li>
              <li>Contact-us</li>
            </ul>
          </div>

        </div>

        <div className='main'>
          <section className='main-box-1'>
          </section>
          <section id='news' className='main-box-2'>

          </section>
        </div>

        <div className='footer'>

          <div className='footer-container'>

            <div className='footer-box-1'>
              <div className='box-1-child-1'>
                <h2>Contact-us</h2>
                <ul className='footer-ul'>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>E-mail</li>
                </ul>
              </div>
            </div>

            <div className='footer-box-2'>
              <div className='box-2-child-1'>
                <h2>About us</h2>
                <p id='footer-about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis delectus voluptates unde fuga ipsum obcaecati quo itaque deleniti, ab, repellendus dolor perspiciatis similique recusandae eum sit minus vitae veniam! Incidunt ea quam aliquam quaerat! Ea accusantium nemo, voluptates esse error impedit, saepe qui consequuntur eveniet ut, iste fugiat. Quos, harum cumque.</p>
              </div>
              <div className="box-2-child-2">
                <h3>Subscribe</h3>
                <input id='in-footer' type="text" placeholder='Enter e-mail address' />
                <button id='bt-footer'>Subscribe</button>
              </div>
            </div>

          </div>

          <div className="footer-box-3">
            © 2023 Daily News, All right reserved.
          </div>

        </div>
      </div>
    </>
  )
}

root.render(<App />);