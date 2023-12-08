import React from 'react'
// import '../styles/Card.css'
const Card = ({news}) => {
  console.log("cardNews" ,  news)
  return (
    <div className='column'>
      <figure className="snip1493">
  <div className="image"><img src={news.image} alt="ls-sample1" /></div>
  <figcaption>
    <div className="date"><span className="day">{news.author}</span><span className="month">{news.publishedAt}</span></div>
    <h3>{news.title}</h3>
    <p>
      {news.description}
      
    </p>
    <footer>
      <div className="love"><i className="ion-heart"></i></div>
    </footer>
  </figcaption>
  <a href={news.url}></a>
</figure>

    </div>
  )
}

export default Card
