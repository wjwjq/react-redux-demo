import React, { Component } from 'react';
// import CustomCarousel from '../components/CustomCarousel/';
// import CustomCarouselItem from '../components/CustomCarousel/Item';

import ReactSwipe from 'react-swipe';
import './index.less';

const imgList = [
    {
        alt: '',
        src: require('../static/images/home/1@2x.png'),
        title: '全链路、体系化的服务数据洞察',
        intro: '异常预警、可视化分析、智能解读、运营闭环0',
        btnText: '进入服务分析',
        url: 'http://www.baidu.com'
    }, {
        alt: '',
        src: require('../static/images/home/2@2x.png'),
        title: '全链路、体系化的服务数据洞察',
        intro: '异常预警、可视化分析、智能解读、运营闭环1',
        btnText: '进入服务分析',
        url: 'http://www.baidu.com'
    },
    {
        alt: '',
        src: require('../static/images/home/3@2x.png'),
        title: '全链路、体系化的服务数据洞察',
        intro: '异常预警、可视化分析、智能解读、运营闭环2',
        btnText: '进入服务分析',
        url: 'http://www.baidu.com'
    }
];

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        console.info(        this.reactSwipe.swipe);
    }

    handleNextArrowClick() {
        console.info(1);
        this.reactSwipe.swipe.next();
        this.setState({
            currentIndex: this.reactSwipe.swipe.getPos()
        });
    }

    handleDotClick = id => () =>  {
        this.reactSwipe.swipe.slide(id);
        this.setState({
            currentIndex: id
        });
    }

    render() {
     
        const items = imgList.map((item,idx) => {
            return (
                <div 
                    class="custom-carousel-item"
                    key={idx}
                    id={idx}
                >
                    <img src={item.src} />
                    <div class="custom-carousel-item-content-mask">
                        <div class="custom-carousel-item-content">
                            <h1>{ item.title }</h1>
                            <h1>{ item.intro }</h1>
                            <button>{item.btnText}</button>
                        </div>
                    </div>
                </div>
            );
        });

        const swipeOptions = {
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            callback: (index, elem)  => {
                console.info(index);
                this.setState({
                    currentIndex: index
                });
            },
            transitionEnd: function (index, elem) {}
        };

        console.info();

        const dots = imgList.map((item, idx) => <span className={`custom-carousel-dot ${this.state.currentIndex === idx ? 'active' :''} `} key={idx} id={idx} onClick={this.handleDotClick(idx)}></span>);
        
        return (
            <div class="custom-carousel">

                <ReactSwipe className="carousel" swipeOptions={swipeOptions} ref={node => this.reactSwipe = node}>
                    {items}
                </ReactSwipe>

                 
                <div class="custom-carousel-dot-box">
                    { dots }
                </div>

                <div class="custom-carousel-arrow-group">
                    <span
                        class="custom-carousel-arrow custom-carousel-arrow-prev"
                        onClick={this.handlePrevArrowClick}
                    >
                 &lt;
                    </span>
                    <span
                        class="custom-carousel-arrow custom-carousel-arrow-next"
                        onClick={this.handleNextArrowClick.bind(this)}
                    >
                 &gt;
                    </span>
                </div>
            </div>
        );
    }
}