import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type DrinkInfoType = {
    id: number;
    img: string;
    name: string;
    abv: number;
};

const DrinkInfo: React.FC<DrinkInfoType> = ({ id, img, name, abv }) => {
    return (
        <DrinkInfoWrap id={`slider-number-${id}`}>
            <div className="image-wrap">
                <img id="sojuImg" src={img} alt="traditional soju" />
            </div>
            <DrinkInfoFoot>
                <div>
                    <p>{name}</p>
                    <p>{abv}%</p>
                </div>
                <div>
                    <Link to="#!">
                        <p>자세히 보기</p>
                        <svg
                            width="15"
                            height="25"
                            viewBox="0 0 15 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.00024 2L12.5966 12.5L2.00025 23"
                                stroke="#8B7E6A"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </Link>
                </div>
            </DrinkInfoFoot>
        </DrinkInfoWrap>
    );
};

export default DrinkInfo;

const DrinkInfoWrap = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .image-wrap {
        width: 100%;
        height: 583px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        #sojuImg {
            object-fit: cover;
            height: 100%;
        }
    }
`;

const DrinkInfoFoot = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 447px;
    justify-content: center;
    > div:first-of-type {
        height: 46px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #bbb6a8;
        color: #8b7e6a;
        font-size: 25px;
        line-height: 25px;
        letter-spacing: -0.01em;
        margin-bottom: 22px;
    }
    > div:nth-of-type(2) {
        width: 100%;
        a {
            color: #8b7e6a;
            font-family: 'GmarketSansLight';
            font-size: 25px;
            line-height: 25px;
            letter-spacing: -0.01em;
            text-decoration: none;
            width: 100%;
            display: flex;
            justify-content: space-between;
            div {
                width: 21px;
                height: 10.6px;
                background: #000000;
                border: 2.5px solid #8b7e6a;
                transform: matrix(0, 1, 1, 0, 0, 0);
            }
        }
    }
`;
