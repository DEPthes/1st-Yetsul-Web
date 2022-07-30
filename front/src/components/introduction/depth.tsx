import React from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const Depth: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <Introduction>
                    <Section1>
                        <Title> &#91; DEPth : 뎁스 &#93;</Title>
                    </Section1>
                    <Section2>
                        <Pic src="/images/DEPth.jpeg" alt="뎁스_단체사진" />
                    </Section2>
                    <Section3>
                        <p>
                            &#34;START from Scratch, CHALLENGE, then it’s going
                            to be DEEP &#34;
                        </p>
                    </Section3>

                    <Section4>
                        <p>
                            2022년, “서비스 런칭”을 목표로 12명의 명지대생이
                            모여 기획, 개발, 디자인 분야가 함께 모여 스터디하고
                            협업해 나가고 있습니다. <br />
                            “열정과 배울 의지”로 뭉쳐 ‘지식’과 ‘경험’을 추구하며
                            시작된 하나의 프로젝트, 그 시작을 &#60;옛술의 전당
                            &#62;과 함께합니다.
                        </p>
                    </Section4>
                </Introduction>
            </Inner>
        </BackgroundTemplate>
    );
};
export default Depth;

const Inner = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section1 = styled.section`
    margin-bottom: 50px;
    margin-top: 100px;
`;

const Section2 = styled.section`
    margin-bottom: 70px;
    width: 593px;
    height: 322px;
`;

const Section3 = styled.section`
    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    color: #675b4f;
    margin-bottom: 50px;
`;
const Section4 = styled.section`
    line-height: 2;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #989088;
`;

const Title = styled.p`
    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    color: #675b4f;
    width: 100%;
`;

const Pic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #c3baae;
    border-radius: 42.5px;
`;
