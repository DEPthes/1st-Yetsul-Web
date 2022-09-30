import React from 'react';
import styled from 'styled-components';
import Star from '../common/Star';

type ReviewType = {
    star: number;
    title: string;
    nickname: string;
    date: string;
    like: number;
};

const ReviewDetailList: React.FC<ReviewType> = ({
    star,
    title,
    nickname,
    date,
    like,
}) => {
    return (
        <ListWrapper>
            <BoardList>
                <Star star={star} widthValue={28} heightValue={28} />
                <div>{title}</div>
                <div>{nickname}</div>
                <div>{date.slice(0, 10)}</div>
                <div>👍 {like}</div>
            </BoardList>
        </ListWrapper>
    );
};

export default ReviewDetailList;

const ListWrapper = styled.div``;

const BoardList = styled.div`
    width: 1153px;
    height: 69px;
    white-space: nowrap;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    align-items: center;
    position: relative;

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
