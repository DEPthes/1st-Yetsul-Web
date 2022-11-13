import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../common/Star';

type ReviewType = {
    alcoholId: number;
    id: number;
    star: number;
    title: string;
    nickname: string;
    date: string;
    like: number;
};

const ReviewDetailList: React.FC<ReviewType> = ({
    alcoholId,
    id,
    star,
    title,
    nickname,
    date,
    like,
}) => {
    const navigate = useNavigate();
    return (
        <ListWrapper>
            <div
                onClick={async () => {
                    navigate(`/review/alcohol${alcoholId}/review${id}`);
                }}
                aria-hidden
            >
                <BoardList>
                    <Star star={star} widthValue={28} heightValue={28} />
                    <div>{title}</div>
                    <div>{nickname}</div>
                    <div>{date.slice(0, 10)}</div>
                    <div>👍 {like}</div>
                </BoardList>
            </div>
        </ListWrapper>
    );
};

export default ReviewDetailList;

const ListWrapper = styled.div`
    > div {
        cursor: pointer;
    }
`;

const BoardList = styled.div`
    width: 1153px;
    height: 69px;
    white-space: nowrap;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    position: relative;
    color: #8d837b;
    text-decoration: none;

    div {
        position: absolute;
    }

    div:first-child {
        top: 13px;
        left: 10px;
    }

    div:nth-child(2) {
        left: 300px;
        width: 350px;
        text-align: center;
    }

    div:nth-child(3) {
        width: 100px;
        left: 750px;
        text-align: center;
    }

    div:nth-child(4) {
        left: 896px;
    }

    div:nth-child(5) {
        left: 1050px;
    }
`;
