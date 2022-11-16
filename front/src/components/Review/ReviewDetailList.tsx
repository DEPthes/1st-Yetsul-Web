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
                    <Star star={star} widthValue={1.75} />
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
    width: 72.063em;
    height: 4.313em;
    white-space: nowrap;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    color: #8d837b;
    text-decoration: none;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:first-child {
        width: 11.438em;
    }

    div:nth-child(2) {
        width: 17.75em;
        text-align: center;
    }

    div:nth-child(3) {
        width: 7.813em;
        text-align: center;
    }

    div:nth-child(4) {
        width: 8.813em;
    }

    div:nth-child(5) {
        width: 4.75em;
    }
`;
