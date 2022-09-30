/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Scrollspy } from '@makotot/ghostui';
import BackgroundTemplate from '../common/BackgroundTemplate';

const Service: React.FC = () => {
    const sectionRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];
    const SIZE = 3;
    const list = new Array(SIZE).fill(0);
    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <Scrollspy sectionRefs={sectionRefs}>
                    {({ currentElementIndexInViewport }) => (
                        <div>
                            <InnerNav>
                                <InnerNavUl data-cy="nav-wrapper">
                                    {list.map((_, i) => (
                                        <li
                                            key={i}
                                            className={
                                                currentElementIndexInViewport ===
                                                i
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <a
                                                href={`#section-${i}`}
                                                style={{
                                                    color:
                                                        currentElementIndexInViewport ===
                                                        i
                                                            ? '#f00'
                                                            : '#222',
                                                }}
                                            >
                                                section-{i + 1}
                                            </a>
                                        </li>
                                    ))}
                                </InnerNavUl>
                            </InnerNav>
                            <div data-cy="section-wrapper">
                                {list.map((_, i) => (
                                    <div
                                        id={`section-${i}`}
                                        key={i}
                                        ref={sectionRefs[i]}
                                        className={
                                            currentElementIndexInViewport === i
                                                ? 'active'
                                                : ''
                                        }
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '500px',
                                            backgroundColor: `#${i}${i}${i}`,
                                            color: '#fff',
                                            fontSize: '2rem',
                                        }}
                                    >
                                        {i}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Scrollspy>
                <Introduction>
                    <QuoteBox>
                        <Quote>
                            &#34;신은 물을 만들고, 인간은 술을 만들었다.&#34;
                        </Quote>
                        <Speaker>-프랑스 대문호, 빅토르 위고-</Speaker>
                    </QuoteBox>
                    <IntroSlogan>
                        청춘을 위해 한잔, 옛술의 전당에서 건배!
                    </IntroSlogan>
                    <IntroImgAlcohole
                        src="/images/introImg_AlcoholeGlass.png"
                        alt="티켓"
                    />
                    <IntroParagraph id="section-1">
                        <section>
                            <h1>&#60;옛술의 전당&#62;</h1>
                            <p>은</p>
                        </section>
                        <br />
                        &#60;옛술의 전당&#62;은 자신에게 어울리는 전통주를 찾고
                        전통주의 매력을 한층 더 느끼며 <br /> 전통주를 즐길 수
                        있게 하는 것을 목표로 궁극적으로는 <br />
                        <em>&#34;우리의 자랑스런 전통주를 알리기 위해 &#34;</em>
                        시작되었습니다.
                        <div>
                            우리의 옛술이 더 이상 ‘전통주’ 자체가 아닌 모두가
                            함께 즐길 수 있는 술로 <br /> 거듭나도록
                            <em>
                                &#60;옛술의 전당&#62;은 다양한 서비스를
                                제공합니다.
                            </em>
                        </div>
                    </IntroParagraph>
                </Introduction>
                <Construction id="section-2">
                    <WhiteBannerBox>
                        <WhiteBannerP>
                            <em> 첫 째. &#91;옛술의 전당 매표소&#93;</em>와
                            <em>&#91;술롯머신&#93;</em>을 통해 나에게 어울리는
                            전통주를 추천받을 수 있습니다.
                        </WhiteBannerP>
                        <WhiteBannerImgBox>
                            <img src="/images/introImg_TICKET.png" alt="티켓" />
                            <img src="/images/introImg_SLOT.png" alt="티켓" />
                        </WhiteBannerImgBox>
                    </WhiteBannerBox>
                    <WhiteBannerBox>
                        <WhiteBannerP>
                            <em>둘 째. [옛술리스트] </em>를 통해 수백 가지의
                            다양한 전통주 정보를 제공하며 리뷰 작성을 통해{' '}
                            <br />
                            <em>나만의 `옛술리스트` </em>를 만들어갈 수
                            있습니다. <br />
                            <img
                                src="/images/introImg_2ndBanner.png"
                                alt="2nd banner"
                                style={{
                                    marginTop: '60px',
                                }}
                            />
                        </WhiteBannerP>
                    </WhiteBannerBox>
                    <WhiteBannerBox>
                        <WhiteBannerP>
                            <em>셋 째. [전통주 역사] </em>를 통해 우리 전통주의
                            역사를 주종 별로 알아볼 수 있습니다. <br />
                            <img
                                src="/images/introImg_3rdBanner.png"
                                alt="3rd 배너"
                                style={{
                                    marginTop: '40px',
                                }}
                            />
                        </WhiteBannerP>
                    </WhiteBannerBox>
                </Construction>
                <WhiteBannerEndingP>
                    당신의 청춘을 위한 한 잔, 옛술의 전당에서 즐겨보는건
                    어떨까요?
                </WhiteBannerEndingP>
                <Vision id="section-3">
                    <Heading>&#91; 옛술의 전당 비전 &#93;</Heading>
                    <VisionParagraph>
                        저희 &#60;옛술의 전당&#62;은 3가지를 추구합니다.
                    </VisionParagraph>
                    <VisionCircleBox>
                        <VisionSmallCircle>
                            <VisionCricleParagraph color="#675B4F">
                                전통주 시장 <br /> 활성화에 기여
                            </VisionCricleParagraph>
                        </VisionSmallCircle>
                        <VisionBigCircle>
                            <VisionCricleParagraph color="#FFFFFF">
                                전통주의 대중화를 <br /> 추구
                            </VisionCricleParagraph>
                        </VisionBigCircle>
                        <VisionSmallCircle>
                            <VisionCricleParagraph color="#675B4F">
                                전통주의 <br /> 신선한 이미지를 <br /> 제공
                            </VisionCricleParagraph>
                        </VisionSmallCircle>
                    </VisionCircleBox>
                    <VisionIntroContainer>
                        2021년 기준, 전체 주류 소비 중 전통주가 차지하는 비율은
                        약 8%에 불과합니다. <br /> &#40;출처 2021 주류트렌드
                        보고서&#41; <br /> &#39;옛술의 전당&#39;은 주류 시장에서
                        전통주의 판매 비율이 증가할 수 있도록 <br /> 소비자에게
                        다양한 컨텐츠를 제공합니다. <br />
                        <div>
                            세대를 아울러 전통주의 매력을 느낄 수 있도록 <br />
                            전통주의 신선한 이미지를 제고합니다.
                        </div>
                    </VisionIntroContainer>
                </Vision>
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
    padding-top: 320px;
    padding-bottom: 1000px;
    z-index: 2;
    background-image: url('/images/introServiceBg.png');
    background-size: cover;
`;

const Introduction = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 220px;
`;

const InnerNav = styled.nav`
    width: 64.03px;
`;

const InnerNavUl = styled.ul`
    list-style: none;
    position: fixed;
    top: 0;
    right: 0;
    background-color: red;
    padding: 1rem;
`;

const Heading = styled.h1`
    font-family: 'GmarketSansBold';
    font-size: 40px;
    line-height: 175.5%;
    color: #675b4f;
    margin-bottom: 120px;
    text-align: center;
`;
const QuoteBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 550px;
`;
const Quote = styled.blockquote`
    font-family: 'GmarketSansMedium';
    font-size: 30px;
    line-height: 50px;
    color: #675b4f;
`;

const IntroSlogan = styled.div`
    font-size: 25px;
    line-height: 175.5%;
    color: #675b4f;
    font-family: 'GmarketSansBold';
    margin-bottom: 94px;
`;

const Speaker = styled.p`
    font-family: 'GmarketSansLight';
    font-size: 18px;
    line-height: 25px;
    color: #675b4f;
    margin-top: 20px;
`;

const IntroImgAlcohole = styled.img`
    margin-bottom: 150px;
`;

const IntroParagraph = styled.p`
    text-align: center;
    line-height: 175.5%;
    font-size: 25px;

    padding-top: 150px;
    section {
        margin-bottom: 20px;
    }

    em {
        font-family: 'GmarketSansBold';
    }
    p {
        display: inline;
        font-size: 30px;
    }
    h1 {
        font-family: 'GmarketSansBold';
        font-size: 30px;
        margin-bottom: 17px;
        display: inline;
    }
    div {
        margin-top: 130px;
    }
`;

const WhiteBannerBox = styled.div`
    width: 1129px;
    height: 464px;
    background-color: white;
    border-radius: 18px;
    border: 1px solid #675b4f;
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WhiteBannerP = styled.p`
    font-size: 22px;
    line-height: 175.5%;
    text-align: center;
    margin-top: 64px;
    margin-bottom: 64px;
    em {
        font-family: 'GmarketSansBold';
    }
`;

const WhiteBannerImgBox = styled.div`
    width: 708px;
    display: flex;
    justify-content: space-between;
`;

const Construction = styled.div`
    padding-top: 150px;
`;

const WhiteBannerEndingP = styled.p`
    font-size: 30px;
    font-family: 'GmarketSansBold';
    color: #675b4f;
    line-height: 175.5%;
    margin-top: 243px;
    margin-bottom: 257px;
`;

const Vision = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
`;
const VisionParagraph = styled.p`
    font-size: 32.5px;
    color: #989088;
    text-align: center;
`;

const VisionCircleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

const VisionBigCircle = styled.div`
    width: 439px;
    height: 439px;
    border-radius: 100%;
    background: #aaa39f;
    border: 1px solid #4f4941;
    margin-bottom: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const VisionSmallCircle = styled.div`
    width: 337px;
    height: 337px;
    border-radius: 100%;
    border: 1px solid #4f4941;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const VisionCricleParagraph = styled.p`
    text-align: center;
    color: ${(props) => props.color};
    font-size: 35px;
`;

const VisionIntroContainer = styled.div`
    color: #989088;
    font-size: 30px;
    text-align: center;
    line-height: 151%;
    margin-top: -130px;
    div {
        margin-top: 40px;
    }
`;
