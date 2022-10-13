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
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ticketIcon.png`}
                        alt="ticketIcon"
                    />
                    <div id="banner-text">
                        <h3>옛술의 전당에서 나만의 작품과 옛술을!</h3>
                        <h3>
                            <br />
                            7가지 질문을 통해 나만의 작품과
                            <br />
                            옛술을 추천해드립니다. 안주 준비 고?
                        </h3>
                    </div>
                    <Circle>
                        <Link to="ticketbox">
                            <div />
                        </Link>
                    </Circle>
                </FootBannerInner>
                <FootBannerInner>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/soolotIcon.png`}
                        alt="soolotIcon"
                    />
                    <div id="banner-text">
                        <h3>돌려돌려 술롯머신</h3>
                        <h3>
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
                    <img
                        src={`${process.env.PUBLIC_URL}/images/ticketIcon.png`}
                        alt="ticketIcon"
                    />
                    <div id="banner-text">
                        <h3>옛술의 전당에서 나만의 작품과 옛술을!</h3>
                        <h3>
                            <br />
                            7가지 질문을 통해 나만의 작품과
                            <br />
                            옛술을 추천해드립니다. 안주 준비 고?
                        </h3>
                    </div>
                    <Circle>
                        <Link to="ticketbox">
                            <div />
                        </Link>
                    </Circle>
                </FootBannerInner>
            </div>
        </FootBanner>
    );
};

export default FootBannerSwiper;

const FootBanner = styled.div`
    @media (max-width: 767px) {
        height: 7.1875em;
        width: calc(100% - 4.45em);
        border-right: none;
    }
    position: absolute;
    height: 17.5625em;
    width: calc(50% - 0.0625em);
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
    @media (max-width: 767px) {
        > img {
            display: none;
        }
        #banner-text {
            line-height: 1.5375em !important;
            > h3 {
                font-size: 0.9375em !important;
                width: 9.75em;
            }
            > h3:not(:first-of-type) {
                display: none;
            }
        }
    }
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    height: 100%;
    > img {
        width: 12.4375em;
    }
    #banner-text {
        h3:first-of-type {
            font-family: 'GmarketSansMedium';
        }
        h3 {
            font-size: 1.5625em;
            letter-spacing: -0.01em;
            color: #8b7e6a;
            font-family: 'GmarketSansLight';
        }
    }
`;

const Circle = styled.div`
    @media (max-width: 767px) {
        width: 4.1875em;
        height: 4.1875em;
        display: flex;
        > a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    width: 8.5em;
    height: 8.5em;
    border: 1px solid #8b7e6a;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81),
        transform 0.15s cubic-bezier(0.67, 0.13, 0.1, 0.81);
    z-index: 1000;

    div {
        @media (max-width: 767px) {
            width: 4.1875em;
            height: 4.1875em;
            zoom: 0.75;
        }
        width: 8.5em;
        height: 8.5em;
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
        top: -2.75em;
        opacity: 0;
    }

    div:hover:after {
        top: 0;
        opacity: 1;
    }

    div:hover:before {
        top: 2.75em;
        opacity: 0;
    }
`;
