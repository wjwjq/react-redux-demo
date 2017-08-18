import React from "react";

const testImage = require("../../static/images/test.jpeg");

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome</p>
                <img src={ testImage } alt="load test img via react"/>
            </div>
        );
    }
}

