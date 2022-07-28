import React from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const Service: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <Introduction>
                    <Heading>&#91; 옛술의 전당 소개 &#93;</Heading>
                    <QuoteBox>
                        <Quote>
                            &#34;신은 물을 만들고, 인간은 술을 만들었다.&#34;
                        </Quote>
                        <Speaker>-프랑스 대문호, 빅토르 위고-</Speaker>
                    </QuoteBox>
                    <GlassImg src="images/Group 218.png" />
                    <IntroParagraph>
                        저희 <em>&#60;옛술의 전당&#62;</em> 은 <br />
                        <br /> 전통주의 매력을 느껴볼 수 있도록 <br /> 본인에게
                        어울리는 술을 찾을 수 있도록 <br />
                        <em> 자랑스러운 전통주를 알릴 수 있도록 노력합니다.</em>
                    </IntroParagraph>
                </Introduction>
                <Construction>
                    <Heading>&#91; 옛술의 전당 구성 &#93;</Heading>
                    <ConstBigBox>
                        <ConstSmallBox>
                            <Circle />
                            <CircleExplanationBox>
                                <h2>전통주 역사</h2>
                                <p>
                                    “역사를 알고 빚으면 더욱 맛있다” <br />
                                    주종별로 전통주의 역사를 <br /> 확인해 볼 수
                                    있습니다.
                                </p>
                            </CircleExplanationBox>
                        </ConstSmallBox>
                        <ConstSmallBox>
                            <Circle />
                            <CircleExplanationBox>
                                <h2>전통주 추천</h2>
                                <p>
                                    “오늘은 어떤 전통주가 좋을까?” <br /> 날씨/
                                    기분/ 상황에 맞게 <br /> 전통주를
                                    추천해줍니다.
                                </p>
                            </CircleExplanationBox>
                        </ConstSmallBox>
                        <ConstSmallBox>
                            <Circle />
                            <CircleExplanationBox>
                                <h2>옛술의 전당 둘러보기</h2>
                                <p>
                                    “전통주는 뭐가 있을까.” <br /> 주종에 따라
                                    전통주를 <br />
                                    둘러볼 수 있습니다. 각 전통주의 <br />
                                    세부정보와 리뷰도 확인해보세요.
                                </p>
                            </CircleExplanationBox>
                        </ConstSmallBox>
                    </ConstBigBox>
                </Construction>
                <Vision>
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
`;

const Introduction = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 220px;
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
    margin-bottom: 230px;
`;
const Quote = styled.blockquote`
    font-family: 'GmarketSansMedium';

    font-size: 50px;
    line-height: 50px;
    color: #675b4f;
`;
const Speaker = styled.p`
    font-family: 'GmarketSansLight';

    font-size: 25px;
    line-height: 25px;
    color: #675b4f;
    margin-top: 20px;
`;
const GlassImg = styled.img`
    width: 132px;
    height: 91.38px;
`;
const IntroParagraph = styled.p`
    text-align: center;
    line-height: 1.6;
    font-size: 25px;
    em {
        font-family: 'GmarketSansBold';
    }
    margin-top: 100px;
`;

const Construction = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 220px;
`;

const ConstBigBox = styled.div`
    display: flex;
`;
const ConstSmallBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Circle = styled.div`
    width: 320px;
    height: 320px;
    border-radius: 100%;
    border: 1px solid #4f4941;
    margin: 0 45px;
`;

const CircleExplanationBox = styled.div`
    h2 {
        color: #675b4f;
        font-size: 30px;
        margin-top: 60px;
        margin-bottom: 30px;
    }
    p {
        color: #989088;
        font-size: 25px;
        line-height: 1.6;
    }
`;

const Vision = styled.section``;
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
