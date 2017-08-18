/**
 * Created by eagleagle on 2017/3/19.
 */
import React from  "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

import "../static/style/style.less";
import Welcome from "../components/pages/Welcome";
import User from "../components/pages/User";
import Tweets from "../components/pages/Tweets";

//v4
export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <ul class="nav">
                        <li>
                            <Link to="/">Welcome</Link>
                        </li>
                        <li>
                            <Link to="/User">User</Link>
                        </li>
                        <li>
                            <Link to="/Tweets">Tweets</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact path='/' component={Welcome}/>
                    <Route path="/user" component={User}/>
                    <Route path="/tweets" component={Tweets}/>
                </div>
            </Router>
        );
    }
}


