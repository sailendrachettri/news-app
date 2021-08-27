import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
       let {title, description} = this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://static.politico.com/45/56/0a779f9346b792b3338f03efc3ad/210310-capitol-riot-773.jpg" className="card-img-top" alt="news" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
