import React from "react";
import "./Card.css"

export function CardNews({ urlToImage, title, description, author, publishedAt }) {
    return (
        <>
            <div className="box-container">
                <img className="imgs" src={urlToImage} alt="" />
                <div className="contents">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <small>By: <strong>{author}</strong> Published At: {publishedAt}</small>
                    <div className="box-more-news">
                        <h3>More news</h3>
                        <div className="card-more-news-1">

                        </div>
                        <div className="card-more-news-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}