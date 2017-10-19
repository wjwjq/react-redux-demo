import React from  'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent';

import pathConfigs from './path';
import Home from '../views/Home';
import Welcome from '../components/Welcome';

//异步加载
const User = asyncComponent(() =>
    System.import('../components/User').then(module => module.default)
);

const Tweets = asyncComponent(() =>
    System.import('../components/Tweets').then(module => module.default)
);

//v4
const Routes = () => {
    return (
        <Home>
            <Switch>
                <Route exact path={pathConfigs.root} component={Welcome}/>
                <Route path={pathConfigs.user} component={User}/>
                <Route path={pathConfigs.tweets} component={Tweets}/>
            </Switch>
        </Home>
    );
};

export default Routes;