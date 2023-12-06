"use client"
import React, { useEffect, useState } from 'react'
import Card from '../Card.js';
import { fetchNews } from '../fetchNews.js';

const page = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch news when the component mounts
        const getNews = async () => {
          try {
            const response = await fetchNews();
            setNews(response.articles);
          } catch (error) {
            console.error('Error fetching news:', error);
          }
        };
    
        getNews();
      }, []);
      // console.log(news[0]);
  return (
    <div className="row">
      
       
      {
        news && news.map((article, index) => {
          return(
          <Card
            news = {article}
          />
          )
      }
        )
    }
    
    </div>
  )
  }

export default page
