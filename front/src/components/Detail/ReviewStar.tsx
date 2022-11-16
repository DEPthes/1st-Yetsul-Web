import React, { useState } from 'react';
import styled from 'styled-components';
import Star from '../common/Star';

type ReviewStarType = {
    starAvg: number; // 사용자 총 평점 별 개수, 사용자 총 평점
    reviewCount: number; // 리뷰 수
    starPercent: number[];
    highestPercent: number;
    mostStars: number[];
};

const ReviewStar: React.FC<ReviewStarType> = ({
    starAvg,
    reviewCount,
    starPercent,
    highestPercent,
    mostStars,
}) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    return (
        <Inner>
            {Number.isNaN(starAvg) ? (
                <Box>
                    <h1>사용자 총 평점</h1>
                    <ImgBox>
                        <Star star={0} widthValue={1.8125} />
                    </ImgBox>
                    <div>
                        <h2>0 / 5</h2>
                    </div>
                </Box>
            ) : (
                <Box>
                    <h1>사용자 총 평점</h1>
                    <ImgBox>
                        <Star star={starAvg} widthValue={1.8125} />
                    </ImgBox>
                    <div>
                        <h2>{starAvg} / 5</h2>
                    </div>
                </Box>
            )}

            <Box>
                <h1>리뷰 수</h1>
                <Circle>
                    <h3>{reviewCount}개</h3>
                </Circle>
            </Box>
            <Box>
                <h1>평점 비율</h1>

                <PercentBoxWrapper>
                    {highestPercent === starPercent[4] ? (
                        <PercentBox>
                            <HighestPercent>
                                <span>{mostStars[4]}</span>
                            </HighestPercent>
                            <PercentBar bar={starPercent[4] * 330} />
                            <h4>5</h4>
                        </PercentBox>
                    ) : (
                        <PercentBox>
                            <PercentBar bar={starPercent[4] * 330} />
                            <h4>5</h4>
                        </PercentBox>
                    )}

                    {highestPercent === starPercent[3] ? (
                        <PercentBox>
                            <HighestPercent>
                                <span>{mostStars[3]}</span>
                            </HighestPercent>
                            <PercentBar bar={starPercent[3] * 330} />
                            <h4>4</h4>
                        </PercentBox>
                    ) : (
                        <PercentBox>
                            <PercentBar bar={starPercent[3] * 330} />
                            <h4>4</h4>
                        </PercentBox>
                    )}

                    {highestPercent === starPercent[2] ? (
                        <PercentBox>
                            <HighestPercent>
                                <span>{mostStars[2]}</span>
                            </HighestPercent>
                            <PercentBar bar={starPercent[2] * 330} />
                            <h4>3</h4>
                        </PercentBox>
                    ) : (
                        <PercentBox>
                            <PercentBar bar={starPercent[2] * 330} />
                            <h4>3</h4>
                        </PercentBox>
                    )}
                    {highestPercent === starPercent[1] ? (
                        <PercentBox>
                            <HighestPercent>
                                <span>{mostStars[1]}</span>
                            </HighestPercent>
                            <PercentBar bar={starPercent[1] * 330} />
                            <h4>2</h4>
                        </PercentBox>
                    ) : (
                        <PercentBox>
                            <PercentBar bar={starPercent[1] * 330} />
                            <h4>2</h4>
                        </PercentBox>
                    )}
                    {highestPercent === starPercent[0] ? (
                        <PercentBox>
                            <HighestPercent>
                                <span>{mostStars[0]}</span>
                            </HighestPercent>
                            <PercentBar bar={starPercent[0] * 330} />
                            <h4>1</h4>
                        </PercentBox>
                    ) : (
                        <PercentBox>
                            <PercentBar bar={starPercent[0] * 330} />
                            <h4>1</h4>
                        </PercentBox>
                    )}
                </PercentBoxWrapper>
            </Box>
        </Inner>
    );
};
export default ReviewStar;

const Inner = styled.div`
    width: 100%;
    /* height: 306px; */
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    margin-top: 28px;
    margin-bottom: 58px;
    @media (max-width: 767px) {
        margin-top: 25px;
        /* height: 132px; */
        margin-bottom: 29px;
        border-radius: 10px;
    }

    /* img {
        width: 44px;
        height: 44px;
        color: #8e8372;
        border-radius: 1px;
        background-color: red;
    } */

    h1 {
        font-size: 25px;
        color: #675b4f;
        margin-top: 64px;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 12px;
            margin-top: 20px;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 30px;
        color: #8b7e6a;
        @media (max-width: 767px) {
            font-size: 15px;
            font-weight: bold;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 25px;
        color: #8b7e6a;
    }

    h4 {
        @media (max-width: 767px) {
            font-size: 10px;
        }
    }
`;

const ImgBox = styled.div`
    margin-top: 52px;
    margin-bottom: 31px;

    @media (max-width: 767px) {
        margin-top: 34px;
        margin-bottom: 11px;
    }
`;

const Circle = styled.div`
    width: 136px;
    height: 136px;
    border-radius: 50%;
    border: 1px solid #8b7e6a;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 53px;

    @media (max-width: 767px) {
        width: 48px;
        height: 48px;
        margin-top: 33px;
        margin-bottom: 23px;
        h3 {
            font-weight: 500;
            font-size: 13px;
            line-height: 13px;
        }
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
`;

const PercentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-left: 21px;

    @media (max-width: 767px) {
        margin-left: 8px;
    }
`;

type BarHeightType = {
    bar: number;
};

const PercentBar = styled.div<BarHeightType>`
    width: 14px;
    /* height: 85px; */
    height: ${(props) => props.bar}px;
    max-height: 85px;
    min-height: 17px;
    background: #d9d9d9;
    border-radius: 18px;

    margin-top: 7px;
    margin-bottom: 11px;

    @media (max-width: 767px) {
        max-height: 40px;
        min-height: 5px;
        width: 5px;
        margin-top: 5px;
        margin-bottom: 8px;
    }
`;

const PercentBoxWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    height: inherit;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: 767px) {
        margin-bottom: 25px;
    }
`;

const HighestPercent = styled.div`
    width: 26px;
    height: 20px;
    background: #8e8372;
    border-radius: 18px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        width: 16px;
        height: 12px;
        border-radius: 5px;
        margin-top: 22px;
    }

    span {
        margin-top: 3px; // align-center 잘안먹어서
        font-size: 14px;
        color: #ffffff;

        @media (max-width: 767px) {
            font-size: 6px;
            color: #ffffff;
            margin: 0 auto;
        }
    }

    + div {
        background: #8e8372;
    }
`;
