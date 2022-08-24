import React from 'react';
import styled from 'styled-components';

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
    const StarSrc = (starCount: number) => {
        // 별 반쪽 채워진 거 받고 수정해야됨
        const result = [];
        if (starCount === 0) {
            result.push(
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount <= 1.5) {
            result.push(
                '/images/StarFill.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount <= 2.5) {
            result.push(
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount <= 3.5) {
            result.push(
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount <= 4.5) {
            result.push(
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/Star.png',
            );
        } else {
            result.push(
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
            );
        }

        result.toString();

        return (
            <div>
                <img src={result[0]} alt="star" />
                <img src={result[1]} alt="star" />
                <img src={result[2]} alt="star" />
                <img src={result[3]} alt="star" />
                <img src={result[4]} alt="star" />
            </div>
        );
    };

    return (
        <Inner>
            {Number.isNaN(starAvg) ? (
                <Box>
                    <h1>사용자 총 평점</h1>
                    <ImgBox>{StarSrc(0)}</ImgBox>
                    <div>
                        <h2>0 / 5</h2>
                    </div>
                </Box>
            ) : (
                <Box>
                    <h1>사용자 총 평점</h1>
                    <ImgBox>{StarSrc(starAvg)}</ImgBox>
                    <div>
                        <h2>{starAvg} / 5</h2>
                    </div>
                </Box>
            )}

            <Box>
                <h1>리뷰 수</h1>
                <Circle>
                    <h3>{reviewCount}</h3>
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
    width: 1154px;
    height: 306px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    margin-top: 28px;
    margin-bottom: 58px;

    img {
        width: 44px;
        height: 44px;
        color: #8e8372;
        border-radius: 1px;
    }

    h1 {
        font-size: 25px;
        color: #675b4f;

        margin-top: 64px;
    }

    h2 {
        font-weight: 500;
        font-size: 30px;
        color: #8b7e6a;
    }

    h3 {
        font-weight: 500;
        font-size: 25px;
        color: #8b7e6a;
    }
`;

const ImgBox = styled.div`
    margin-top: 52px;
    margin-bottom: 31px;
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
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 33.3%;
`;

const PercentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-left: 21px;
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
`;

const PercentBoxWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    height: inherit;
    align-items: flex-end;
    justify-content: center;
`;

const HighestPercent = styled.div`
    width: 26px;
    height: 20px;
    background: #8e8372;
    border-radius: 18px;
    display: flex;
    justify-content: center;

    span {
        margin-top: 3px; // align-center 잘안먹어서
        font-size: 14px;
        color: #ffffff;
    }

    + div {
        background: #8e8372;
    }
`;
