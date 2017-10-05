import React from 'react';
import { Link } from 'react-router-dom';
import pathConfigs from '../routes/path';
const Nav = () =>  {
    return (
        <ul class="nav">
            <li>
                <Link to={pathConfigs.root} >Welcome</Link>
            </li>
            <li>
                <Link to={pathConfigs.user}>User</Link>
            </li>
            <li>
                <Link to={pathConfigs.tweets} >Tweets</Link>
            </li>
        </ul>
    );
};

export default Nav;