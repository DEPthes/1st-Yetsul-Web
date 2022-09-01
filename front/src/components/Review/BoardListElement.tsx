import React from 'react';
import styled from 'styled-components';

type reviewType = {
    userImg: string; // user 프로필 사진
    userName: string; // user 이름
    title: string; // review 제목
    // star: string; // 별점
    starCount: number; // 별점 개수
    content: string; // review 내용
    date: string; // review 작성 날짜
    like: number; // 추천 수
    reviewImg: string; // review 사진
};

const BoardListElement: React.FC<reviewType> = ({
    userImg,
    userName,
    title,
    // star,
    starCount,
    content,
    date,
    like,
    reviewImg,
}) => {
    const StarSrc = (starCount: number) => {
        const result = [];
        if (starCount === 1) {
            result.push(
                '/images/StarFill.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount === 2) {
            result.push(
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/Star.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount === 3) {
            result.push(
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/StarFill.png',
                '/images/Star.png',
                '/images/Star.png',
            );
        } else if (starCount === 4) {
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
        <ReviewsWrapper>
            <UserImgWrap>
                <img src={userImg} alt={userName} />
            </UserImgWrap>

            <ReviewBox>
                <h1>{title}</h1>
                <Star>
                    {StarSrc(starCount).props.children}

                    <h3>{starCount}개</h3>
                </Star>
                <ReviewBoxHeadInfo>
                    <h3>{userName}</h3>
                    <h3>{date.slice(0, 10)}</h3>
                </ReviewBoxHeadInfo>

                <ReviewBoxContent>
                    <h3>{content}</h3>
                    <button type="button">전체보기 {'>'}</button>
                </ReviewBoxContent>
            </ReviewBox>
            <ReviewImgWrap>
                <img src={reviewImg} alt={userName} />
            </ReviewImgWrap>
            <LikeBtn>
                👍<h3>{like}</h3>
            </LikeBtn>
        </ReviewsWrapper>
    );
};

export default BoardListElement;

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
        background: #d9d9d9;
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

const Star = styled.div`
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

    button {
        border: none;
        background: none;
        font-family: inherit;
        font-size: 15px;
        color: #675b4f;
        position: absolute;
        bottom: 11px;
        right: 17px;
    }
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

    h3 {
        font-size: 15px;
        color: #000000;
        margin-left: 5px;
    }
`;
