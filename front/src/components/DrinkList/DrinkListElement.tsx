import React from 'react';
import styled from 'styled-components';

type drinkInfoType = {
    img: string; // 술 이미지
    name: string; // 술 이름
    abv: number; // 알코올 도수
    price: number; // 술 가격
};

const DrinkListElement: React.FC<drinkInfoType> = ({
    img,
    name,
    abv,
    price,
}) => {
    return (
        <DrinkElementWrap>
            <ImageWrap>
                <img src={img} alt={name} />
            </ImageWrap>
            <Info>
                <InfoHead>
                    <h1>{name}</h1>
                    <h2>{abv}%</h2>
                </InfoHead>
                <InfoFoot>
                    <h1>{price}원대</h1>
                </InfoFoot>
            </Info>
        </DrinkElementWrap>
    );
};

export default DrinkListElement;

const DrinkElementWrap = styled.div`
    width: 300px;
    height: 454px;
    padding: 29px;
    &:hover {
        background: rgba(217, 217, 217, 0.4);
        border-radius: 18px;
    }
    cursor: pointer;
`;

const ImageWrap = styled.div`
    height: 323px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 52px;
    img {
        height: 100%;
        object-fit: cover;
    }
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const InfoHead = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    justify-content: space-between;
    margin-bottom: 21px;
    color: #8b7e6a;
    font-size: 20px;
`;

const InfoFoot = styled.div`
    font-family: 'GmarketSansLight';
    color: #8b7e6a;
    font-size: 18px;
`;
