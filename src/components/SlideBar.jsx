import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CardNews } from "./Card";

export function SlideBar() {
    const URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-02&sortBy=publishedAt&apiKey=515c246f58d64eafb15c1ae8d6801fa5";

    const arrNews = [];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(URL);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await res.json();
                console.log(data.articles);
                const articles = data.articles;
                const updatedNews = articles.map(article => ({
                    key: uuidv4(),
                    title: article.title,
                    description: article.description,
                    urlToImage: article.urlToImage,
                    author: article.author,
                    publishedAt: `${article.publishedAt.split('T')[0]}`,
                }));

                arrNews = updatedNews;
                console.log(arrNews);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {
                arrNews.map((item) => {
                    <CardNews
                        key={item.id}
                        id={item.id}
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        publishedAt={item.publishedAt}
                    />
                })
            }
        </div>
    )
}