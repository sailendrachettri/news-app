import React, { Component } from 'react'

export default class App extends Component {
    c = 'John';
    render() {
        return (
            <div>
                <h1>Hello my first class based Component{this.c}</h1>
            </div>
        )
    }
}
