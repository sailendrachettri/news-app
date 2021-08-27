import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3104946bd90a4c738d1a1e4d7dc35012";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
        console.log(data);
        console.log(parsedData);
    }
    render() {
        console.log('log');
        return (
            <>
                <div className="container my-3">
                    <h2>NewsMonkey - Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 88): ""} imageUrl={element.urlToImage?element.urlToImage: "https://www.sciencealert.com/images/2021-08/processed/WhiteNeckedJacobinMaleInFlight_1024.jpg"} newsUrl={element.url} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        )
    }
}

export default News
