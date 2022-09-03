import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import Star from '../common/Star';
import { DrinkDetailElementType } from '../Detail/DrinkDetailElement';

type ReviewTemplateType = {
    Head: React.FC;
    Main: React.FC;
    Foot: React.FC;
    drinkInfo: DrinkDetailElementType;
};

const ReviewTemplate: React.FC<ReviewTemplateType> = ({
    Head,
    Main,
    Foot,
    drinkInfo,
}) => {
    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <div>
                    <Head />
                </div>
                <div>
                    <DrinkInfo>
                        <img src={drinkInfo.alcoholImage} alt="alcoholImage" />
                        <MainInfo>
                            <InfoHead>
                                <AlcoholType>
                                    {drinkInfo.category === 1 ? '탁주' : null}
                                    {drinkInfo.category === 2 ? '과실주' : null}
                                    {drinkInfo.category === 3 ? '약주' : null}
                                    {drinkInfo.category === 4 ? '청주' : null}
                                    {drinkInfo.category === 5 ? '증류주' : null}
                                    {drinkInfo.category === 6
                                        ? '리큐르주'
                                        : null}
                                </AlcoholType>
                                <AlcoholNames>
                                    {drinkInfo.AlcoholName}
                                </AlcoholNames>
                            </InfoHead>

                            <InfoBottom>
                                <div>
                                    <Star
                                        star={drinkInfo.star}
                                        widthValue={24}
                                        heightValue={24}
                                    />
                                </div>

                                <SeeReviewLink to="/">
                                    (리뷰 +100) &gt;
                                </SeeReviewLink>
                            </InfoBottom>
                        </MainInfo>
                        <AlcoholVolume>
                            {drinkInfo.AlcoholByVolume}%
                        </AlcoholVolume>
                    </DrinkInfo>
                    <div>
                        <Main />
                    </div>
                    <div>
                        <Foot />
                    </div>
                </div>
            </Inner>
        </BackgroundTemplate>
    );
};

export default ReviewTemplate;

const Inner = styled.div`
    padding-top: 179px;
    display: flex;
    flex-direction: column;
    width: 1153px;
    height: auto;
`;

const DrinkInfo = styled.div`
    width: 100%;
    height: 163px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const InfoHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 22px;
`;

const InfoBottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const AlcoholType = styled.div`
    width: 76px;
    height: 34px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #454038;
    border-radius: 24px;
    color: #454038;
`;

const AlcoholNames = styled.div`
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 25px;
    color: #bbb6a8;
    letter-spacing: -0.01em;
    margin-top: 6px;
    margin-left: 17px;
`;

const SeeReviewLink = styled(Link)`
    text-decoration: none;
    margin-left: 5px;

    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #8b7e6a;
`;

const AlcoholVolume = styled.div`
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #8b7e6a;
`;
