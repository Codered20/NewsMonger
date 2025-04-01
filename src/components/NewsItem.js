import React from 'react';

function NewsItem({ title, description, imageUrl, Url, date, author }) {
  return (
    <div className="card my-3">
      <img src={imageUrl} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className='card-text-sm'><b>{new Date(date).toGMTString()}</b></p>
        <p className="card-text">{description}...</p>
        <p>By {author || "Unknown"}</p>
        <a href={Url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;