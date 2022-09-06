import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DrinkDetailType } from '../../Detail/DrinkDetail';
import ReviewTemplate from '../ReviewTemplate';

const head: React.FC = () => {
    return (
        <Header>
            <h1>리뷰 / 평점</h1>
        </Header>
    );
};

const main: React.FC = () => {
    return (
        <Header>
            <h1>리뷰 / 평점</h1>
        </Header>
    );
};

const foot: React.FC = () => {
    return (
        <Header>
            <h1>리뷰 / 평점</h1>
        </Header>
    );
};

const ReviewWrite: React.FC = () => {
    const { id } = useParams();
    const [drinks, setDrinks] = useState<DrinkDetailType>(Object); // 술 상세 정보

    useEffect(() => {
        axios
            .get(`https://depth-server.herokuapp.com/review/${id}/spec`)
            .then((res) => {
                setDrinks(res.data.alcohol);
            })

            .catch((err) => console.log(err));
    }, []);
    return (
        <ReviewTemplate
            Head={head}
            Main={main}
            Foot={foot}
            drinkInfo={drinks}
        />
    );
};

export default ReviewWrite;

const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid #bbb6a8;
    > h1 {
        font-size: 30px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #675b4f;
        margin-bottom: 40px;
    }
`;
