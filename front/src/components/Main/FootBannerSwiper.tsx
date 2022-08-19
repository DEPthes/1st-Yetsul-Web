import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FootBannerSwiper: React.FC = () => {
    // 하단 배너 자동 carousel
    const numberRef = useRef(0);

    useEffect(() => {
        const carouselSlide = document.getElementById('footbanner-wrap');

        // carousel
        const BannerCarousel = setInterval(() => {
            if (carouselSlide) {
                console.log(carouselSlide);
                carouselSlide.style.transition = '2s ease';
                numberRef.current += 1;
                carouselSlide.style.transform = `translateX(${
                    -33.3333 * numberRef.current
                }%)`;
                if (numberRef.current === 2) {
                    setTimeout(() => {
                        carouselSlide.style.transition = 'none';
                        numberRef.current = 0;
                        carouselSlide.style.transform = `translateX(0%)`;
                    }, 2000);
                }
            }
        }, 8000);

        return () => {
            clearInterval(BannerCarousel);
        };
    }, []);
    return (
        <FootBanner>
            <div id="footbanner-wrap">
                <FootBannerInner>
                    <img src="images/ticketIcon.png" alt="ticketIcon" />
                    <div id="banner-text">
                        <h3>
                            <span>옛술의 전당에서 나만의 작품과 옛술을!</span>
                            <br />
                            7가지 질문을 통해 나만의 작품과
                            <br />
                            옛술을 추천해드립니다. 안주 준비 고?
                        </h3>
                    </div>
                    <Circle>
                        <div />
                    </Circle>
                </FootBannerInner>
                <FootBannerInner>
                    <img src="images/soolotIcon.png" alt="soolotIcon" />
                    <div id="banner-text">
                        <h3>
                            <span>돌려돌려 술롯머신</span>
                            <br />
                            날씨 / 기분 / 상황 조합으로 옛술을
                            <br />
                            추천받을 수 있습니다. 오늘의 옛술은?
                        </h3>
                    </div>
                    <Circle>
                        <Link to="soolot">
                            <div />
                        </Link>
                    </Circle>
                </FootBannerInner>
                <FootBannerInner>
                    <div />
                    <div id="banner-text">
                        <h3>
                            <span>옛술의 전당에서 나만의 작품과 옛술을!</span>
                            <br />
                            7가지 질문을 통해 나만의 작품과
                            <br />
                            옛술을 추천해드립니다. 안주 준비 고?
                        </h3>
                    </div>
                    <Circle>
                        <div />
                    </Circle>
                </FootBannerInner>
            </div>
        </FootBanner>
    );
};

export default FootBannerSwiper;

const FootBanner = styled.div`
    position: absolute;
    height: 281px;
    width: calc(50% - 1px);
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-right: 1px solid #bbb6a8;
    border-top: 1px solid #bbb6a8;

    > div {
        display: flex;
        width: 300%;
        height: 100%;
    }
`;

const FootBannerInner = styled.div`
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    height: 100%;
    > img {
    }
    #banner-text {
        h3 {
            font-size: 25px;
            line-height: 42px;
            letter-spacing: -0.01em;
            color: #8b7e6a;
            font-family: 'GmarketSansLight';
            span {
                font-family: 'GmarketSansMedium';
            }
        }
    }
`;

const Circle = styled.div`
    width: 136px;
    height: 136px;
    border: 1px solid #8b7e6a;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81),
        transform 0.15s cubic-bezier(0.67, 0.13, 0.1, 0.81);
    z-index: 1000;

    div {
        width: 136px;
        height: 136px;
        position: absolute;
        overflow: hidden;
        cursor: pointer;
    }

    div:before,
    div:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8b7e6a;
        cursor: pointer;
        transform: rotate(-26.9deg);
    }

    div:before {
        content: 'START';
        opacity: 1;
    }

    div:after {
        content: 'CLICK';
        top: -44px;
        opacity: 0;
    }

    div:hover:after {
        top: 0;
        opacity: 1;
    }

    div:hover:before {
        top: 44px;
        opacity: 0;
    }
`;
