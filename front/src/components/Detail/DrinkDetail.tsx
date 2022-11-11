import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
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
    star: number; // 술 별 점
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
    const { id } = useParams();

    const [drinks, setDrinks] = useState<DrinkDetailType>(Object); // 술 상세 정보
    const [reviews, setReviews] = useState<ReviewType[]>([]); // 리뷰 보드리스트
    const [reviewForSort, setReviewForSort] = useState<ReviewType[]>([]); // 리뷰 정렬 시 포토 후기 빼고 랜더링 다시 하기 위해
    const [starPercent, setStarPercent] = useState([]); // 평점비율
    const [isSelected, setSelected] = useState([true, false, false, false]); // 버튼 선택 유무

    useEffect(() => {
        axios
            .get(`http://depth-server.herokuapp.com/review/${id}/spec`)
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

    const PhotoReviewSrcArr = (): string[] => {
        // 해당 리뷰에 달린 포토 url 가져오고 빈 값 제외한 배열 생성
        const photoArr: string[] = [];

        reviews.map((p) => {
            return photoArr.push(p.reviewImgUrl[0]); // 사진이 2개 이상인거 있을 때, 그냥일 때 첫 번째 사진만 보여줌
        });

        const newArr = photoArr.filter(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (element, i) => element !== undefined || null || '',
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
        // 평점 높은 순 정렬
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
            $('body').css('overflow', 'hidden');
            if (main) {
                main.className = 'is-blurred';
            }
            head.className = 'head is-blurred';
            if (nav) {
                nav.className = 'right is-blurred';
            }
        } else {
            $('body').css('overflow', 'scroll');
            if (main) {
                main.className = '';
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

    return (
        <BackgroundTemplate heightValue="auto">
            <Inner id="listModalBack">
                <DrinkInfoWrapper>
                    <DrinkDetailElement
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
                    />
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

                <div>
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
                                                <img
                                                    src={p}
                                                    // eslint-disable-next-line react/no-array-index-key
                                                    key={index}
                                                    alt={p}
                                                />
                                            );
                                        })}
                                    <button type="button" onClick={handleModal}>
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
                                                    <img
                                                        src={p}
                                                        // eslint-disable-next-line react/no-array-index-key
                                                        key={index}
                                                        alt={p}
                                                    />
                                                );
                                            })}
                                    </PhotoReviewWrapper>
                                </>
                            )}
                        </>
                    )}
                </div>

                <ReviewTitle>
                    <h1>리뷰 ({reviews.length})개</h1>
                </ReviewTitle>
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

                {reviews.length === 0 ? (
                    <NoReview>작성된 리뷰가 없습니다.</NoReview>
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

const ReviewSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 27px;
    font-size: 18px;
    color: #bbb6a8;
    font-family: inherit;
    width: 1153px;

    button {
        background: none;
        border: none;
        font-family: inherit;
        color: #bbb6a8;
        margin: 0 28px;
    }

    button:hover {
        cursor: pointer;
        color: #8b7e6a;
    }
`;

const ReviewTitle = styled.div`
    padding-bottom: 40px;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1153px;
    h1 {
        font-size: 1.875rem;
        color: #675b4f;
        width: 1153px;
    }
`;

const ReviewWriteLink = styled(Link)`
    width: 159px;
    height: 51px;
    background: #8b7e6a;
    border: 1px solid #8b7e6a;
    border-radius: 18px;

    font-family: inherit;
    font-size: 20px;
    color: #ffffff;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration-line: none;
`;

const Inner = styled.div`
    ul {
        list-style: none;
    }

    li {
        border-top: 1px solid #bbb6a8;
        margin-top: 58px;
    }

    li:first-child {
        border: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;

const NoReview = styled.div`
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1153px;
    height: 287px;

    color: #bbb6a8;
`;

const PhotoReviewWrapper = styled.div`
    display: flex;
    width: 1153px;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 206px;
        height: 206px;
        background: #d9d9d9;
        border-radius: 18px;
        margin-right: 30px;
        object-fit: cover;
        margin-top: 30px;
        margin-bottom: 64px;
    }

    button {
        cursor: pointer;
        width: 206px;
        height: 206px;
        background: #d9d9d9;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 33px;
        font-size: 30px;
        color: #675b4f;
        border: none;
        font-family: inherit;
    }
`;

const DrinkInfoWrapper = styled.div``;
