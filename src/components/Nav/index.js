import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './style.less';
import pathConfigs from '../../routes/path';

const Nav = () =>  {
    return (
        <ul styleName="nav">
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

export default CSSModules(Nav, styles, { allowMultiple: true } );