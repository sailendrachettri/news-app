import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        let NewsDate = new Date(date);
        NewsDate = NewsDate.toGMTString();

        return (
            <>
                <div className="my-3">

                    <div className="card" style={{ minWidth: "18rem" }}>
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left:"85%", zIndex: "1"}}>
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        <img src={imageUrl} className="card-img-top" alt="news" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {NewsDate}</small></p>
                            <a href={newsUrl} target="blank" className="btn btn-outline-dark btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
