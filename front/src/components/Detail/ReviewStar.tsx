import React, { useEffect, useState } from 'react';
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

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Inner>
            {Number.isNaN(starAvg) ? (
                <Box>
                    <h1>사용자 총 평점</h1>
                    <ImgBox>
                        <Star
                            star={0}
                            widthValue={
                                windowSize.width >= 768 ? 2.9375 : 0.8125
                            }
                        />
                    </ImgBox>
                    <div>
                        <h2>0 / 5</h2>
                    </div>
                </Box>
            ) : (
                <Box>
                    <h1>사용자 총 평점</h1>
                    <ImgBox>
                        <Star
                            star={starAvg}
                            widthValue={
                                windowSize.width >= 768 ? 2.9375 : 0.8125
                            }
                        />
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
    border: 0.0625em solid #675b4f;
    border-radius: 1.125em;
    display: flex;
    margin-top: 1.75em;
    margin-bottom: 3.625em;
    @media (max-width: 767px) {
        margin-top: 1.5625em;
        /* height: 132px; */
        margin-bottom: 1.8125em;
        border-radius: 0.625em;
    }

    /* img {
        width: 44px;
        height: 44px;
        color: #8e8372;
        border-radius: 1px;
        background-color: red;
    } */

    h1 {
        font-size: 1.5625em;
        color: #675b4f;
        margin-top: 4em;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.75em;
            margin-top: 1.25em;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 1.875em;
        color: #8b7e6a;
        @media (max-width: 767px) {
            font-size: 0.9375em;
            font-weight: bold;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 1.5625em;
        color: #8b7e6a;
    }

    h4 {
        @media (max-width: 767px) {
            font-size: 0.625em;
        }
    }
`;

const ImgBox = styled.div`
    margin-top: 3.25em;
    margin-bottom: 1.9375em;

    @media (max-width: 767px) {
        margin-top: 2.125em;
        margin-bottom: 0.6875em;
    }
`;

const Circle = styled.div`
    width: 8.5em;
    height: 8.5em;
    border-radius: 50%;
    border: 1px solid #8b7e6a;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.25em;
    margin-bottom: 3.3125em;

    @media (max-width: 767px) {
        width: 3em;
        height: 3em;
        margin-top: 2.0625em;
        margin-bottom: 1.4375em;
        h3 {
            font-weight: 500;
            font-size: 0.8125em;
            line-height: 0.8125em;
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

    margin-left: 1.3125em;

    @media (max-width: 767px) {
        margin-left: 0.5em;
    }
`;

type BarHeightType = {
    bar: number;
};

const PercentBar = styled.div<BarHeightType>`
    width: 0.875em;
    /* height: 85px; */
    height: ${(props) => props.bar}px;
    max-height: 4.9125em;
    min-height: 1.2625em;
    background: #d9d9d9;
    border-radius: 1.125em;

    margin-top: 0.4375em;
    margin-bottom: 0.6875em;

    @media (max-width: 767px) {
        max-height: 2.5em;
        min-height: 0.3125em;
        width: 0.3125em;
        margin-top: 0.3125em;
        margin-bottom: 0.5em;
    }
`;

const PercentBoxWrapper = styled.div`
    display: flex;
    margin-top: 0.9375em;
    margin-bottom: 2.5em;
    height: inherit;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: 767px) {
        margin-bottom: 1.5625em;
        margin-top: 0.125em;
    }
`;

const HighestPercent = styled.div`
    width: 1.825em;
    height: 1.7em;
    background: #8e8372;
    border-radius: 1.125em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        width: 1em;
        height: 0.75em;
        border-radius: 0.3125em;
        margin-top: 1.375em;
    }

    span {
        margin-top: 0.1875em; // align-center 잘안먹어서
        font-size: 0.875em;
        color: #ffffff;

        @media (max-width: 767px) {
            font-size: 0.375em;
            color: #ffffff;
            margin: 0 auto;
        }
    }

    + div {
        background: #8e8372;
    }
`;
