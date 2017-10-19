import React from 'react';
import CSSModules from 'react-css-modules';
const testImage = require('../static/images/test.jpeg');
import  style from './index.scss';
@CSSModules(style)
export default class Welcome extends React.Component {
    render() {
        return (
            <div styleName="welcome">
                <p>Welcome</p>
                <img src={ testImage } alt="load test img via react"/>
            </div>
        );
    }
}

