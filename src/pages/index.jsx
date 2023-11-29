import React from "react";

import "./index.css"

export function PageIndex() {
    return (
      <div className='container'>
  
        <header className='header'>
          <div className="header-container">
            <div className='header-box-1'>
              <img id='img-logo' src="/public/news.png" alt="Daily News Logo" />
              <h1>Daily News</h1>
            </div>
            <nav className='header-box-2'>
              <ul className='box-2-ul'>
                <li>Home</li>
                <li><a href="#news">News</a></li>
                <li><a href="#footer">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </header>
  
        <main className='main'>
          <section className='main-box-1'>
          </section>
          <section id='news' className='main-box-2'>
          </section>
        </main>
  
        <footer id='footer' className='footer'>
          <div className='footer-container'>
            <div className='footer-box'>
  
              <div className='box-1-child-1'>
                <h2>Contact Us</h2>
                <ul className='footer-ul'>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>E-mail</li>
                </ul>
              </div>
  
              <div className='box-1-child-2'>
                <h2>About Us</h2>
                <p id='footer-about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Nobis facilis delectus voluptates unde fuga ipsum obcaecati quo itaque deleniti,<br /> ab, repellendus dolor perspiciatis similique recusandae eum sit minus vitae <br />veniam! Incidunt ea quam aliquam quaerat! Ea accusantium <br />nemo, voluptates esse error impedit, saepe qui consequuntur eveniet ut, iste fugiat. Quos, harum cumque.</p>
              </div>
  
              <div className="box-1-child-3">
                <h3>Subscribe</h3>
                <input id='in-footer' type="text" placeholder='Enter e-mail address' />
                <button id='bt-footer'>Subscribe</button>
              </div>
  
            </div>
          </div>
  
          <div className="footer-box-3">
            © 2023 Daily News, All rights reserved.
          </div>
  
        </footer>
      </div>
    );
  }