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
                    <Link to={`/list/${id}/spec`}>
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
    @media (max-width: 767px) {
        .image-wrap {
            height: 10.6875em !important;
        }
    }
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .image-wrap {
        width: 100%;
        height: 36.4375em;
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
    @media (max-width: 767px) {
        margin-top: 1.6875em !important;
        width: 12.1875em !important;
        > div:first-of-type {
            height: 1.625em !important;
            line-height: 1.125em !important;
            margin-bottom: 0.625em !important;
            > p {
                font-size: 1.125em !important;
            }
        }

        > div:nth-of-type(2) {
            > a {
                line-height: 0.8125em !important;
                > p {
                    font-size: 0.8125em !important;
                }
                > svg {
                    height: 0.495625em !important;
                }
            }
        }
    }
    margin-top: 2.5em;
    display: flex;
    flex-direction: column;
    width: 27.9375em;
    justify-content: center;
    > div:first-of-type {
        height: 2.875em;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #bbb6a8;
        color: #8b7e6a;
        line-height: 1.5625em;
        letter-spacing: -0.01em;
        margin-bottom: 1.375em;
        > p {
            font-size: 1.5625em;
        }
    }
    > div:nth-of-type(2) {
        width: 100%;
        a {
            color: #8b7e6a;
            font-family: 'GmarketSansLight';
            line-height: 1.5625em;
            letter-spacing: -0.01em;
            text-decoration: none;
            width: 100%;
            display: flex;
            justify-content: space-between;
            > p {
                font-size: 1.5625em;
            }
            div {
                width: 1.3125em;
                height: 0.6625em;
                background: #000000;
                border: 2.5px solid #8b7e6a;
                transform: matrix(0, 1, 1, 0, 0, 0);
            }
        }
    }
`;
