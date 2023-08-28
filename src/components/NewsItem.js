import React from 'react';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        // console.log("I am a constructor")
        this.state = {
        };
    }

    render() {
        let { title, description, imageUrl, Url, date, source, author } = this.props
        return <div>
            <div className="card my-3">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className='card-text-sm'><b>{new Date(date).toGMTString()}</b></p>
                    <p className="card-text">{description}...</p>
                    <p>By {author} from {source}</p>
                    <a href={Url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>;
    }
}

export default NewsItem;