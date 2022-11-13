/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { getUserLocalStorage } from '../../services/userControl';
import { setListModal } from '../../store/slices/listModalSlice';
import BackgroundTemplate from '../common/BackgroundTemplate';
import Star from '../common/Star';
import ReviewDetailList from './ReviewDetailList';

type ReviewDetailElType = {
    id: number;
    title: string;
    content: string;
    star: number;
    reviewImgUrl: [];
    date: string;
    like: number;
    userId: number;
    alcoholId: number;
    viewCount: number;
    profileImg: string;
    nickname: string;
};

type listType = {
    star: number;
    title: string;
    id: number;
    nickname: string;
    date: string;
    like: number;
};

type drinkType = {
    AlcoholName: string;
    category: number;
    star: number;
    AlcoholByVolume: string;
    alcoholImage: string;
    id: number;
};

const ReviewDetail: React.FC = () => {
    const navigate = useNavigate();
    const { alcoholId } = useParams();
    const { reviewId } = useParams();
    const [review, setReview] = useState<ReviewDetailElType>(Object);
    const [reviewImg, setReviewImg] = useState([]);
    const [list, setList] = useState<listType[]>([]);
    const [drink, setdrink] = useState<drinkType>(Object);
    const [reviewCount, setReviewCount] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const main = document.getElementById('listModalBack');
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav');
        dispatch(setListModal(false));
        $('body').css('overflow', 'scroll');
        if (main) {
            main.className = '';
        }
        head.className = 'head';
        if (nav) {
            nav.className = 'right';
        }
        axios
            .get(
                `http://depth-server.herokuapp.com/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
            )
            .then((res) => {
                setReview(res.data);
                setReviewImg(res.data.reviewImgUrl);
            })

            .catch((err) => console.log(err));

        axios
            .get(`http://depth-server.herokuapp.com/review/${alcoholId}/spec`)
            .then((res) => {
                setList(res.data.reviewsWithUserInfo);
                setdrink(res.data.alcohol);
                setReviewCount(res.data.totalReviewCount);
            })

            .catch((err) => console.log(err));
    }, []);

    const listSplice = () => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === review.id) {
                list.splice(i, 1);
                // eslint-disable-next-line no-plusplus
                i--;
            }
        }
    };

    useEffect(() => {
        listSplice();
    }, [list]);

    const onClickEdit = () => {
        navigate(`/review/alcohol${alcoholId}/review${reviewId}/edit`);
    };

    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <PrevBtn
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    {'<'}
                </PrevBtn>

                <DrinkWrapper>
                    <DrinkEl>
                        <img src={drink.alcoholImage} alt={alcoholId} />
                    </DrinkEl>

                    <DrinkEl>
                        <div>
                            <span>
                                {drink.category === 1 ? '탁주' : null}
                                {drink.category === 2 ? '과실주' : null}
                                {drink.category === 3 ? '약주' : null}
                                {drink.category === 4 ? '청주' : null}
                                {drink.category === 5 ? '증류주' : null}
                                {drink.category === 6 ? '리큐르주' : null}
                            </span>
                            <h1>{drink.AlcoholName}</h1>
                        </div>
                    </DrinkEl>

                    <DrinkEl>
                        <div>
                            <Star
                                star={drink.star}
                                widthValue={15}
                                heightValue={15}
                            />

                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: 1400,
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                (리뷰 +{reviewCount}) {'>'}
                            </button>
                        </div>
                    </DrinkEl>

                    <DrinkEl>
                        <h3>{drink.AlcoholByVolume}%</h3>
                    </DrinkEl>
                </DrinkWrapper>

                <ReviewWrapper>
                    <ReviewHeader>
                        <HeaderLeft>
                            <h1>{review.title}</h1>
                            <h3>{review.nickname}</h3>
                        </HeaderLeft>

                        <Star
                            star={review.star}
                            widthValue={38.63}
                            heightValue={39}
                        />
                    </ReviewHeader>

                    <ContentHeader>
                        <div>
                            <LikeBtn>👍 {review.like} </LikeBtn>
                            <LikeBanner>추천을 눌러주세요</LikeBanner>
                        </div>
                        <div>
                            <h3>조회수 {review.viewCount}</h3>
                            <h3>|</h3>
                            <h3>{review.date?.slice(0, 10)}</h3>
                        </div>
                    </ContentHeader>
                    <Content>
                        <ImgWrapper>
                            {reviewImg &&
                                reviewImg.map((i, index) => {
                                    // eslint-disable-next-line react/jsx-key
                                    return (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <li key={index}>
                                            <img src={i} alt="reviewImgUrl" />
                                        </li>
                                    );
                                })}
                        </ImgWrapper>
                        {review.content}
                    </Content>
                    {review.userId === getUserLocalStorage().id && (
                        <EditWrap>
                            <EditBtn onClick={onClickEdit}>수정하기</EditBtn>
                        </EditWrap>
                    )}
                </ReviewWrapper>

                <Header id="headerScroll">
                    <div>평점</div>
                    <div>제목</div>
                    <div>닉네임</div>
                    <div>작성일</div>
                    <div>추천수</div>
                </Header>

                {list.map((list, index) => {
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={index}>
                            <ReviewDetailList
                                alcoholId={drink.id}
                                id={list.id}
                                star={list.star}
                                title={list.title}
                                nickname={list.nickname}
                                date={list.date}
                                like={list.like}
                            />
                        </li>
                    );
                })}
            </Inner>
        </BackgroundTemplate>
    );
};

export default ReviewDetail;

const EditWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.25em 0px 0px 0px;
`;

const EditBtn = styled.button`
    width: 7.95em;
    height: 2.55em;
    background: #8b7e6a;
    border: 1px solid #8b7e6a;
    border-radius: 0.9em;
    cursor: pointer;

    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: -0.01em;
    color: #ffffff;
`;

const DrinkEl = styled.div`
    position: absolute;

    div {
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: 25px;
        color: #675b4f;
    }

    h3 {
        font-size: 20px;
        color: #8b7e6a;
    }

    span {
        width: 76px;
        height: 34px;
        font-size: 15px;
        color: #454038;

        border: 1px solid #454038;
        border-radius: 24px;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 17px;
    }
`;

const DrinkWrapper = styled.div`
    width: 1145px;
    height: 163px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    position: relative;

    margin-bottom: 28px;

    img {
        width: 90px;
        height: 108px;
        object-fit: cover;
    }

    div:first-child {
        top: 26px;
        left: 101px;
    }

    div:nth-child(2) {
        left: 452px;
        top: 46px;
    }

    div:nth-child(3) {
        left: 452px;
        top: 102px;

        font-size: 15px;
        color: #8b7e6a;

        button {
            margin-left: 10px;
            border: none;
            font-size: 15px;
            font-family: inherit;
            font-weight: inherit;
            color: #8b7e6a;
        }
    }

    div:nth-child(4) {
        right: 99px;
        top: 51px;
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;

    width: 1129px;
    height: auto;
    padding-top: 147px;
    padding-bottom: 100px;

    li {
        list-style: none;
    }
`;

const PrevBtn = styled.button`
    padding: 2px 12px;

    width: 58px;
    height: 43px;
    font-size: 15px;
    color: #3a3d40;
    background-color: inherit;

    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-top: 100px;
    margin-bottom: 16px;

    :hover {
        cursor: pointer;
    }
`;
const ImgWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    margin-bottom: 44px;
    img {
        width: 582px;
        height: 465px;
        object-fit: contain;
        margin-right: 22px;
        margin-bottom: 19px;
    }

    ::-webkit-scrollbar {
        height: 6px;
    } /* 스크롤 바 */

    ::-webkit-scrollbar-thumb {
        background: #ddd;
    } /* 실질적 스크롤 바 */

    ::-webkit-scrollbar-thumb:hover {
        background: #675b4f;
    } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */

    ::-webkit-scrollbar-thumb:active {
        background: #808080;
    } /* 실질적 스크롤 바를 클릭할 때 */

    ::-webkit-scrollbar-button {
        display: none;
    } /* 스크롤 바 상 하단 버튼 */
`;

const Content = styled.div`
    font-size: 25px;
    color: #675b4f;
    padding: 42px 28px;
`;

const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        font-size: 15px;
        color: #8b7e6a;
        margin-left: 15px;
    }
`;

const LikeBanner = styled.div`
    width: 153px;
    height: 32px;
    background: #675b4f;
    border-radius: 18px;

    margin-left: 32px;

    font-size: 15px;

    color: #ffffff;
`;

const LikeBtn = styled.button`
    box-sizing: border-box;

    width: 107px;
    height: 56px;
    background-color: inherit;
    border: 1px solid #675b4f;
    border-radius: 52px;
`;

const ReviewHeader = styled.div`
    height: 138px;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 45px;
`;

const HeaderLeft = styled.div`
    h1 {
        font-size: 28px;

        color: #675b4f;
        margin-bottom: 14px;
    }

    h3 {
        font-size: 15px;
        color: #8b7e6a;
    }
`;

const ReviewWrapper = styled.div`
    width: 1145px;
    padding-bottom: 60px;

    border: 1px solid #b8b8b8;
    border-radius: 18px;
`;
const Header = styled.div`
    margin-top: 50px;
    // 지우기
    width: 1153px;
    height: 72px;
    border-top: 1px solid #bbb6a8;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        font-size: 18px;
        color: #8b7e6a;
    }

    div:first-child {
        margin-right: 359px;
    }

    div:nth-child(2) {
        margin-right: 284px;
    }

    div:nth-child(3) {
        margin-right: 93px;
    }

    div:last-child {
        margin-left: 76px;
    }
`;
