import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
    c = 'John';
    render() {
        return (
            <div>
                <Router>
                    <Navbar />

                    <Switch>
                        <Route exact key="general" path="/"><News pageSize={6} country="in" category="general" /></Route>
                        <Route exact key="business" path="/business"><News pageSize={6} country="in" category="business" /></Route>
                        <Route exact key="sports" path="/sports"><News pageSize={6} country="in" category="sports" /></Route>
                        <Route exact key="health" path="/health"><News pageSize={6} country="in" category="health" /></Route>
                        <Route exact key="science" path="/science"><News pageSize={6} country="in" category="science" /></Route>
                        <Route exact key="sports" path="/sports"><News pageSize={6} country="in" category="sports" /></Route>
                        <Route exact key="technology" path="/technology"><News pageSize={6} country="in" category="technology" /></Route>
                        <Route exact key="entertainment" path="/entertainment"><News pageSize={6} country="in" category="entertainment" /></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
