import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
    pageSize = 18;
    render() {
        return (
            <div>
                <Router>
                    <Navbar />

                    <Switch>
                        <Route exact key="general" path="/"><News pageSize={this.pageSize} country="in" category="general" /></Route>
                        <Route exact key="business" path="/business"><News pageSize={this.pageSize} country="in" category="business" /></Route>
                        <Route exact key="sports" path="/sports"><News pageSize={this.pageSize} country="in" category="sports" /></Route>
                        <Route exact key="health" path="/health"><News pageSize={this.pageSize} country="in" category="health" /></Route>
                        <Route exact key="science" path="/science"><News pageSize={this.pageSize} country="in" category="science" /></Route>
                        <Route exact key="sports" path="/sports"><News pageSize={this.pageSize} country="in" category="sports" /></Route>
                        <Route exact key="technology" path="/technology"><News pageSize={this.pageSize} country="in" category="technology" /></Route>
                        <Route exact key="entertainment" path="/entertainment"><News pageSize={this.pageSize} country="in" category="entertainment" /></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
