import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../common/Star';

type drinkInfoType = {
    alcoholOfMonth: boolean;
    id: number;
    img: string; // 술 이미지
    name: string; // 술 이름
    abv: number; // 알코올 도수
    category: number;
    star: number;
};

const DrinkListElement: React.FC<drinkInfoType> = ({
    alcoholOfMonth,
    id,
    img,
    name,
    abv,
    category,
    star,
}) => {
    return (
        <LinkWrap to={`/list/${id}/spec`}>
            <DrinkElementWrap>
                <DrinkCategory isMonth={alcoholOfMonth}>
                    <CategoryIcon>
                        {
                            {
                                1: (
                                    <svg
                                        width="46"
                                        height="31"
                                        viewBox="0 0 46 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="4.88672"
                                            y="6.9209"
                                            width="19.2096"
                                            height="1.35778"
                                            rx="0.678891"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M6.32461 8.48633C4.70011 10.4687 1.35547 15.8069 1.35547 20.132C1.35547 21.5789 1.71909 22.9956 2.26387 24.296C4.00208 28.4451 8.72393 29.9986 13.2225 29.9986H15.5022"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M22.8863 8.48633C24.5495 10.4687 27.9668 15.8069 27.9668 20.132C27.9668 21.6391 27.5629 23.1134 26.9662 24.4576C25.1706 28.5029 20.5306 29.9986 16.1048 29.9986H13.4833"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M2.36719 14.8418H26.9555"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M1.35547 17.8726H27.6279"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M1.35547 19.2202L27.9647 19.2202"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M2.36719 14.8418H26.9555"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M16.1777 6.75778L20.6132 2.249C21.3422 1.50799 21.9552 0.851425 22.969 1.08099V1.08099C24.3859 1.40184 23.642 3.73147 22.5719 4.71402L20.346 6.75778"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M18.2644 6.9457C19.4011 5.87774 21.3919 3.94972 21.6957 3.74396"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M45.209 21.3524C44.2987 24.9397 41.3856 27.5 38 27.5C34.6144 27.5 31.7013 24.9397 30.791 21.3524C30.5538 20.4175 31.3489 19.5 32.5 19.5L43.5 19.5C44.6511 19.5 45.4462 20.4175 45.209 21.3524Z"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M34.7832 29.5C34.9525 29.344 35.1979 29.1863 35.5211 29.0427C36.2578 28.7153 37.3106 28.5 38.5 28.5C39.6894 28.5 40.7422 28.7153 41.4789 29.0427C41.8021 29.1863 42.0475 29.344 42.2168 29.5L34.7832 29.5Z"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M30.5 21.5H32.5H34.5"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M31 23H32.5H34"
                                            stroke="#675B4F"
                                        />
                                    </svg>
                                ),
                                2: (
                                    <svg
                                        width="14"
                                        height="46"
                                        viewBox="0 0 14 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 23.5H4.75794M1.26021 20.5H7.73748M1 22H6.18182"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="4.5"
                                            y="0.5"
                                            width="6"
                                            height="8"
                                            rx="1.5"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M5.75062 8V11.8589C5.8125 14.3068 5.5612 15.1276 3.38291 17.3067C0.660047 20.0307 1.0152 25.592 1.0152 27.408C1.0152 28.695 1.0152 37.381 1.0152 43.0026C1.0152 44.1072 1.91063 45 3.0152 45H8"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M9.6067 8V11.8589C9.5625 14.3068 9.742 15.1276 11.2979 17.3067C13.2428 20.0307 12.9891 25.592 12.9891 27.408C12.9891 28.695 12.9891 37.381 12.9891 43.0026C12.9891 44.1072 12.0937 45 10.9891 45H8"
                                            stroke="#675B4F"
                                        />
                                        <path d="M6 11H10" stroke="#675B4F" />
                                        <path d="M1 27H13" stroke="#675B4F" />
                                        <path d="M1 37H13" stroke="#675B4F" />
                                        <path
                                            d="M9.5 31.5C9.5 33.2319 8.31118 34.5 7 34.5C5.68882 34.5 4.5 33.2319 4.5 31.5C4.5 29.7681 5.68882 28.5 7 28.5C8.31118 28.5 9.5 29.7681 9.5 31.5Z"
                                            stroke="#675B4F"
                                        />
                                    </svg>
                                ),
                                3: (
                                    <svg
                                        width="33"
                                        height="44"
                                        viewBox="0 0 33 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21 32H27" stroke="#4F4941" />
                                        <path
                                            d="M21.668 33.2173L25.668 33.2173"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M21.0195 34.4341L23.6862 34.4341"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M1 18H4.90436M1.27035 15H8M1.00116 16.4211H6.38488"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M9 1H11.3812C12.8786 1 13.7413 2.70131 12.8565 3.90934V3.90934C12.7892 4.0012 12.7104 4.08384 12.6408 4.17397C12.1551 4.80293 11.9617 6.38639 14.4902 8.65245C17.0036 10.905 17 14.043 17 17.4561C17 20.8693 17 33.506 17 39.3977C16.8381 40.6844 15.0569 43.2036 9.2277 42.9869"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M12 1H7.36601C5.75681 1 4.89635 2.89492 5.95538 4.10652V4.10652C6.01859 4.17884 6.0893 4.24406 6.1541 4.31496C6.71151 4.92492 6.97448 6.52129 4.11924 8.82017C1.32157 11.0727 1 14.043 1 17.4561C1 20.8693 1 33.506 1 39.3977C1.18024 40.6844 3.16283 43.2036 9.65131 42.9869"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M21.5 32C21.5 31.1716 22.1716 30.5 23 30.5H31C31.8284 30.5 32.5 31.1716 32.5 32V40.5H21.5V32Z"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M1 18H4.90436M1.27035 15H8M1.00116 16.4211H6.38488"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M9 1H11.3812C12.8786 1 13.7413 2.70131 12.8565 3.90934V3.90934C12.7892 4.0012 12.7104 4.08384 12.6408 4.17397C12.1551 4.80293 11.9617 6.38639 14.4902 8.65245C17.0036 10.905 17 14.043 17 17.4561C17 20.8693 17 33.506 17 39.3977C16.8381 40.6844 15.0569 43.2036 9.2277 42.9869"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M12 1H7.36601C5.75681 1 4.89635 2.89492 5.95538 4.10652V4.10652C6.01859 4.17884 6.0893 4.24406 6.1541 4.31496C6.71151 4.92492 6.97448 6.52129 4.11924 8.82017C1.32157 11.0727 1 14.043 1 17.4561C1 20.8693 1 33.506 1 39.3977C1.18024 40.6844 3.16283 43.2036 9.65131 42.9869"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M21.5 32C21.5 31.1716 22.1716 30.5 23 30.5H31C31.8284 30.5 32.5 31.1716 32.5 32V40.5H21.5V32Z"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="22.5"
                                            y="40.5"
                                            width="8"
                                            height="1"
                                            stroke="#675B4F"
                                        />
                                    </svg>
                                ),
                                4: (
                                    <svg
                                        width="107"
                                        height="94"
                                        viewBox="0 0 107 94"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M105.924 61.4428C104.8 71.8086 96.6295 79.7993 86.7778 79.7993C76.9261 79.7993 68.7553 71.8086 67.6315 61.4428C67.5187 60.4019 68.3792 59.5002 69.5 59.5002L104.056 59.5002C105.176 59.5002 106.037 60.4019 105.924 61.4428Z"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M77.684 85.8848C77.8923 84.6398 78.8744 83.4502 80.5095 82.5158C82.3483 81.4651 84.9219 80.7993 87.7918 80.7993C90.6617 80.7993 93.2354 81.4651 95.0741 82.5158C96.7093 83.4502 97.6914 84.6398 97.8996 85.8848L77.684 85.8848Z"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M68.0137 63.0571H77.1419"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M69.0293 66.1001L75.1148 66.1001"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M70.043 69.1426L74.0999 69.1426"
                                            stroke="#4F4941"
                                        />
                                        <path
                                            d="M20.0975 5C23.7401 10.9929 25.1141 29.3605 16.1413 39.0762C6.28037 48.6393 -9.15987 70.4221 10.4556 87.2732C13.0615 89.2962 20.6186 93.271 30 92.9854"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M38.45 5C34.9331 10.9929 33.7174 29.3605 42.3809 39.0762C51.9017 48.6393 66.8095 70.4221 47.8704 87.2732C45.3544 89.2962 38.0579 93.271 29 92.9854"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="16.5"
                                            y="0.5"
                                            width="26"
                                            height="5"
                                            rx="2.5"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M2 63H13.0545M3.72727 56H21M3.03636 59.3158H16.8545"
                                            stroke="#675B4F"
                                        />
                                    </svg>
                                ),
                                5: (
                                    <svg
                                        width="29"
                                        height="41"
                                        viewBox="0 0 29 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.0091 33.9534H21.206M17.5312 30.9302H23.0415M17.8503 32.3622H19.7641H22.0999"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M1.20508 17.9739H5.29535M2.50829 14.9507H9.55838M1.68725 16.3828H7.32732"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="5.58203"
                                            y="0.5"
                                            width="3.89796"
                                            height="2.26531"
                                            rx="1.13265"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M5.43327 2.85693V6.73073C5.49102 9.1881 5.27901 11.7182 3.24606 13.9058C0.704869 16.6402 1.01381 20.5169 1.01381 22.3398C1.01381 23.6324 1.01381 32.3594 1.01381 38.0025C1.01381 39.107 1.90924 39.9998 3.01381 39.9998H7.53256"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M9.63285 2.85693V6.73073C9.575 9.1881 9.58279 11.7182 11.6192 13.9058C14.1648 16.6402 14.0599 20.5169 14.0599 22.3398C14.0599 23.6324 14.0599 32.3594 14.0599 38.0025C14.0599 39.107 13.1645 39.9998 12.0599 39.9998H7.52994"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M5.49023 4.48975H9.57187"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M1 20.4082H14.0612"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M1 32.2451H14.0612"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M25.5319 29.3877H19.699C18.4591 29.3877 17.518 30.5043 17.7278 31.7263L18.513 36.2977C18.6779 37.2576 19.5102 37.9591 20.4842 37.9591H24.6813C25.6448 37.9591 26.4713 37.2722 26.6476 36.325L27.4982 31.7536C27.7271 30.5235 26.7831 29.3877 25.5319 29.3877Z"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="19.3671"
                                            y="37.9589"
                                            width="6.53061"
                                            height="0.816326"
                                            stroke="#675B4F"
                                            strokeWidth="0.816326"
                                        />
                                    </svg>
                                ),
                                6: (
                                    <svg
                                        width="40"
                                        height="45"
                                        viewBox="0 0 40 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 11H14" stroke="#675B4F" />
                                        <path
                                            d="M12 1H11.6193C10.5403 1 9.65622 1.85471 9.61322 2.93287C9.48001 6.27277 9.24326 10.8497 8.98908 11.7136C8.85962 12.2373 8.7295 12.9719 8.68181 13.7306C8.58387 15.2886 7.99384 18.0334 6.67566 18.8698L5.10725 19.8649C5.01891 19.921 4.9342 19.9824 4.86282 20.0589C4.43316 20.5193 3.62931 21.7744 3.12165 23.9576C2.56579 26.3481 1.70627 30.3469 1.34598 32.0475C0.812609 34.4735 0.530481 39.9355 3.33998 43.3875C3.67382 43.7977 4.19061 44 4.71948 44H10.9963"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M11.377 1H11.6762C12.7561 1 13.6405 1.85606 13.6821 2.93514C13.8108 6.27485 14.0393 10.8499 14.2848 11.7136C14.4154 12.2608 14.5467 13.0382 14.5872 13.8328C14.6653 15.3653 15.2073 18.0081 16.4898 18.8507L18.0291 19.862C18.1174 19.92 18.2019 19.9835 18.2725 20.0621C18.6881 20.5251 19.4619 21.7795 19.9511 23.9576C20.4879 26.3481 21.3179 30.3469 21.6659 32.0475C22.1797 34.4674 22.4521 39.9081 19.7606 43.3615C19.428 43.7882 18.9002 44 18.3592 44H10"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M3 24H7.40693M4.4041 21H12M3.5195 22.4211H9.59622"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M28.2788 32.0693H29.8158M27.3184 29.2236H34.2205M27.7025 30.5716H31.9153"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M16.5 32.5C16.5 35.3073 14.4415 37.5 12 37.5C9.5585 37.5 7.5 35.3073 7.5 32.5C7.5 29.6927 9.5585 27.5 12 27.5C14.4415 27.5 16.5 29.6927 16.5 32.5Z"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M31.75 24H25.0683C23.9374 24 23.0333 24.9825 23.6103 25.955C24.0395 26.6784 24.7312 27.3888 25.7963 27.8436C26.6985 28.2288 27.4454 29.0034 27.6617 29.9602C28.0779 31.8015 29.1331 33.9175 31.375 34H32"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M31.2222 24H36.9394C38.0674 24 38.9798 24.9724 38.4504 25.9684C38.0875 26.6513 37.5159 27.3214 36.6526 27.7742C35.7919 28.2256 35.0495 28.9905 34.8596 29.9437C34.4919 31.7888 33.5543 33.9173 31.5556 34H31"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="30.5"
                                            y="34.5"
                                            width="1"
                                            height="8"
                                            stroke="#675B4F"
                                        />
                                        <rect
                                            x="27.5"
                                            y="41.5"
                                            width="7"
                                            height="1"
                                            stroke="#675B4F"
                                        />
                                        <path
                                            d="M24 27L38 27"
                                            stroke="#675B4F"
                                        />
                                    </svg>
                                ),
                            }[category]
                        }
                    </CategoryIcon>
                    <h1>
                        {
                            {
                                1: `탁주`,
                                2: `과실주`,
                                3: `약주`,
                                4: `청주`,
                                5: `증류주`,
                                6: `리큐르주`,
                            }[category]
                        }
                    </h1>
                </DrinkCategory>
                {alcoholOfMonth && (
                    <MonthOfDrinksDiv>
                        <MonthOfDrinks
                            width="51"
                            height="85"
                            viewBox="0 0 51 85"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M25.1867 64.1103L0.5 83.9565V0.5H50.5V83.9565L25.8133 64.1103L25.5 63.8585L25.1867 64.1103Z"
                                fill="#8E8372"
                                stroke="#675B4F"
                            />
                        </MonthOfDrinks>
                        <MonthOfDrinksText>
                            11월
                            <br />
                            pick
                        </MonthOfDrinksText>
                    </MonthOfDrinksDiv>
                )}
                <ImageWrap>
                    <img src={img} alt={name} />
                </ImageWrap>
                <Info>
                    <InfoHead>
                        <h1>{name}</h1>
                        <h1>{abv}%</h1>
                    </InfoHead>
                    <InfoFoot>
                        <Star star={star} widthValue={0.95} />
                    </InfoFoot>
                </Info>
            </DrinkElementWrap>
        </LinkWrap>
    );
};

export default DrinkListElement;

const MonthOfDrinksDiv = styled.div`
    width: 3.125em;
    height: 5.216em;
    position: absolute;
    top: 0;
    right: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        right: 0.625em;
        width: 2.125em;
        height: 3.625em;
    }
`;

const MonthOfDrinksText = styled.p`
    z-index: 10;
    color: #fff;
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 550;
    font-size: 0.9375em;
    line-height: 1.333em;
    text-align: center;
    letter-spacing: -0.01em;
    margin-bottom: 0.8em;
    @media (max-width: 767px) {
        font-size: 0.625em;
        line-height: 1em;
        margin-bottom: 0.8em;
    }
`;

const MonthOfDrinks = styled.svg`
    width: 3.125em;
    height: 5.216em;
    position: absolute;
    z-index: 9;
    @media (max-width: 767px) {
        width: 2.125em;
        height: 3.625em;
    }
`;

const LinkWrap = styled(Link)`
    text-decoration: none;
`;

const DrinkElementWrap = styled.div`
    position: relative;
    width: 22.313em;
    height: 31.875em;
    border-radius: 1.125em;
    border: 1px solid rgba(139, 126, 106, 0.6);
    color: #8b7e6a;
    box-sizing: border-box;

    &:hover {
        background: rgba(205, 205, 205, 0.4);
        border-radius: 1.125em;
    }
    cursor: pointer;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 64vw;
        border: 1px solid #675b4f;
        border-radius: 0.625em;
        &:hover {
            border-radius: 0.625em;
            background: none;
        }
    }
`;

const DrinkCategory = styled.div<{ isMonth: boolean }>`
    position: absolute;
    top: ${(props) => (props.isMonth ? `6.779em` : `1.563em`)};
    right: ${(props) => (props.isMonth ? `1.8em` : `1.688em`)};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
        width: 2.938em;
        top: 1em;
        left: 0.75em;
        right: 0;
        h1 {
            font-size: 0.75em;
        }
    }
`;

const CategoryIcon = styled.div`
    box-sizing: border-box;
    width: 3.563em;
    height: 3.563em;
    border: 1px solid #675b4f;
    border-radius: 50%;
    margin-bottom: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
        height: 2.45em;
        width: 2.25em;
    }
    @media (max-width: 767px) {
        width: 2.188em;
        height: 2.188em;
        > svg {
            width: 1.563em;
            height: 1.563em;
        }
    }
`;

const ImageWrap = styled.div`
    position: relative;
    height: 20.188em;
    width: 100%;
    // overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 3.25em;
    img {
        height: 85%;
        object-fit: cover;
    }
    @media (max-width: 767px) {
        height: 75%;
        margin-bottom: 0;
        align-items: center;
        img {
            height: 75%;
            // width: 5.625em;
        }
    }
`;

const Info = styled.div`
    width: 18.75em;
    display: flex;
    flex-direction: column;
    padding: 0 1.75em;
    @media (max-width: 767px) {
        width: calc(100% - 2.2em);
        padding: 0;
        padding-bottom: 0.3em;
    }
`;

const InfoHead = styled.div`
    width: 100%;
    height: 2.5em;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.063em;
    color: #8b7e6a;
    h1 {
        font-size: 1.25em;
    }
    @media (max-width: 767px) {
        height: 1.063em;
        margin-bottom: 0.438em;
        h1 {
            font-size: 0.688em;
        }
        h1:first-of-type {
            width: 8.625em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

const InfoFoot = styled.div`
    font-family: 'GmarketSansLight';
    color: #8b7e6a;
    font-size: 1.125em;
    @media (max-width: 767px) {
        font-size: 0.75em;
        svg {
            width: 1em;
            height: 1em;
        }
    }
`;
