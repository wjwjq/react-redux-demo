import React, { Component } from 'react';
// import './index.less';

export default class CustomCarouselItem extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {

        return (
            <div class="custom-carousel">
                <div class="custom-carousel-item">
                    <img src="" />
                    <div class="custom-carousel-item-content-mask">
                        <div class="custom-carousel-item-content">
                            <h1>AAAA</h1>
                            <h1>bbb</h1>
                            <button>xxx</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}