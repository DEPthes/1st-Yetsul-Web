/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* eslint-disable no-nested-ternary */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

type reviewLikeType = {
    id: number;
    title: string;
    content: string;
    star: number;
    reviewImgUrl: string;
    date: number;
    like: number;
    userId: number;
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
    const [likeType, setLikeType] = useState<reviewLikeType[]>([]);
    let [likeCount, setLikeCount] = useState(0);
    let [isLiked, setIsLiked] = useState(false);

    const getdata = () => {
        const accessToken = localStorage.getItem('accessToken') || '';
        console.log(accessToken);
        return axios.create({
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    };

    useEffect(() => {
        getdata()
            .post(
                `https://depth-server.herokuapp.com/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
            )
            .then((res) => {
                setLikeCount(res.data.like);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (isLiked === true) {
            setLikeCount((likeCount += 1));
        } else {
            setLikeCount((likeCount -= 1));
        }
    }, [isLiked]);

    const likeBtnHandler = () => {
        setIsLiked(!isLiked);
    };

    // useEffect(() => {
    //     console.log(reviewLike);
    //     console.log('reviewLike값 업데이트 될 때만 실행');
    // }, [reviewLike]);

    // const LikeBtnHandler = () => {
    //     setReviewLike(!reviewLike);
    //     if (reviewLike === true) {
    //         setLikeCount((likeCount += 1));
    //     } else setLikeCount((likeCount -= 1));
    // };

    return (
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
                                widthValue={29}
                                heightValue={27}
                            />
                            <h3>{starCount}개</h3>
                        </StarWrap>
                        <ReviewBoxHeadInfo>
                            <h3>{nickname}</h3>
                            <h3>{date.slice(0, 10)}</h3>
                        </ReviewBoxHeadInfo>

                        <ReviewBoxContentNoImg>
                            <h3>{content}</h3>
                            <ReviewLink
                                to={`/review/alcohol${alcoholId}/review${reviewId}`}
                            >
                                전체보기 {'>'}
                            </ReviewLink>
                        </ReviewBoxContentNoImg>
                    </ReviewBox>
                    <LikeBtn
                    // onClick={() => {
                    //     setReviewLike((reviewLike += 1));
                    // }}
                    >
                        👍
                        <span>{like}</span>
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
                                widthValue={29}
                                heightValue={27}
                            />
                            <h3>{starCount}개</h3>
                        </StarWrap>
                        <ReviewBoxHeadInfo>
                            <h3>{nickname}</h3>
                            <h3>{date.slice(0, 10)}</h3>
                        </ReviewBoxHeadInfo>

                        <ReviewBoxContent>
                            <h3>{content}</h3>
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
                        onClick={() => {
                            likeBtnHandler();
                        }}
                    >
                        👍
                        <span>{like}</span>
                    </LikeBtn>
                </ReviewsWrapper>
            )}
        </>
    );
};

export default BoardListElement;

const ReviewBoxContentNoImg = styled.div`
    width: 856px;
    height: 92px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-right: 47px;
    position: relative;

    h3 {
        font-size: 15px;
        color: #8b7e6a;
        margin: 20px 13px;
    }
`;

const ReviewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 58px;

    width: 1153px;
`;

const UserImgWrap = styled.div`
    margin-right: 17px;
    width: 103px;
    height: 103px;

    img {
        border-radius: 50%;
        object-fit: cover;
        width: 103px;
        height: 103px;
    }
`;

const ReviewImgWrap = styled.div`
    margin-right: 49px;
    width: 207px;
    height: 206px;
    background: #d9d9d9;
    border-radius: 18px;
    margin-top: 10px;

    img {
        width: 207px;
        height: 206px;
        border-radius: 18px;
        object-fit: cover;
    }
`;

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin-left: 13px;
        margin-bottom: 13px;
        font-size: 20px;
        color: #675b4f;
    }
`;

const ReviewBoxHeadInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 13px;
    margin-bottom: 20px;

    h3 {
        font-size: 15px;
        color: #8b7e6a;
        margin-right: 17px;
    }
`;

const StarWrap = styled.div`
    margin-left: 8px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;

    img {
        width: 33px;
        height: 33px;
        color: #8e8372;
        border-radius: 1px;
    }

    h3 {
        margin-left: 20px;
        font-size: 18px;
        color: #8b7e6a;
        padding-top: 6px;
    }
`;

const ReviewBoxContent = styled.div`
    width: 614px;
    height: 92px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-right: 35px;
    position: relative;

    h3 {
        font-size: 15px;
        color: #8b7e6a;
        margin: 20px 13px;
    }
`;

const ReviewLink = styled(Link)`
    border: none;
    background: none;
    font-family: inherit;
    font-size: 15px;
    color: #675b4f;
    position: absolute;
    bottom: 11px;
    right: 17px;
    text-decoration: none;
`;

const LikeBtn = styled.button`
    width: 107px;
    height: 56px;
    border: 1px solid #675b4f;
    border-radius: 52px;
    background: none;
    margin: auto 0;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        border: none;
        background: none;
        font-family: inherit;
        font-size: 15px;
        color: #000000;
        margin-left: 5px;
    }
`;
