import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="my-3">
                    <div className="card" style={{ minWidth: "18rem" }}>
                        <img src={imageUrl} className="card-img-top" alt="news" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="blank" className="btn btn-outline-dark btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
