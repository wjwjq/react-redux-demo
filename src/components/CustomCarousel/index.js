import React, { Component } from 'react';
import './index.less';

const imgList = [
    {
        alt: '',
        src: require('../../static/images/home/1@2x.png'),
        title: '全链路、体系化的服务数据洞察',
        intro: '异常预警、可视化分析、智能解读、运营闭环',
        btnText: '进入服务分析',
        url: 'http://www.baidu.com'
    }, {
        alt: '',
        src: require('../../static/images/home/2@2x.png'),
        title: '全链路、体系化的服务数据洞察',
        intro: '异常预警、可视化分析、智能解读、运营闭环',
        btnText: '进入服务分析',
        url: 'http://www.baidu.com'
    },
    {
        alt: '',
        src: require('../../static/images/home/3@2x.png'),
        title: '全链路、体系化的服务数据洞察',
        intro: '异常预警、可视化分析、智能解读、运营闭环',
        btnText: '进入服务分析',
        url: 'http://www.baidu.com'
    }
];

export default class CustomCarousel extends Component {

    constructor() {
        super();

        this.state = {
            currentIndex: 0
        };

    }
    
    handlePrevArrowClick()  {

    }

    handleNextArrowClick() {
        
    }

    handleDotClick = id => () => {
        console.info(id);

        this.setState({
            currentIndex: id
        });
    }

    componentDidMount() {
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
        

        const dots = imgList.map((item, idx) => <span class="custom-carousel-dot" key={idx} id={idx} onClick={this.handleDotClick(idx)}></span>);
        const width = 1920;
        
        console.info(
            this.state.currentIndex  * width
        );
        return (
            <div class="custom-carousel">
                <div class="custom-carousel-item-box" >
                    <div class="custom-carousel-item-box-inner" style={{ marginLeft: -this.state.currentIndex * width }}>
                        { items }
                    </div>
                </div>
                
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
                        onClick={this.handleNextArrowClick}
                    >
                    &gt;
                    </span>
                </div>
            </div>
        );
    }
}


