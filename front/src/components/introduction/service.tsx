/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Scrollspy } from '@makotot/ghostui';
import BackgroundTemplate from '../common/BackgroundTemplate';
import PageUpBtn from '../common/PageUpBtn';

const Service: React.FC = () => {
    $(window).scroll(() => {
        const scroll = $(window).scrollTop() || 0;
        if (scroll > 1) {
            $('#service-nav').css('background', 'rgba(255, 255, 255, 0.6)');
            $('#service-nav').css('backdrop-filter', 'blur(6px)');
        } else {
            $('#service-nav').css('background', 'rgba(0, 0, 0, 0)');
        }
    });
    const SIZE = 3;
    const list = new Array(SIZE).fill(0);
    const arr = ['서비스 소개', '옛술의 전당 구성', '서비스 비전'];
    const sectionRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];
    return (
        <BackgroundTemplate heightValue="auto">
            <Scrollspy sectionRefs={sectionRefs}>
                {({ currentElementIndexInViewport }) => (
                    <div>
                        <InnerNavUl id="service-nav">
                            {list.map((_, i) => (
                                <InnerNavLI
                                    key={i}
                                    style={{
                                        color:
                                            currentElementIndexInViewport === i
                                                ? '#675B4F'
                                                : '#A7A7A7',
                                        borderBottom:
                                            currentElementIndexInViewport === i
                                                ? '2px solid #675B4F'
                                                : '1px solid #A7A7A7',
                                    }}
                                >
                                    <a href={`#section-${i}`}>{arr[i]}</a>
                                </InnerNavLI>
                            ))}
                        </InnerNavUl>
                    </div>
                )}
            </Scrollspy>
            <Inner>
                <Introduction>
                    <QuoteBox>
                        <Quote>
                            &#34;신은 물을 만들고, 인간은 술을 만들었다.&#34;
                        </Quote>
                        <Speaker>-프랑스 대문호, 빅토르 위고-</Speaker>
                    </QuoteBox>
                    <IntroSlogan>
                        청춘을 위해 한잔, <br /> 옛술의 전당에서 건배!
                    </IntroSlogan>
                    <IntroImgAlcohole
                        src="/images/introImg_AlcoholeGlass.png"
                        alt="티켓"
                    />
                    <IntroParagraph id="section-0" ref={sectionRefs[0]}>
                        <section>
                            <h1>&#60;옛술의 전당&#62;</h1>
                            <p>은</p>
                        </section>
                        <br />
                        &#60;옛술의 전당&#62;은 자신에게 어울리는 전통주를 찾고
                        <br className="m" />
                        전통주의 매력을 한층 더 느끼며 <br className="pc" />
                        <br className="m" />
                        전통주를 즐길 수 있게 하는 것을 목표로 궁극적으로는
                        <br className="m" />
                        <br className="pc" />
                        <em>&#34;우리의 자랑스런 전통주를 알리기 위해 &#34;</em>
                        <br className="m" />
                        시작되었습니다.
                        <div>
                            우리의 옛술이 더 이상 ‘전통주’ 자체가 아닌 모두가
                            <br className="m" />
                            함께 즐길 수 있는 술로 <br className="pc" />
                            거듭나도록 <br className="m" />
                            <em>
                                &#60;옛술의 전당&#62;은 다양한 서비스를
                                제공합니다.
                            </em>
                        </div>
                    </IntroParagraph>
                </Introduction>
                <Construction ref={sectionRefs[1]} id="section-1">
                    <WhiteBannerBox>
                        <WhiteBannerP>
                            <em> 첫 째. &#91;옛술의 전당 매표소&#93;</em>와{' '}
                            <em>&#91;술롯머신&#93;</em>을 통해 나에게{' '}
                            <br className="m" />
                            어울리는 전통주를 추천받을 수 있습니다.
                        </WhiteBannerP>
                        <WhiteBannerImgBox>
                            <img src="/images/introImg_TICKET.png" alt="티켓" />
                            <img src="/images/introImg_SLOT.png" alt="티켓" />
                        </WhiteBannerImgBox>
                    </WhiteBannerBox>
                    <WhiteBannerBox>
                        <WhiteBannerP>
                            <em>둘 째. [옛술리스트] </em>를 통해 수백 가지의
                            다양한 전통주 <br className="m" />
                            정보를 제공하며 리뷰 작성을 통해{' '}
                            <br className="pc" />
                            <br className="m" />
                            <em>나만의 `옛술리스트` </em>를 만들어갈 수
                            있습니다. <br />
                        </WhiteBannerP>
                        <img
                            className="second"
                            src="/images/introImg_2ndBanner.png"
                            alt="2nd banner"
                        />
                    </WhiteBannerBox>
                    <WhiteBannerBox>
                        <WhiteBannerP>
                            <em>셋 째. [전통주 역사] </em>를 통해 우리 전통주의
                            역사를 <br className="m" />
                            주종 별로 알아볼 수 있습니다. <br />
                        </WhiteBannerP>
                        <img
                            className="third"
                            src="/images/introImg_3rdBanner.png"
                            alt="3rd 배너"
                        />
                    </WhiteBannerBox>
                </Construction>
                <WhiteBannerEndingP>
                    당신의 청춘을 위한 한 잔, 옛술의 전당에서
                    <br className="m" /> 즐겨보는건 어떨까요?
                </WhiteBannerEndingP>
                <Vision ref={sectionRefs[2]} id="section-2">
                    <Heading>&#91; 옛술의 전당 비전 &#93;</Heading>
                    <VisionParagraph>
                        저희 &#60;옛술의 전당&#62;은 3가지를 추구합니다.
                    </VisionParagraph>
                    <VisionCircleBox>
                        <VisionSmallCircle>
                            <VisionCricleParagraph className="small">
                                전통주 시장 <br /> 활성화
                            </VisionCricleParagraph>
                        </VisionSmallCircle>
                        <VisionBigCircle>
                            <VisionCricleParagraph className="big">
                                전통주의 <br /> 대중화
                            </VisionCricleParagraph>
                        </VisionBigCircle>
                        <VisionSmallCircle>
                            <VisionCricleParagraph className="small">
                                전통주의 <br /> 신선한 이미지
                            </VisionCricleParagraph>
                        </VisionSmallCircle>
                    </VisionCircleBox>
                    <VisionIntroContainer>
                        2021년 기준, 전체 주류 소비 중 전통주가 차지하는 비율은{' '}
                        <br className="m" />
                        약 8%에 불과합니다. <br className="pc" />{' '}
                        <br className="m" /> &#40;출처 2021 주류트렌드
                        보고서&#41;
                        <div>
                            &#39;옛술의 전당&#39;은 주류 시장에서 전통주의 판매
                            비율이 <br className="m" /> 증가할 수 있도록{' '}
                            <br className="pc" /> 소비자에게 다양한 컨텐츠를
                            제공합니다. <br className="pc" />
                        </div>
                        <div>
                            세대를 아울러 전통주의 매력을 느낄 수 있도록{' '}
                            <br className="pc" /> <br className="m" />
                            전통주의 신선한 이미지를 제고합니다.
                        </div>
                    </VisionIntroContainer>
                </Vision>
                <PageUpBtn />
            </Inner>
        </BackgroundTemplate>
    );
};

export default Service;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 25.75em;
    padding-bottom: 300px;
    z-index: 2;
    background-image: url('/images/introServiceBg.png');
    background-size: cover;
    background-position: 0 -200px;
    @media screen and (max-width: 767px) {
        background-image: url('/images/introServiceMobileBg.png');
        background-position: 50% 150px;
        padding-top: 13.75em;
    }
`;

const Introduction = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.125em;
`;

const InnerNavUl = styled.ul`
    z-index: 3;
    list-style: none;
    position: fixed;
    left: 50%;
    width: 100%;
    height: 60px;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: all 0.3s ease-out;
    @media screen and (max-width: 767px) {
        top: 6.0625em;
    }
`;

const InnerNavLI = styled.li`
    display: flex;
    justify-content: center;
    width: calc(100vw / 3);
    a {
        color: #8d837b;
        padding-bottom: 1.25em;
        font-size: 1.25em;
        text-decoration: none;
        @media screen and (max-width: 767px) {
            font-size: 0.8125em;
        }
    }
`;

const Heading = styled.h1`
    font-family: 'GmarketSansBold';
    font-size: 1.75em;
    line-height: 175.5%;
    color: #675b4f;
    margin-bottom: 4.6875em;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 1.125em;
        margin-bottom: 3.25em;
    }
`;
const QuoteBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 28.1875em;
    @media screen and (max-width: 767px) {
        margin-bottom: 12.1875em;
    }
`;
const Quote = styled.blockquote`
    font-family: 'GmarketSansMedium';
    font-size: 1.875em;
    line-height: 50px;
    color: #675b4f;
    @media screen and (max-width: 767px) {
        font-size: 1.125em;
    }
`;

const IntroSlogan = styled.div`
    font-size: 1.5625em;
    line-height: 175.5%;
    color: #675b4f;
    font-family: 'GmarketSansBold';
    margin-bottom: 94px;
    text-align: center;
    br {
        display: none;
    }
    @media screen and (max-width: 767px) {
        font-size: 1em;
        br {
            display: block;
        }
    }
`;

const Speaker = styled.p`
    font-family: 'GmarketSansLight';
    font-size: 1.125em;
    line-height: 25px;
    color: #675b4f;
    margin-top: 20px;
    @media screen and (max-width: 767px) {
        font-size: 0.8125em;
    }
`;

const IntroImgAlcohole = styled.img`
    width: 14.5em;
    @media screen and (max-width: 767px) {
        width: 6.375em;
    }
`;

const IntroParagraph = styled.div`
    text-align: center;
    line-height: 175.5%;
    font-size: 1.375em;
    .m {
        display: none;
    }
    @media screen and (max-width: 767px) {
        font-size: 0.8125em;
        .pc {
            display: none;
        }
        .m {
            display: block;
        }
    }

    padding-top: 15.125em;
    section {
        margin-bottom: 20px;
    }

    em {
        font-family: 'GmarketSansBold';
    }
    p {
        display: inline;
        font-size: 1.875em;
        @media screen and (max-width: 767px) {
            font-size: 0.9375em;
        }
    }
    h1 {
        font-family: 'GmarketSansBold';
        font-size: 1.875em;
        margin-bottom: 17px;
        display: inline;
        @media screen and (max-width: 767px) {
            font-size: 0.9375em;
        }
    }
    div {
        margin-top: 130px;
        @media screen and (max-width: 767px) {
            margin-top: 3em;
        }
    }
`;

const WhiteBannerBox = styled.div`
    width: 58.5625em;
    height: 27.0625em;
    background-color: white;
    border-radius: 18px;
    border: 1px solid #675b4f;
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .second {
        width: 28.989375em;
        margin-top: -1em;
    }
    .third {
        width: 23.685em;
    }

    @media screen and (max-width: 767px) {
        width: 20.9375em;
        height: 13em;
        .second {
            width: 12.876875em;
        }
        .third {
            width: 9.625em;
        }
    }
`;

const WhiteBannerP = styled.p`
    font-size: 1.125em;
    line-height: 175.5%;
    text-align: center;
    margin-top: 3.875em;
    margin-bottom: 3.4375em;
    em {
        font-family: 'GmarketSansBold';
    }
    .m {
        display: none;
    }
    @media screen and (max-width: 767px) {
        .pc {
            display: none;
        }
        .m {
            display: block;
        }
        font-size: 0.75em;
        margin-bottom: 1.9375em;
        margin-top: 1.3125em;
    }
`;

const WhiteBannerImgBox = styled.div`
    width: 35.9375em;
    display: flex;
    justify-content: space-between;
    img {
        width: 15.1375em;
        @media screen and (max-width: 767px) {
            width: 5.809375em;
        }
    }

    @media screen and (max-width: 767px) {
        width: 16.0625em;
    }
`;

const Construction = styled.div`
    padding-top: 19.625em;
    @media screen and (max-width: 767px) {
        padding-top: 10.625em;
    }
`;

const WhiteBannerEndingP = styled.p`
    font-size: 1.875em;
    font-family: 'GmarketSansBold';
    color: #675b4f;
    line-height: 175.5%;
    margin-top: 13em;
    text-align: center;
    .m {
        display: none;
    }
    @media screen and (max-width: 767px) {
        font-size: 0.8125em;
        .m {
            display: block;
        }
        margin-top: 4em;
    }
`;

const Vision = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20.5em;
    @media screen and (max-width: 767px) {
        padding-top: 11.5em;
    }
`;
const VisionParagraph = styled.p`
    font-size: 1.375em;
    color: #989088;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 0.8125em;
    }
`;

const VisionCircleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    @media screen and (max-width: 767px) {
        margin-top: 3.9375em;
    }
`;

const VisionBigCircle = styled.div`
    width: 19.875em;
    height: 19.875em;
    border-radius: 100%;
    background: #aaa39f;
    border: 1px solid #4f4941;
    margin-bottom: 31.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #ffffff;
        font-size: 1.5625em;
    }
    @media screen and (max-width: 767px) {
        width: 8.5625em;
        height: 8.5625em;
        margin-bottom: 15.25em;
        p {
            font-size: 1.0625em;
        }
    }
`;

const VisionSmallCircle = styled.div`
    width: 17.3125em;
    height: 17.3125em;
    border-radius: 100%;
    border: 1px solid #4f4941;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #675b4f;
        font-size: 1.5625em;
    }
    @media screen and (max-width: 767px) {
        width: 7.5em;
        height: 7.5em;
        p {
            font-size: 0.8125em;
        }
    }
`;

const VisionCricleParagraph = styled.p`
    text-align: center;
`;

const VisionIntroContainer = styled.div`
    color: #989088;
    font-size: 1.375em;
    text-align: center;
    line-height: 151%;
    div {
        margin-top: 40px;
    }
    @media screen and (max-width: 767px) {
        font-size: 0.8125em;
        .pc {
            display: none;
        }
    }
`;
