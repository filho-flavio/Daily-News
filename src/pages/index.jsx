import React from "react";
import { CardNews } from "../components/Card";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import "./index.css"

export function PageIndex() {
  const URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-02&sortBy=publishedAt&apiKey=515c246f58d64eafb15c1ae8d6801fa5";

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        console.log(data.articles)
        const updatedNews = data.articles.map(article => ({
          id: uuidv4(),
          title: article.title,
          description: article.description,
          urlToImage: article.urlToImage,
          author: article.author,
          publishedAt: `${article.publishedAt.split('T')[0]}`,
        }));

        setNews(prevState => [...prevState, ...updatedNews]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


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
          <img src="/public/arrow-black-left.png" className="img-skipNews" alt="" />
          {/* {
            news.map((item) => 
              <CardNews
                key={item.id}
                urlToImage={item.urlToImage}
                title={item.title}
                description={item.description}
                author={item.author}
                publishedAt={item.publishedAt}
              />
            )} */}

          <CardNews
            urlToImage={"https://www.marketscreener.com/images/twitter_MS_fdnoir.png"}
            title={"More EVs lose US tax credits including Tesla Cybertruck, Nissan Leaf"}
            description={"Politiet og dommeren ville straffe Linni Celine Krieg for å ha satt sønnens liv i fare. 28-åringen ble overrasket over hvem som reddet henne i retten."}
            author={"Lorem ipsum"}
            publishedAt={"3 hours ago"}
          />
          <img src="/public/arrow-black.png" className="img-skipNews" alt="" />
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