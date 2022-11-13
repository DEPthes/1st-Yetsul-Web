import React from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const MonthDrink: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <Head>
                    <h1>이달의 전통주</h1>
                    <span>전통주 이야기와 함께하는 이달의 전통주 추천!</span>
                </Head>
                <Content>
                    <MonthList>
                        <div>
                            <h1>9월</h1>
                            <MonthContent>
                                <DrinkImg
                                    src="/images/septemberDrink.png"
                                    alt="9Drink"
                                />
                                <AnimationBtnImg
                                    src="/images/MonthDrinkAnimationBtn.png"
                                    alt="9DrinkanimationBtn"
                                />
                            </MonthContent>
                        </div>
                        <div>
                            <h1>10월</h1>
                            <MonthContent>준비중</MonthContent>
                        </div>
                    </MonthList>
                </Content>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1129px;
    height: auto;
    padding-top: 147px;
`;
const AnimationBtnImg = styled.img`
    position: relative;
    top: 65px;
    left: -225px;
`;
const Head = styled.div`
    margin-top: 79px;
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #bbb6a8;
    padding-bottom: 40px;
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #454038;
        margin-bottom: 18px;
    }
    span {
        font-size: 20px;
    }
`;

const DrinkImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    position: absolute;
`;

const Content = styled.div`
    margin-top: 44px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const MonthList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    h1 {
        font-size: 25px;
        margin-bottom: 20px;
    }
`;

const MonthContent = styled.div`
    background-color: #eae8e4;
    width: 523px;
    height: 205px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
`;

export default MonthDrink;
