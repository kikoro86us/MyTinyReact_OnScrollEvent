import React, { Component } from 'react';
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import styles from '../css/styles.css'
// import ScrollEvent from 'react-onscroll';


class Landing extends Component {


    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }


    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }


//=================== 스크롤해서 벨류값 찾는 방법 ========================//
    // handleScroll(event) {
    //     let iAmScroll = document.getElementsByClassName('content3containner')[0];
    //     console.log(event.srcElement.body.scrollTop);
    // }
//==================================================================//



    handleScroll(event) {
        let iAmScroll = document.getElementsByClassName('content3body')[0];
        let viewHeight = event.srcElement.body.scrollTop;
        viewHeight > 1700 ? iAmScroll.classList.add('content3BodyVisible') : iAmScroll.classList.remove('content3BodyVisible');
    }

    

    render() {
        return (
            <div>
                <Content1 />
                <Content2 />
                <Content3 />
            </div>
        );
    }
}

export default Landing;