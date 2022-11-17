import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import Star from '../common/Star';
import { DrinkDetailElementType } from '../Detail/DrinkDetailElement';

type ReviewTemplateType = {
    Head: React.FC;
    Main: React.FC;
    drinkInfo: DrinkDetailElementType;
    reviewCount: number;
};

const ReviewTemplate: React.FC<ReviewTemplateType> = ({
    Head,
    Main,
    drinkInfo,
    reviewCount,
}) => {
    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <div>
                    <Head />
                </div>
                <div>
                    <DrinkInfo>
                        <ImgWrapper>
                            <img
                                src={drinkInfo.alcoholImage}
                                alt="alcoholImage"
                            />
                        </ImgWrapper>

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
                                        star={+drinkInfo.star}
                                        widthValue={0.9375}
                                    />
                                </div>

                                <SeeReviewLink
                                    to={`/list/${drinkInfo.id}/spec`}
                                >
                                    {`(리뷰 +${reviewCount})`} &gt;
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
                </div>
            </Inner>
        </BackgroundTemplate>
    );
};

export default ReviewTemplate;

const Inner = styled.div`
    padding-top: 11.188em;
    display: flex;
    flex-direction: column;
    width: 54.75em;
    height: auto;
    @media (max-width: 767px) {
        width: calc(100% - 3.125em);
        padding-top: 8.688em;
    }
`;

const DrinkInfo = styled.div`
    width: 100%;
    height: 7.375em;
    border: 1px solid #675b4f;
    border-radius: 1.125em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 767px) {
        height: 5.25em;
        border-radius: 0.75em;
    }
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 3.188em;
    @media (max-width: 767px) {
        padding-right: 1.125em;
    }
`;

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.438em;
    > img {
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 767px) {
        height: 2.25em;
        width: 2.25em;
        > img {
            width: 100%;
            font-size: 0.313em;
        }
    }
`;

const InfoHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.063em;
    @media (max-width: 767px) {
        margin-bottom: 0.938em;
    }
`;

const InfoBottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const AlcoholType = styled.div`
    width: 6.067em;
    height: 2.267em;
    line-height: 2.4em;
    text-align: center;
    border: 1px solid #454038;
    border-radius: 1.6em;
    color: #454038;
    font-size: 0.938em;
    @media (max-width: 767px) {
        width: 4.5em;
        height: 1.6em;
        line-height: 2em;
        font-size: 0.625em;
        color: #675b4f;
        border: 1px solid #675b4f;
    }
`;

const AlcoholNames = styled.div`
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 1.563em;
    line-height: 1em;
    color: #675b4f;
    letter-spacing: -0.01em;
    margin-top: 0.24em;
    margin-left: 0.68em;
    @media (max-width: 767px) {
        margin-top: 0.167em;
        font-size: 1.125em;
        line-height: 1em;
        width: 6.756em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const SeeReviewLink = styled(Link)`
    text-decoration: none;
    margin-left: 0.333em;

    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: bold;
    font-size: 0.938em;
    color: #8b7e6a;
    @media (max-width: 767px) {
        font-size: 0.75em;
        line-height: 1em;
        margin-left: 0.583em;
    }
`;

const AlcoholVolume = styled.div`
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: -0.01em;
    color: #8b7e6a;
    @media (max-width: 767px) {
        font-size: 0.813em;
        line-height: 1em;
    }
`;
