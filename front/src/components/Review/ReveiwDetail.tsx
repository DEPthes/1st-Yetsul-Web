/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { getAccessToken } from '../../services/tokenControl';
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
    star: string;
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
    const [isLike, setIsLike] = useState<boolean>(false);
    const [reviewCount, setReviewCount] = useState();
    const dispatch = useDispatch();
    const [heightValue, setHeightValue] = useState('auto');

    window.onload = async () => {
        setHeightValue('auto');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        console.log(document.getElementById('reviewDetail')!.clientHeight);
        if (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            document.getElementById('reviewDetail')!.clientHeight <=
            document.body.clientHeight
        ) {
            setHeightValue('100%');
            console.log('check');
        } else {
            setHeightValue('auto');
        }
    };

    useEffect(() => {
        const main = document.getElementById('listModalBack');
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav');
        dispatch(setListModal(false));
        $('body').css('overflow', 'auto');
        if (main) {
            main.className = '';
        }
        head.className = 'head';
        if (nav) {
            nav.className = 'right';
        }
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
            )
            .then((res) => {
                setReview(res.data);
                setReviewImg(res.data.reviewImgUrl);
            })

            .catch((err) => console.log(err));

        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${alcoholId}/spec`,
            )
            .then((res) => {
                setList(res.data.reviewsWithUserInfo);
                setdrink(res.data.alcohol);
                setReviewCount(res.data.totalReviewCount);
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
                const checkLike = res.data;
                setIsLike(checkLike === 'LIKE');
            });
    }, []);

    const listSplice = () => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === review.id) {
                console.log(list[i].id, i, review.id);

                // setList(list.splice(i, 1));
                // eslint-disable-next-line no-plusplus
                break;
            }
        }
    };

    useEffect(() => {
        listSplice();
    }, [list]);

    const onClickEdit = () => {
        navigate(`/review/alcohol${alcoholId}/review${reviewId}/edit`);
    };

    const onClickDelete = async () => {
        await axios.delete(
            `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
        );
        // eslint-disable-next-line no-alert
        alert('리뷰가 삭제되었습니다.');
        navigate(`/list/${alcoholId}/spec`);
    };

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

        const likeRate = isLike ? -1 : 1;
        console.log(isLike);

        setReview({ ...review, like: review.like + likeRate });
        setIsLike(!isLike);
    };

    const location = useLocation();

    React.useEffect(() => {
        const main = document.getElementById('listModalBack');
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav');
        dispatch(setListModal(false));
        $('body').css('overflow', 'auto');
        if (main) {
            main.className = '';
        }
        head.className = 'head';
        if (nav) {
            nav.className = 'right';
        }
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review?alcoholId=${alcoholId}&reviewId=${reviewId}`,
            )
            .then((res) => {
                setReview(res.data);
                setReviewImg(res.data.reviewImgUrl);
            })

            .catch((err) => console.log(err));

        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${alcoholId}/spec`,
            )
            .then((res) => {
                setList(res.data.reviewsWithUserInfo);
                setdrink(res.data.alcohol);
                setReviewCount(res.data.totalReviewCount);
            })

            .catch((err) => console.log(err));

        setHeightValue('auto');
        setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            console.log(document.getElementById('reviewDetail')!.clientHeight);
            if (
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                document.getElementById('reviewDetail')!.clientHeight <=
                document.body.clientHeight
            ) {
                setHeightValue('100%');
                console.log('check');
            } else {
                setHeightValue('auto');
            }
        }, 100);
    }, [location]);

    useEffect(() => {
        console.log(list);
    }, [list]);

    const goToAlcohol = () => {
        navigate(`/list/${alcoholId}/spec`);
    };

    return (
        <BackgroundTemplate heightValue={heightValue}>
            <Inner id="reviewDetail">
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
                            <h1 onClick={goToAlcohol} aria-hidden>
                                {drink.AlcoholName}
                            </h1>
                        </div>
                    </DrinkEl>

                    <DrinkEl>
                        <div>
                            <Star star={+drink.star} widthValue={0.938} />

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

                        <Star star={review.star} widthValue={2.438} />
                    </ReviewHeader>

                    <ContentHeader>
                        <div>
                            <LikeBtn onClick={onClickLike}>
                                👍 {review.like}{' '}
                            </LikeBtn>
                            <LikeBanner>추천을 눌러주세요</LikeBanner>
                        </div>
                        <div>
                            <h3>조회수 {review.viewCount}</h3>
                            <h3>|</h3>
                            <h3>{review.date?.slice(0, 10)}</h3>
                        </div>
                    </ContentHeader>
                    <Content>
                        {reviewImg.length > 0 && (
                            <ImgWrapper>
                                {reviewImg.map((i, index) => {
                                    // eslint-disable-next-line react/jsx-key
                                    return (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <li key={index}>
                                            <img src={i} alt="reviewImgUrl" />
                                        </li>
                                    );
                                })}
                            </ImgWrapper>
                        )}

                        <p>{review.content}</p>
                    </Content>
                    {review.userId === getUserLocalStorage().id && (
                        <EditWrap>
                            <EditBtn onClick={onClickEdit}>수정하기</EditBtn>
                            <DeleteBtn onClick={onClickDelete}>
                                삭제하기
                            </DeleteBtn>
                        </EditWrap>
                    )}
                </ReviewWrapper>

                <Header id="headerScroll">
                    <div>
                        <p>평점</p>
                    </div>
                    <div>
                        <p>제목</p>
                    </div>
                    <div>
                        <p>닉네임</p>
                    </div>
                    <div>
                        <p>작성일</p>
                    </div>
                    <div>
                        <p>추천수</p>
                    </div>
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
    margin: 1.25em 0 3.25em 0;
    @media (max-width: 767px) {
        bottom: -5.375em;
        position: absolute;
        margin: 0;
    }
`;

const DeleteBtn = styled.button`
    width: 7.95em;
    height: 2.55em;
    background: #ba0707;
    border: 1px solid #8b7e6a;
    border-radius: 0.9em;
    margin-left: 2em;
    cursor: pointer;

    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: -0.01em;
    color: #ffffff;
    @media (max-width: 767px) {
        width: 6.656923076923078em;
        height: 2.5384615384615383em;
        font-size: 0.8125em;
        margin-left: 0.7692307692307693em;
    }
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

    @media (max-width: 767px) {
        width: 6.656923076923078em;
        height: 2.5384615384615383em;
        font-size: 0.8125em;
    }
`;

const DrinkEl = styled.div`
    position: absolute;

    div {
        display: flex;
        align-items: center;
    }

    h1 {
        cursor: pointer;
        font-size: 1.563em;
        color: #675b4f;
        @media (max-width: 767px) {
            font-size: 1.125em;
            width: calc(100% - 2em);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    h3 {
        font-size: 1.25em;
        color: #8b7e6a;
        @media (max-width: 767px) {
            font-size: 0.8125em;
        }
    }

    span {
        width: 5.867em;
        height: 2.267em;
        font-size: 0.938em;
        color: #454038;

        border: 1px solid #454038;
        border-radius: 1.6em;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.133em;
        @media (max-width: 767px) {
            width: 4.5em;
            height: 1.5em;
            font-size: 0.625em;
            border-radius: 1.5em;
            margin-right: 0.8125em;
        }
    }
`;

const DrinkWrapper = styled.div`
    width: 71.563em;
    height: 10.188em;
    border: 1px solid #675b4f;
    border-radius: 1.125em;
    position: relative;

    margin-bottom: 1.75em;

    img {
        width: 5.625em;
        height: 6.75em;
        object-fit: cover;
    }

    div:first-child {
        top: 1.625em;
        left: 6.313em;
    }

    div:nth-child(2) {
        left: 28.25em;
        top: 2.875em;
    }

    div:nth-child(3) {
        left: 30.133em;
        top: 6.8em;

        font-size: 0.938em;
        color: #8b7e6a;

        button {
            margin-left: 0.667em;
            border: none;
            font-size: 1em;
            font-family: inherit;
            font-weight: inherit;
            color: #8b7e6a;
            background: rgba(0, 0, 0, 0);
        }
    }

    div:nth-child(4) {
        right: 6.188em;
        top: 3.188em;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 5.25em;
        img {
            width: 1.875em;
            height: 2.875em;
            object-fit: cover;
        }

        div:first-child {
            top: 1.3125em;
            left: 1.5625em;
        }

        div:nth-child(2) {
            left: 5.125em;
            top: 1.25em;
        }

        div:nth-child(3) {
            left: 6.833333333333333em;
            top: 4.25em;

            font-size: 0.75em;
            color: #8b7e6a;

            button {
                margin-left: 0.6333333333333333em;
                border: none;
                font-size: 1em;
                font-family: inherit;
                font-weight: inherit;
                color: #8b7e6a;
                background: rgba(0, 0, 0, 0);
            }
        }

        div:nth-child(4) {
            right: 1em;
            top: 1.5em;
        }
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;

    width: 70.563em;
    height: auto;
    padding-top: 9.188em;
    padding-bottom: 6.25em;

    li {
        list-style: none;
    }

    @media (max-width: 767px) {
        width: calc(100% - 5em);
        padding-top: 6.1875em;
        padding-bottom: 8.6875em;
    }
`;

const PrevBtn = styled.button`
    padding: 0.133em 0.8em;

    width: 3.867em;
    height: 2.867em;
    font-size: 0.938em;
    color: #3a3d40;
    background-color: inherit;

    border: 1px solid #675b4f;
    border-radius: 1.2em;
    margin-top: 6.667em;
    margin-bottom: 1.067em;

    :hover {
        cursor: pointer;
    }
    @media (max-width: 767px) {
        margin-top: 2.8666666666666667em;
        margin-bottom: 1.8em;
        border-radius: 0.6em;
        width: 2.6em;
        height: 1.9333333333333333em;
        font-size: 0.9375em;
    }
`;

const ImgWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    margin-bottom: 2.75em;
    img {
        width: 36.375em;
        height: 29.063em;
        object-fit: contain;
        margin-right: -1.375em;
        margin-bottom: 1.188em;
    }

    ::-webkit-scrollbar {
        height: 0.375em;
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
    @media (max-width: 767px) {
        margin-bottom: 1.1875em19px;
        img {
            width: 10em !important;
            height: 10.6875em !important;
            margin-right: 0.5em;
            margin-bottom: 0;
        }
        ::-webkit-scrollbar {
            height: 0.2em;
        } /* 스크롤 바 */
    }
`;

const Content = styled.div`
    font-size: 1.563em;
    color: #675b4f;
    padding: 1.68em 1.12em;
    > p {
        width: 100%;
        height: 12em;
        word-break: break-all;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            // width: 0.375em;
            width: 0.2em;
        }
        ::-webkit-scrollbar-thumb {
            background: #ddd;
            height: 2.5em;
        } /* 실질적 스크롤 바 */

        ::-webkit-scrollbar-thumb:hover {
            background: #675b4f;
        } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */

        ::-webkit-scrollbar-thumb:active {
            background: #808080;
        } /* 실질적 스크롤 바를 클릭할 때 */

        ::-webkit-scrollbar-button {
            display: none;
        }
    }
    @media (max-width: 767px) {
        font-size: 0.8125em;
        padding: 1.0769230769230769em 1.0769230769230769em 2.152em
            1.0769230769230769em;
    }
`;

const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2em;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        color: #8b7e6a;
        margin-left: 1em;
    }
    @media (max-width: 767px) {
        padding: 0.9375em 0.9375em;
        h3 {
            font-size: 0.625em;
        }
    }
`;

const LikeBanner = styled.div`
    width: 12.2em;
    height: 2.967em;
    background: #675b4f;
    border-radius: 1.2em;

    margin-left: 2.133em;

    font-size: 0.938em;

    color: #ffffff;
    @media (max-width: 767px) {
        font-size: 0.6875em;
        width: 8.181818181818182em;
        height: 1.1818181818181819em;
        border-radius: 2.1818181818181817em;
        margin-left: 1em;
        padding: 0.9090909090909091em 0.9090909090909091em;
        display: none !important;
    }
`;

const LikeBtn = styled.button`
    box-sizing: border-box;
    cursor: pointer;

    width: 5.688em;
    height: 2.5em;
    background-color: inherit;
    border: 1px solid #675b4f;
    border-radius: 3.25em;
    @media (max-width: 767px) {
        width: 3.375em;
        height: 1.625em;
    }
`;

const ReviewHeader = styled.div`
    height: 8.625em;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.813em;
    @media (max-width: 767px) {
        height: 4.905em;
        padding: 0 1.4375em;
        > div:nth-of-type(2) {
            svg {
                width: 0.8em;
            }
        }
    }
`;

const HeaderLeft = styled.div`
    h1 {
        font-size: 1.75em;

        color: #675b4f;
        margin-bottom: 0.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 12.857142857142858em;
    }

    h3 {
        font-size: 0.938em;
        color: #8b7e6a;
        width: 24em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.938em;
    }
    @media (max-width: 767px) {
        h1 {
            font-size: 0.9375em;
            width: 12em;
        }
        h3 {
            font-size: 0.75em;
            width: 13.333333333333334em;
        }
    }
`;

const ReviewWrapper = styled.div`
    width: 71.563em;

    border: 1px solid #b8b8b8;
    border-radius: 1.125em;
    @media (max-width: 767px) {
        width: 100%;
        border-radius: 0.75em;
        position: relative;
    }
`;
const Header = styled.div`
    margin-top: 3.125em;
    // 지우기
    width: 72.063em;
    height: 4.5em;
    border-top: 1px solid #bbb6a8;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        > p {
            font-size: 1.125em;
        }
        color: #8b7e6a;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:first-child {
        width: 11.438em;
    }

    div:nth-child(2) {
        width: 17.75em;
    }

    div:nth-child(3) {
        width: 7.813em;
    }

    div:nth-child(4) {
        width: 8.813em;
    }

    div:last-child {
        width: 4.75em;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;
