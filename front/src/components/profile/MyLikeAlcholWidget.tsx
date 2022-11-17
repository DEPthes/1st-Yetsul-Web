import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../common/Star';

type myliketype = {
    AlcoholName: string;
    star: number;
    AlcoholByVolume: number;
    alcoholImage: string;
    id: number;
};

export const FavoriteAlcholWidget: React.FC<myliketype> = ({
    AlcoholName,
    star,
    AlcoholByVolume,
    alcoholImage,
    id,
}) => {
    const StarValue = Math.round(star);
    return (
        <LinkWrap to={`/list/${id}/spec`}>
            <FavoriteAlcholBox>
                <FavoriteAlcoholImgBox>
                    <FavoriteAlcholImg src={alcoholImage} />
                </FavoriteAlcoholImgBox>
                <FavoriteAlcholLower>
                    <FavoriteAlcholNameABV>
                        <p>{AlcoholName}</p>
                        <p>{AlcoholByVolume}%</p>
                    </FavoriteAlcholNameABV>
                    <FavoriteAlchilStarDiv>
                        <Star star={StarValue} widthValue={0.625} />
                    </FavoriteAlchilStarDiv>
                </FavoriteAlcholLower>
            </FavoriteAlcholBox>
        </LinkWrap>
    );
};

const LinkWrap = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const FavoriteAlcholBox = styled.div`
    height: 15.26vw;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        width: auto;
        height: 59.231vw;
    }
`;

const FavoriteAlcoholImgBox = styled.div`
    margin-top: 1.719vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FavoriteAlcholImg = styled.img`
    height: 6.5vw;
`;

const FavoriteAlcholLower = styled.div`
    width: 79.51%;
    margin-bottom: 0.25vw;
`;

const FavoriteAlcholNameABV = styled.div`
    border-bottom: 1px solid #bbb6a8;
    margin-bottom: 0.469vw;
    padding-bottom: 0.469vw;
    display: flex;
    justify-content: space-between;
    font-size: 0.781vw;
    @media screen and (max-width: 767px) {
        display: flex;
        align-items: flex-end;
        font-size: 2.821vw;
    }
`;

const FavoriteAlchilStarDiv = styled.div`
    @media screen and (max-width: 767px) {
        margin-bottom: 3.103vw;
    }
`;
