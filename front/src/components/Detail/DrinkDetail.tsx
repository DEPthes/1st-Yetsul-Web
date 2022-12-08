/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAccessToken } from '../../services/tokenControl';
import { getUserLocalStorage } from '../../services/userControl';
import { RootState } from '../../store/config';
import { setListModal } from '../../store/slices/listModalSlice';
import BackgroundTemplate from '../common/BackgroundTemplate';
import BoardListElement from '../Review/BoardListElement';
import ImageListModal from '../Review/ImageListModal';
import DrinkDetailElement from './DrinkDetailElement';
import ReviewStar from './ReviewStar';

export interface DrinkDetailType {
    // alcohol : { }
    id: number; // 술 id
    AlcoholName: string; // 술 이름
    category: number; // 주종
    brewery: string; // 양조장
    price: number; // 가격
    AlcoholByVolume: number; // 도수
    sweet: boolean; // 달달함
    bitter: boolean; // 쓴 맛
    refreshing: boolean; // 상큼함
    clean: boolean; // 깔끔함
    cool: boolean; // 청량함
    sour: boolean; // 신 맛
    description: string; // 술 설명
    star: string; // 술 별 점
    alcoholImage: string; // 술 사진
    likeCount: number; // 술 찜 횟수
    reviewCount: number; // 리뷰 수
}

export type ReviewType = {
    // reviewsWithUserInfo : []
    id: number;
    title: string; // 리뷰 제목
    content: string; // 리뷰 내용
    star: number; // 해당 리뷰 별점
    reviewImgUrl: string; // 리뷰 이미지
    date: string; // 리뷰 게시일
    like: number; // 해당 리뷰가 받은 좋아요 수
    userId: number; // 해당 리뷰 작성 userId
    profileImg: string; // 해당 리뷰 작성 user img
    alcoholId: number;
    nickname: string;
};

const DrinkDetail: React.FC = () => {
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    const { id } = useParams();

    const [drinks, setDrinks] = useState<DrinkDetailType>(Object); // 술 상세 정보
    const [reviews, setReviews] = useState<ReviewType[]>([]); // 리뷰 보드리스트
    const [reviewForSort, setReviewForSort] = useState<ReviewType[]>([]); // 리뷰 정렬 시 포토 후기 빼고 랜더링 다시 하기 위해
    const [starPercent, setStarPercent] = useState([]); // 평점비율
    const [isSelected, setSelected] = useState([true, false, false, false]); // 버튼 선택 유무

    useEffect(() => {
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${id}/spec`,
            )
            .then((res) => {
                setDrinks(res.data.alcohol);
                setReviews(res.data.reviewsWithUserInfo);
                setStarPercent(res.data.starPercentArray);
                setReviewForSort(res.data.reviewsWithUserInfo);
            })

            .catch((err) => console.log(err));
    }, []);

    const StarPercentControl = () => {
        // 별점 비율
        const starPercentArr: number[] = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 5; i++) {
            starPercentArr.push(starPercent[i]);
        }

        return starPercentArr;
    };

    const PhotoReviewSrcArr = (): Array<(string | number)[]> => {
        // 해당 리뷰에 달린 포토 url 가져오고 빈 값 제외한 배열 생성
        const photoArr: Array<(string | number)[]> = [];

        reviews.forEach((p) => {
            return photoArr.push([p.reviewImgUrl[0], p.id]); // 사진이 2개 이상인거 있을 때, 그냥일 때 첫 번째 사진만 보여줌
        });

        const newArr = photoArr.filter(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (element, i) => element[0] !== undefined || null || '',
        );
        newArr.reverse(); // 최신순으로 보여줌

        return newArr;
    };

    const EachStarCount = () => {
        // 별점 각각 개수 구하기
        const EachStarCountArr: number[] = [0, 0, 0, 0, 0];

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].star === 1) {
                EachStarCountArr[0] += 1;
            } else if (reviews[i].star === 2) {
                EachStarCountArr[1] += 1;
            } else if (reviews[i].star === 3) {
                EachStarCountArr[2] += 1;
            } else if (reviews[i].star === 4) {
                EachStarCountArr[3] += 1;
            } else {
                EachStarCountArr[4] += 1;
            }
        }

        return EachStarCountArr;
    };

    const StarAvg = () => {
        // 리뷰 평점

        let sum = 0;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < reviews.length; i++) {
            sum += reviews[i].star;
        }
        const avg = sum / reviews.length;
        return Math.round(avg);
    };

    const sortByDate = () => {
        const sortedByDateReviews = reviewForSort
            .slice(0)
            .sort((a: ReviewType, b: ReviewType) => {
                return (
                    new Date(a.date.slice(0, 10)).valueOf() -
                    new Date(b.date.slice(0, 10)).valueOf()
                );
            });
        setReviewForSort(sortedByDateReviews);
        setSelected([true, false, false, false]);
    };

    const sortByDateDesc = () => {
        // 모바일 용 오래된 순
        const sortedByDateReviews = reviewForSort
            .slice(0)
            .sort((a: ReviewType, b: ReviewType) => {
                return (
                    new Date(b.date.slice(0, 10)).valueOf() -
                    new Date(a.date.slice(0, 10)).valueOf()
                );
            });
        setReviewForSort(sortedByDateReviews);
    };
    const [sort, setSort] = useState('ASC');
    const changeSort = () => {
        if (sort === 'ASC') {
            sortByDateDesc();
            setSort('DESC');
        } else {
            sortByDate();
            setSort('ASC');
        }
    };

    const sortByStarAsc = () => {
        // 평점 높은 순 정렬
        if (isSelected[1] === false) {
            const sortedByStarReviews = reviewForSort
                .slice(0)
                .sort((a: ReviewType, b: ReviewType) => {
                    return a.star.valueOf() - b.star.valueOf();
                });
            setReviewForSort(sortedByStarReviews);
            setSelected([false, true, false, false]);
        }
    };

    const sortByLikeAsc = () => {
        // 좋아요 많은 순 정렬
        if (isSelected[3] === false) {
            const sortedByStarReviews = reviewForSort
                .slice(0)
                .sort((a: ReviewType, b: ReviewType) => {
                    return a.like.valueOf() - b.like.valueOf();
                });
            setReviewForSort(sortedByStarReviews);
            setSelected([false, false, false, true]);
        }
    };

    const navigate = useNavigate();

    const gotoReview = (drinkId: number) => {
        navigate(`/review/alcohol${id}/review${drinkId}`);
    };

    const dispatch = useDispatch();
    const isModal = useSelector((state: RootState) => {
        return state.listModal.modal;
    });
    const handleModal = () => {
        const main = document.getElementById('listModalBack');
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav');
        dispatch(setListModal(!isModal));
        if (isModal === false) {
            if (main) {
                main.className = `${main.className} is-blurred`;
            }
            head.className = 'head is-blurred';
            if (nav) {
                nav.className = 'right is-blurred';
            }
        } else {
            if (main) {
                main.className = `${main.className.split(' ')[0]} ${
                    main.className.split(' ')[1]
                }`;
            }
            head.className = 'head';
            if (nav) {
                nav.className = 'right';
            }
        }
    };

    const sortByStarDes = () => {
        // 평점 낮은 순 정렬

        const sortedByStarReviews = reviewForSort
            .slice(0)
            .sort((a: ReviewType, b: ReviewType) => {
                return b.star.valueOf() - a.star.valueOf();
            });
        setReviewForSort(sortedByStarReviews);
        setSelected([false, false, true, false]);
    };

    const isLogin = (): string | null => {
        if (getUserLocalStorage() !== 0 && getAccessToken() !== null) {
            return getAccessToken();
        }
        return null;
    };

    return (
        <BackgroundTemplate heightValue="auto">
            <Inner id="listModalBack">
                <DrinkInfoWrapper>
                    {drinks.id && (
                        <DrinkDetailElement
                            id={drinks.id}
                            AlcoholName={drinks.AlcoholName}
                            category={drinks.category}
                            brewery={drinks.brewery}
                            price={drinks.price}
                            AlcoholByVolume={drinks.AlcoholByVolume}
                            sweet={drinks.sweet}
                            bitter={drinks.bitter}
                            refreshing={drinks.refreshing}
                            clean={drinks.clean}
                            cool={drinks.cool}
                            sour={drinks.sour}
                            description={drinks.description}
                            star={drinks.star}
                            alcoholImage={drinks.alcoholImage}
                            likeCount={drinks.likeCount}
                            reviewCount={reviews.length}
                            token={isLogin()}
                        />
                    )}
                </DrinkInfoWrapper>
                <ReviewTitle>
                    <h1>리뷰 / 별점</h1>
                    <ReviewWriteLink to={`/list/${drinks.id}/write`}>
                        리뷰작성
                    </ReviewWriteLink>
                </ReviewTitle>

                <ReviewStar
                    starAvg={StarAvg()}
                    reviewCount={reviews.length}
                    starPercent={StarPercentControl()}
                    highestPercent={Math.max(...StarPercentControl())}
                    mostStars={EachStarCount()}
                />

                <PhotoWrapper>
                    <ReviewTitle>
                        <h1>포토후기 ({PhotoReviewSrcArr().length})개</h1>
                    </ReviewTitle>
                    {PhotoReviewSrcArr().length === 0 ? (
                        <>
                            <NoReview>포토후기가 없습니다.</NoReview>
                        </>
                    ) : (
                        <>
                            {PhotoReviewSrcArr().length >= 5 ? (
                                <PhotoReviewWrapper>
                                    {PhotoReviewSrcArr()
                                        .slice(0, 4)
                                        .map((p, index) => {
                                            return (
                                                <button key={index}>
                                                    <img
                                                        src={p[0].toString()}
                                                        alt={p[0].toString()}
                                                    />
                                                </button>
                                            );
                                        })}

                                    <button
                                        type="button"
                                        onClick={handleModal}
                                        className="more"
                                    >
                                        <h1>더보기</h1>
                                    </button>
                                </PhotoReviewWrapper>
                            ) : (
                                <>
                                    <PhotoReviewWrapper>
                                        {PhotoReviewSrcArr()
                                            .slice(0, 5)
                                            .map((p, index) => {
                                                return (
                                                    <button key={index}>
                                                        <img
                                                            onClick={() =>
                                                                gotoReview(
                                                                    +p[1],
                                                                )
                                                            }
                                                            aria-hidden
                                                            src={p[0].toString()}
                                                            // eslint-disable-next-line react/no-array-index-key
                                                            key={index}
                                                            alt={p[0].toString()}
                                                        />
                                                    </button>
                                                );
                                            })}
                                    </PhotoReviewWrapper>
                                </>
                            )}
                        </>
                    )}
                </PhotoWrapper>

                <ReviewTitle>
                    <h1>리뷰 ({reviews.length})개</h1>
                </ReviewTitle>
                {isMobile ? (
                    <SortBtn onClick={changeSort}>
                        {
                            {
                                ASC: (
                                    <>
                                        <svg
                                            id="asc"
                                            style={{
                                                transform: `rotate(0.5turn)`,
                                            }}
                                            width="25"
                                            height="15"
                                            viewBox="0 0 25 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23 2L12.5 12.5963L2 2"
                                                stroke="#8B7E6A"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <p>오래 된 순</p>
                                    </>
                                ),
                                DESC: (
                                    <>
                                        <svg
                                            id="asc"
                                            width="25"
                                            height="15"
                                            viewBox="0 0 25 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23 2L12.5 12.5963L2 2"
                                                stroke="#8B7E6A"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <p>최신 순</p>
                                    </>
                                ),
                            }[sort]
                        }

                        <svg
                            id="mobileAsc"
                            width="32"
                            height="20"
                            viewBox="0 0 32 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.7146 16.3403L10.7146 4.40811"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6.35156 8.57068L10.7144 4.20782L15.0773 8.57068"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21.2854 3.65967L21.2854 15.5919"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M25.6484 11.4293L21.2856 15.7922L16.9227 11.4293"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </SortBtn>
                ) : (
                    <ReviewSort>
                        <button
                            type="button"
                            onClick={sortByDate}
                            style={{ color: isSelected[0] ? '#8B7E6A' : '' }}
                        >
                            최신순
                        </button>
                        |
                        <button
                            type="button"
                            onClick={sortByStarAsc}
                            style={{ color: isSelected[1] ? '#8B7E6A' : '' }}
                        >
                            평점 높은 순
                        </button>
                        |
                        <button
                            type="button"
                            onClick={sortByStarDes}
                            style={{ color: isSelected[2] ? '#8B7E6A' : '' }}
                        >
                            평점 낮은 순
                        </button>
                        |
                        <button
                            type="button"
                            onClick={sortByLikeAsc}
                            style={{ color: isSelected[3] ? '#8B7E6A' : '' }}
                        >
                            추천 많은 순
                        </button>
                    </ReviewSort>
                )}

                {reviews.length === 0 ? (
                    <NoReview>
                        <h1>작성된 리뷰가 없습니다.</h1>
                    </NoReview>
                ) : (
                    <ul>
                        {reviewForSort
                            .slice(0)
                            .reverse()
                            .map((review) => {
                                return (
                                    <li key={review.id}>
                                        <BoardListElement
                                            userImg={review.profileImg}
                                            nickname={review.nickname}
                                            title={review.title}
                                            starCount={review.star}
                                            content={review.content}
                                            date={review.date}
                                            like={review.like}
                                            reviewImg={review.reviewImgUrl}
                                            reviewId={review.id}
                                            alcoholId={review.alcoholId}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                )}
            </Inner>
            {isModal && (
                <ImageListModal
                    modal={handleModal}
                    id={id}
                    photoReview={reviews.filter(
                        (p) => p.reviewImgUrl.length > 0,
                    )}
                />
            )}
        </BackgroundTemplate>
    );
};

export default DrinkDetail;

const SortBtn = styled.div`
    cursor: pointer;
    position: relative;
    margin-left: auto;

    > svg {
        position: absolute;
        width: 1.25em;
        right: 5.5em;
        top: -2.5px;
    }
    #mobileAsc {
        display: none;
    }
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: -0.01em;
    @media (max-width: 767px) {
        margin-top: 1.583em;
        font-size: 0.75em;
        #asc {
            display: none;
        }
        #mobileAsc {
            display: block;
        }
        > p {
            margin-right: 2.667em;
        }
        > svg {
            position: absolute;
            right: 0;
            width: 2.667em;
            top: -0.5em;
        }
    }
`;

const ReviewSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1.6875em;
    color: #bbb6a8;
    font-family: inherit;
    width: 100%;

    button {
        font-size: 1.125em;
        background: none;
        border: none;
        font-family: inherit;
        color: #bbb6a8;
        margin: 0 1.75em;
    }

    button:hover {
        cursor: pointer;
        color: #8b7e6a;
    }
`;

const ReviewTitle = styled.div`
    padding-bottom: 2.5em;
    border-bottom: 0.0625em solid #bbb6a8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 767px) {
        padding-bottom: 0.938em;
    }

    h1 {
        font-size: 1.563em;
        color: #675b4f;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.938em; // 18px
        }
    }
`;

const ReviewWriteLink = styled(Link)`
    width: 9.9375em;
    height: 3.1875em;
    background: #8b7e6a;
    border: 0.0625em solid #8b7e6a;
    border-radius: 1.125em;

    font-family: inherit;
    font-size: 1.25em;
    color: #ffffff;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration-line: none;

    @media (max-width: 767px) {
        width: 6.6875em; //75px
        height: 2.5em; //24px
        border-radius: 0.5em; //8px
        font-weight: 400;
        font-size: 0.8125em; // 13
    }
`;

const Inner = styled.div`
    width: 72.063em;
    ul {
        list-style: none;
        @media (max-width: 767px) {
            width: 19.8125em;
        }
    }

    li {
        border-top: 0.0625em solid #bbb6a8;
        margin-top: 3.625em;

        @media (max-width: 767px) {
            margin-top: 1.75em;
            padding-top: 1.75em;
            width: 19.8125em;
        }
    }

    li:first-child {
        border: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6.25em;

    @media (max-width: 767px) {
        width: 19.8125em;
    }
`;

const NoReview = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 17.9375em;

    color: #bbb6a8;

    h1 {
        font-size: 1.4375em;
    }

    @media (max-width: 767px) {
        font-weight: 400;
        font-size: 0.9375em;
    }
`;
const PhotoWrapper = styled.div`
    width: 100%;
`;

const PhotoReviewWrapper = styled.div`
    display: flex;
    float: inline-start;
    margin-bottom: 1.875em;
    align-items: center;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #d9d9d9;
        border-radius: 1.125em;
        object-fit: cover;
        @media (max-width: 767px) {
            height: 100%;
            width: 100%;
            border-radius: 0.8125em;
        }
    }
    button {
        position: relative;
        padding-bottom: 20%;
        width: 100%;
        cursor: pointer;
        width: calc((100% - 1.25em) / 5);
        // height: calc((100vh - 1.25em) / 5);
        &:not(:last-of-type) {
            margin-right: calc((100% - ((100% - 1.25em) / 5) * 5) / 4);
        }
        background: #d9d9d9;
        border-radius: 1.125em; // 18
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.875em; // 30
        margin-bottom: 4em; // 64
        /* margin-bottom: 33px; */
        color: #675b4f;
        border: none;
        font-family: inherit;
        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: 100%;
            font-size: 1.875em; // 30px
            @media (max-width: 767px) {
                font-weight: 400;
                font-size: 0.8125em; //13
            }
        }
        @media (max-width: 767px) {
            width: calc((100% - 1.25em) / 5);
            // height: calc(((100vw - 3.125em) - 12.5em) / 5);
            height: calc((19.8125em + 3.5em) / 5);
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            &:not(:last-of-type) {
                margin-right: calc((100% - ((100% - 1.25em) / 5) * 5) / 4);
            }
        }
    }
`;

const DrinkInfoWrapper = styled.div``;
