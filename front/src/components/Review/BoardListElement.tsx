/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import { initial } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

/* eslint-disable no-nested-ternary */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAccessToken } from '../../services/tokenControl';
import Star from '../common/Star';

type reviewType = {
    userImg: string; // user 프로필 사진
    nickname: string; // user 이름
    title: string; // review 제목
    // star: string; // 별점
    starCount: number; // 별점 개수
    content: string; // review 내용
    date: string; // review 작성 날짜
    like: number; // 추천 수
    reviewImg: string; // review 사진
    reviewId: number;
    alcoholId: number;
};

const BoardListElement: React.FC<reviewType> = ({
    userImg,
    nickname,
    title,
    // star,
    starCount,
    content,
    date,
    like,
    reviewImg,
    reviewId,
    alcoholId,
}) => {
    const [reviewLike, setReviewLike] = useState(like);
    const [isLiked, setIsLiked] = useState(false);
    const [initial, setInitial] = useState(false);

    useEffect(() => {
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/likeornot/${reviewId}`,
                {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                },
            )
            .then((res) => {
                if (res.data === 'LIKE') {
                    setInitial(true);
                } else if (res.data === 'NOT') {
                    setInitial(false);
                }

                console.log('isLiked', isLiked);
                console.log('initial', initial);
            })
            .catch((err) => console.log(err));
    }, [isLiked]);

    const onClickLike = async () => {
        await axios.post(
            `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            },
        );

        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
            )
            .then((res) => {
                setReviewLike(res.data.like);
            })
            .catch((err) => console.log(err));

        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/likeornot/${reviewId}`,
                {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                },
            )
            .then((res) => {
                if (res.data === 'LIKE') {
                    setIsLiked(true);
                } else if (res.data === 'NOT') {
                    setIsLiked(false);
                }
            })
            .catch((err) => console.log(err));
    };

    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    const reviewImgArr = (reviewImg: string) => {
        const result = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < reviewImg.length; i++) {
            result.push(reviewImg[i]);
        }
        return result;
    };
    return (
        <Inner>
            {isMobile ? (
                <>
                    {reviewImg.length < 1 ? (
                        <MReviewsWrapper>
                            <MUserImgWrap>
                                <img src={userImg} alt={userImg} />
                            </MUserImgWrap>

                            <ReviewBox>
                                <MReviewBoxTop>
                                    <h3>{nickname}</h3>
                                    <h3>{date.slice(0, 10)}</h3>
                                </MReviewBoxTop>
                                <MReviewTitle>{title}</MReviewTitle>
                                <MReviewBoxBottom>
                                    <div>
                                        <Star
                                            star={starCount}
                                            widthValue={0.7}
                                        />
                                    </div>

                                    <h3>{starCount}개</h3>
                                    <LikeBtn
                                        onClick={onClickLike}
                                        backgrond={
                                            initial === true
                                                ? '#675b4f'
                                                : 'none'
                                        }
                                        color={
                                            initial === true
                                                ? '#fff'
                                                : '#675b4f'
                                        }
                                    >
                                        <svg
                                            width="18"
                                            height="19"
                                            viewBox="0 0 18 19"
                                            fill={
                                                initial === true
                                                    ? '#fff'
                                                    : '#675b4f'
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4125 7.09331C12.0975 7.09331 11.88 7.09331 11.88 7.09331C12.315 5.68415 12.795 3.41203 11.3025 2.50953C10.8975 2.26411 9.68249 1.87619 9.50999 2.60453C9.26999 3.60203 9.03749 4.59953 8.47499 5.47828C8.00999 6.1987 7.30499 6.99831 6.42749 7.09331C6.42749 7.1329 6.42749 7.18038 6.42749 7.18038V14.5033C6.42749 14.5033 6.42749 14.7012 6.42749 14.8991C6.51749 14.9308 6.60749 14.9625 6.60749 14.9625L8.18249 15.5087C8.69999 15.6908 9.23999 15.7858 9.78749 15.7858H13.635C14.4 15.7858 15.0225 15.1366 15.0225 14.337C15.0225 14.147 14.985 13.9729 14.9175 13.8066C15.51 13.6325 15.9375 13.0704 15.9375 12.4054C15.9375 12.0333 15.81 11.6929 15.585 11.4316C15.8025 11.1783 15.9375 10.8379 15.9375 10.4737C15.9375 10.1016 15.81 9.76121 15.585 9.49996C15.8025 9.24663 15.9375 8.90619 15.9375 8.54203C15.9375 7.74244 15.315 7.09331 14.5575 7.09331C14.5575 7.09331 13.1925 7.09331 12.4125 7.09331Z"
                                                stroke={
                                                    initial === true
                                                        ? '#675b4f'
                                                        : '#fff'
                                                }
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.0625 5.84241H4.68C5.64 5.84241 6.42 6.66575 6.42 7.67908V14.9941C6.42 16.0074 5.64 16.8307 4.68 16.8307H2.0625V5.84241Z"
                                                stroke={
                                                    initial === true
                                                        ? '#675b4f'
                                                        : '#fff'
                                                }
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.24504 14.8356C4.56813 14.8356 4.83004 14.5591 4.83004 14.2181C4.83004 13.8771 4.56813 13.6006 4.24504 13.6006C3.92195 13.6006 3.66003 13.8771 3.66003 14.2181C3.66003 14.5591 3.92195 14.8356 4.24504 14.8356Z"
                                                fill={
                                                    initial === true
                                                        ? '#675b4f'
                                                        : '#fff'
                                                }
                                            />
                                        </svg>
                                        <span>{reviewLike}</span>
                                    </LikeBtn>
                                </MReviewBoxBottom>

                                <ReviewBoxContentNoImg>
                                    <h3>
                                        {content.length >= 55 ? (
                                            <>{content.slice(0, 50)}...</>
                                        ) : (
                                            content
                                        )}
                                    </h3>
                                    <ReviewLink
                                        to={`/review/alcohol${alcoholId}/review${reviewId}`}
                                    >
                                        전체보기 {'>'}
                                    </ReviewLink>
                                </ReviewBoxContentNoImg>
                            </ReviewBox>
                        </MReviewsWrapper>
                    ) : (
                        <MReviewsWrapper>
                            {userImg === '' || null || undefined ? (
                                <MUserImgWrap>
                                    <img
                                        src="/images/userDefaultProfileImg.png"
                                        alt={userImg}
                                    />
                                </MUserImgWrap>
                            ) : (
                                <MUserImgWrap>
                                    <img src={userImg} alt={userImg} />
                                </MUserImgWrap>
                            )}

                            <ReviewBox>
                                <MReviewBoxTop>
                                    <h3>{nickname}</h3>
                                    <h3>{date.slice(0, 10)}</h3>
                                </MReviewBoxTop>
                                <MReviewTitle>{title}</MReviewTitle>
                                <MReviewBoxBottom>
                                    <div>
                                        {' '}
                                        <Star
                                            star={starCount}
                                            widthValue={0.7}
                                        />
                                    </div>
                                    <h3>{starCount}개</h3>

                                    <LikeBtn
                                        onClick={onClickLike}
                                        backgrond={
                                            initial === true
                                                ? '#675b4f'
                                                : 'none'
                                        }
                                        color={
                                            initial === true
                                                ? '#fff'
                                                : '#675b4f'
                                        }
                                    >
                                        <svg
                                            width="18"
                                            height="19"
                                            viewBox="0 0 18 19"
                                            fill={
                                                initial === true
                                                    ? '#fff'
                                                    : '#675b4f'
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4125 7.09331C12.0975 7.09331 11.88 7.09331 11.88 7.09331C12.315 5.68415 12.795 3.41203 11.3025 2.50953C10.8975 2.26411 9.68249 1.87619 9.50999 2.60453C9.26999 3.60203 9.03749 4.59953 8.47499 5.47828C8.00999 6.1987 7.30499 6.99831 6.42749 7.09331C6.42749 7.1329 6.42749 7.18038 6.42749 7.18038V14.5033C6.42749 14.5033 6.42749 14.7012 6.42749 14.8991C6.51749 14.9308 6.60749 14.9625 6.60749 14.9625L8.18249 15.5087C8.69999 15.6908 9.23999 15.7858 9.78749 15.7858H13.635C14.4 15.7858 15.0225 15.1366 15.0225 14.337C15.0225 14.147 14.985 13.9729 14.9175 13.8066C15.51 13.6325 15.9375 13.0704 15.9375 12.4054C15.9375 12.0333 15.81 11.6929 15.585 11.4316C15.8025 11.1783 15.9375 10.8379 15.9375 10.4737C15.9375 10.1016 15.81 9.76121 15.585 9.49996C15.8025 9.24663 15.9375 8.90619 15.9375 8.54203C15.9375 7.74244 15.315 7.09331 14.5575 7.09331C14.5575 7.09331 13.1925 7.09331 12.4125 7.09331Z"
                                                stroke={
                                                    initial === true
                                                        ? '#675b4f'
                                                        : '#fff'
                                                }
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.0625 5.84241H4.68C5.64 5.84241 6.42 6.66575 6.42 7.67908V14.9941C6.42 16.0074 5.64 16.8307 4.68 16.8307H2.0625V5.84241Z"
                                                stroke={
                                                    initial === true
                                                        ? '#675b4f'
                                                        : '#fff'
                                                }
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.24504 14.8356C4.56813 14.8356 4.83004 14.5591 4.83004 14.2181C4.83004 13.8771 4.56813 13.6006 4.24504 13.6006C3.92195 13.6006 3.66003 13.8771 3.66003 14.2181C3.66003 14.5591 3.92195 14.8356 4.24504 14.8356Z"
                                                fill={
                                                    initial === true
                                                        ? '#675b4f'
                                                        : '#fff'
                                                }
                                            />
                                        </svg>
                                        <span>{reviewLike}</span>
                                    </LikeBtn>
                                </MReviewBoxBottom>
                                <ReviewBoxContent>
                                    <h3>
                                        {content.length >= 40 ? (
                                            <>{content.slice(0, 40)}...</>
                                        ) : (
                                            content
                                        )}
                                    </h3>
                                    <ReviewLink
                                        to={`/review/alcohol${alcoholId}/review${reviewId}`}
                                    >
                                        전체보기 {'>'}
                                    </ReviewLink>
                                </ReviewBoxContent>
                                <ReviewImgWrap>
                                    {reviewImg.length < 2 ? (
                                        <img src={reviewImg} alt={userImg} />
                                    ) : (
                                        <MReviewImgWrapper>
                                            {reviewImgArr(reviewImg).map(
                                                (r) => {
                                                    return (
                                                        // eslint-disable-next-line react/jsx-key
                                                        <div>
                                                            <MReviewimg
                                                                src={r}
                                                                alt={r}
                                                            />
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </MReviewImgWrapper>
                                    )}
                                </ReviewImgWrap>
                            </ReviewBox>
                        </MReviewsWrapper>
                    )}
                </>
            ) : (
                <>
                    {reviewImg.length < 1 ? (
                        <ReviewsWrapper>
                            <UserImgWrap>
                                <img src={userImg} alt={userImg} />
                            </UserImgWrap>

                            <ReviewBox>
                                <h1>{title}</h1>
                                <StarWrap>
                                    <Star
                                        star={starCount}
                                        widthValue={1.8125}
                                    />
                                    <h3>{starCount}개</h3>
                                </StarWrap>
                                <ReviewBoxHeadInfo>
                                    <h3>{nickname}</h3>
                                    <h3>{date.slice(0, 10)}</h3>
                                </ReviewBoxHeadInfo>

                                <ReviewBoxContentNoImg>
                                    <h3>
                                        {content.length >= 55 ? (
                                            <>{content.slice(0, 50)}...</>
                                        ) : (
                                            content
                                        )}
                                    </h3>
                                    <ReviewLink
                                        to={`/review/alcohol${alcoholId}/review${reviewId}`}
                                    >
                                        전체보기 {'>'}
                                    </ReviewLink>
                                </ReviewBoxContentNoImg>
                            </ReviewBox>
                            <LikeBtn
                                onClick={onClickLike}
                                backgrond={
                                    initial === true ? '#675b4f' : 'none'
                                }
                                color={initial === true ? '#fff' : '#675b4f'}
                            >
                                <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill={initial === true ? '#fff' : '#675b4f'}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.4125 7.09331C12.0975 7.09331 11.88 7.09331 11.88 7.09331C12.315 5.68415 12.795 3.41203 11.3025 2.50953C10.8975 2.26411 9.68249 1.87619 9.50999 2.60453C9.26999 3.60203 9.03749 4.59953 8.47499 5.47828C8.00999 6.1987 7.30499 6.99831 6.42749 7.09331C6.42749 7.1329 6.42749 7.18038 6.42749 7.18038V14.5033C6.42749 14.5033 6.42749 14.7012 6.42749 14.8991C6.51749 14.9308 6.60749 14.9625 6.60749 14.9625L8.18249 15.5087C8.69999 15.6908 9.23999 15.7858 9.78749 15.7858H13.635C14.4 15.7858 15.0225 15.1366 15.0225 14.337C15.0225 14.147 14.985 13.9729 14.9175 13.8066C15.51 13.6325 15.9375 13.0704 15.9375 12.4054C15.9375 12.0333 15.81 11.6929 15.585 11.4316C15.8025 11.1783 15.9375 10.8379 15.9375 10.4737C15.9375 10.1016 15.81 9.76121 15.585 9.49996C15.8025 9.24663 15.9375 8.90619 15.9375 8.54203C15.9375 7.74244 15.315 7.09331 14.5575 7.09331C14.5575 7.09331 13.1925 7.09331 12.4125 7.09331Z"
                                        stroke={
                                            initial === true
                                                ? '#675b4f'
                                                : '#fff'
                                        }
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.0625 5.84241H4.68C5.64 5.84241 6.42 6.66575 6.42 7.67908V14.9941C6.42 16.0074 5.64 16.8307 4.68 16.8307H2.0625V5.84241Z"
                                        stroke={
                                            initial === true
                                                ? '#675b4f'
                                                : '#fff'
                                        }
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.24504 14.8356C4.56813 14.8356 4.83004 14.5591 4.83004 14.2181C4.83004 13.8771 4.56813 13.6006 4.24504 13.6006C3.92195 13.6006 3.66003 13.8771 3.66003 14.2181C3.66003 14.5591 3.92195 14.8356 4.24504 14.8356Z"
                                        fill={
                                            initial === true
                                                ? '#675b4f'
                                                : '#fff'
                                        }
                                    />
                                </svg>
                                <span>{reviewLike}</span>
                            </LikeBtn>
                        </ReviewsWrapper>
                    ) : (
                        <ReviewsWrapper>
                            {userImg === '' || null || undefined ? (
                                <UserImgWrap>
                                    <img
                                        src="/images/userDefaultProfileImg.png"
                                        alt={userImg}
                                    />
                                </UserImgWrap>
                            ) : (
                                <UserImgWrap>
                                    <img src={userImg} alt={userImg} />
                                </UserImgWrap>
                            )}

                            <ReviewBox>
                                <h1>{title}</h1>
                                <StarWrap>
                                    <Star
                                        star={starCount}
                                        widthValue={1.8125}
                                    />
                                    <h3>{starCount}개</h3>
                                </StarWrap>
                                <ReviewBoxHeadInfo>
                                    <h3>{nickname}</h3>
                                    <h3>{date.slice(0, 10)}</h3>
                                </ReviewBoxHeadInfo>

                                <ReviewBoxContent>
                                    <h3>
                                        {content.length >= 40 ? (
                                            <>{content.slice(0, 40)}...</>
                                        ) : (
                                            content
                                        )}
                                    </h3>
                                    <ReviewLink
                                        to={`/review/alcohol${alcoholId}/review${reviewId}`}
                                    >
                                        전체보기 {'>'}
                                    </ReviewLink>
                                </ReviewBoxContent>
                            </ReviewBox>
                            <ReviewImgWrap>
                                {reviewImg.length < 2 ? (
                                    <img src={reviewImg} alt={userImg} />
                                ) : (
                                    <img src={reviewImg[0]} alt={userImg} />
                                )}
                            </ReviewImgWrap>

                            <LikeBtn
                                onClick={onClickLike}
                                backgrond={
                                    initial === true ? '#675b4f' : 'none'
                                }
                                color={initial === true ? '#fff' : '#675b4f'}
                            >
                                <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill={initial === true ? '#fff' : '#675b4f'}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.4125 7.09331C12.0975 7.09331 11.88 7.09331 11.88 7.09331C12.315 5.68415 12.795 3.41203 11.3025 2.50953C10.8975 2.26411 9.68249 1.87619 9.50999 2.60453C9.26999 3.60203 9.03749 4.59953 8.47499 5.47828C8.00999 6.1987 7.30499 6.99831 6.42749 7.09331C6.42749 7.1329 6.42749 7.18038 6.42749 7.18038V14.5033C6.42749 14.5033 6.42749 14.7012 6.42749 14.8991C6.51749 14.9308 6.60749 14.9625 6.60749 14.9625L8.18249 15.5087C8.69999 15.6908 9.23999 15.7858 9.78749 15.7858H13.635C14.4 15.7858 15.0225 15.1366 15.0225 14.337C15.0225 14.147 14.985 13.9729 14.9175 13.8066C15.51 13.6325 15.9375 13.0704 15.9375 12.4054C15.9375 12.0333 15.81 11.6929 15.585 11.4316C15.8025 11.1783 15.9375 10.8379 15.9375 10.4737C15.9375 10.1016 15.81 9.76121 15.585 9.49996C15.8025 9.24663 15.9375 8.90619 15.9375 8.54203C15.9375 7.74244 15.315 7.09331 14.5575 7.09331C14.5575 7.09331 13.1925 7.09331 12.4125 7.09331Z"
                                        stroke={
                                            initial === true
                                                ? '#675b4f'
                                                : '#fff'
                                        }
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.0625 5.84241H4.68C5.64 5.84241 6.42 6.66575 6.42 7.67908V14.9941C6.42 16.0074 5.64 16.8307 4.68 16.8307H2.0625V5.84241Z"
                                        stroke={
                                            initial === true
                                                ? '#675b4f'
                                                : '#fff'
                                        }
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.24504 14.8356C4.56813 14.8356 4.83004 14.5591 4.83004 14.2181C4.83004 13.8771 4.56813 13.6006 4.24504 13.6006C3.92195 13.6006 3.66003 13.8771 3.66003 14.2181C3.66003 14.5591 3.92195 14.8356 4.24504 14.8356Z"
                                        fill={
                                            initial === true
                                                ? '#675b4f'
                                                : '#fff'
                                        }
                                    />
                                </svg>
                                <span>{reviewLike}</span>
                            </LikeBtn>
                        </ReviewsWrapper>
                    )}
                </>
            )}
        </Inner>
    );
};

export default BoardListElement;

const MReviewsWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
`;

const MReviewTitle = styled.div`
    font-weight: 400;
    font-size: 1.0625em;
    line-height: 1.0625em;
    margin-left: 4.975em;
`;

const MReviewBoxTop = styled.div`
    display: flex;
    margin-bottom: 0.911em;
    margin-left: 5.375em;
    justify-content: space-between;

    h3 {
        font-weight: 400;
        font-size: 0.6875em;
        line-height: 0.6875em;
    }
`;

const MReviewBoxBottom = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5.375em;
    margin-bottom: 1.875em;

    justify-content: space-between;

    div {
        display: flex;
    }

    button {
        width: 7.142857142857143em; // 50
        height: 3.7142857142857144em; //26
        font-size: 0.4375em; // 7
    }
    h3 {
        font-size: 0.625em;
        margin-left: -8.9375em;
    }
`;

const Inner = styled.div`
    width: 72.063em;

    @media (max-width: 767px) {
        width: 19.6875em;
    }
`;

const ReviewBoxContentNoImg = styled.div`
    width: 53.5em;
    height: 5.75em;
    border: 0.0625em solid #675b4f;
    border-radius: 1.125em;
    margin-right: 2.9375em;
    position: relative;

    @media (max-width: 767px) {
        width: 19.6875em;
        height: 6.625em;
    }

    h3 {
        font-size: 0.9375em;
        color: #8b7e6a;
        margin: 1.25em 0.8125em;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.9375em;
            line-height: 124%;
        }
    }
`;

const ReviewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.625em;

    width: inherit;
`;

const UserImgWrap = styled.div`
    margin-right: 1.0625em;
    width: 6.4375em;
    height: 6.4375em;
    img {
        border-radius: 50%;
        object-fit: cover;
        width: 6.4375em;
        height: 6.4375em;
    }
`;

const MUserImgWrap = styled.div`
    position: relative;
    img {
        position: absolute;
        border-radius: 50%;
        object-fit: cover;
        width: 4.3125em;
        height: 4.3125em;
    }
`;

const ReviewImgWrap = styled.div`
    margin-right: 3.0625em;
    width: 12.9375em;
    height: 12.875em;

    border-radius: 1.125em;
    margin-top: 0.625em;
    @media (max-width: 767px) {
        width: 100%;
        height: 8.5625em;

        white-space: nowrap;
    }

    img {
        width: 12.9375em;
        height: 12.875em;
        border-radius: 1.125em;
        object-fit: cover;

        @media (max-width: 767px) {
            width: 8.625em;
            height: 8.5625em;
            margin-right: 0.5em;
        }
    }
`;

const MReviewImgWrapper = styled.div`
    border-radius: 1.125em;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    div {
        width: 8.625em;
        height: 8.5625em;
        margin-right: 0.5em;
    }
`;

const MReviewimg = styled.img`
    img {
        width: 8.625em;
        height: 8.5625em;
        border-radius: 1.125em;
        object-fit: cover;
    }
`;

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        width: 100%;
    }

    h1 {
        margin-left: 0.8125em;
        margin-bottom: 0.8125em;
        font-size: 1.25em; // 20px
        color: #675b4f;
    }
`;

const ReviewBoxHeadInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.8125em;
    margin-bottom: 1.25em;

    h3 {
        font-size: 0.9375em;
        color: #8b7e6a;
        margin-right: 1.0625em;
    }
`;

const StarWrap = styled.div`
    margin-left: 0.5em;
    margin-bottom: 0.5625em;
    display: flex;
    align-items: center;

    img {
        width: 2.0625em;
        height: 2.0625em;
        color: #8e8372;
        border-radius: 0.0625em;
    }

    h3 {
        margin-left: 1.25em;
        font-size: 1.125em;
        color: #8b7e6a;
        padding-top: 0.375em;
    }
`;

const ReviewBoxContent = styled.div`
    width: 38.375em;
    height: 5.75em;
    border: 0.0625em solid #675b4f;
    border-radius: 1.125em;
    margin-right: 2.1875em;
    position: relative;

    @media (max-width: 767px) {
        width: 100%;
        height: 6.625em;
    }

    h3 {
        font-size: 0.9375em;
        color: #8b7e6a;
        margin: 1.25em 13px;
    }
`;

const ReviewLink = styled(Link)`
    border: none;
    background: none;
    font-family: inherit;
    font-size: 0.9375em;
    color: #675b4f;
    position: absolute;
    bottom: 0.6875em;
    right: 1.0625em;
    text-decoration: none;
`;

const LikeBtn = styled.button<{
    backgrond: string;
    color: string;
}>`
    width: 80px;
    height: 56px;
    border: 1px solid #675b4f;
    border-radius: 52px;
    margin: auto 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.backgrond};

    span {
        border: none;
        background: none;
        font-family: inherit;
        font-size: 0.9375em;
        color: ${(props) => props.color};
        margin-left: 0.3125em;
    }
`;

const ReviewCount = styled.span``;
