import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 className="text-center">React js App</h1>
                    <ul className="nav navbar-nav">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/stuff">Sign info</NavLink></li>
                        <li><NavLink to="/contact">About</NavLink></li>
                    </ul>
                    <div className="content panel-body">
                        <Route path="/home" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
