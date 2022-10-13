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
                        <FavoriteAlcholName>{AlcoholName}</FavoriteAlcholName>
                        <FavoriteAlcholeABV>
                            {AlcoholByVolume}%
                        </FavoriteAlcholeABV>
                    </FavoriteAlcholNameABV>
                    <FavoriteAlchilStarDiv>
                        <Star
                            star={StarValue}
                            widthValue={15}
                            heightValue={14}
                        />
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
    width: 205px;
    height: 293px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-right: 27px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FavoriteAlcoholImgBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FavoriteAlcholImg = styled.img`
    height: 90%;
`;

const FavoriteAlcholLower = styled.div`
    width: 79.51%;
`;

const FavoriteAlcholNameABV = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #bbb6a8;
    margin-bottom: 9px;
    padding-bottom: 9px;
    margin-top: 39px;
`;

const FavoriteAlcholName = styled.p``;

const FavoriteAlcholeABV = styled.p``;

const FavoriteAlchilStarDiv = styled.div``;
