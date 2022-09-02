import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../common/Star';

type drinkInfoType = {
    id: number;
    img: string; // 술 이미지
    name: string; // 술 이름
    abv: number; // 알코올 도수
    category: number;
    star: number;
};

const DrinkListElement: React.FC<drinkInfoType> = ({
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
                <ImageWrap>
                    <img src={img} alt={name} />
                    <DrinkCategory>
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
                                    2: `과실주`,
                                    3: `약주`,
                                    4: `청주`,
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
                                    6: `리큐르주`,
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
                </ImageWrap>
                <Info>
                    <InfoHead>
                        <h1>{name}</h1>
                        <h1>{abv}%</h1>
                    </InfoHead>
                    <InfoFoot>
                        <Star
                            star={star}
                            big={false}
                            widthValue={29}
                            heightValue={27}
                        />
                    </InfoFoot>
                </Info>
            </DrinkElementWrap>
        </LinkWrap>
    );
};

export default DrinkListElement;

const LinkWrap = styled(Link)`
    text-decoration: none;
`;

const DrinkElementWrap = styled.div`
    width: 357px;
    height: 510px;
    border-radius: 18px;
    border: 1px solid rgba(139, 126, 106, 0.6);
    color: #8b7e6a;
    box-sizing: border-box;

    &:hover {
        background: rgba(205, 205, 205, 0.4);
        border-radius: 18px;
    }
    cursor: pointer;
`;

const DrinkCategory = styled.div`
    position: absolute;
    top: 25px;
    right: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CategoryIcon = styled.div`
    box-sizing: border-box;
    width: 57px;
    height: 57px;
    border: 1px solid #675b4f;
    border-radius: 50%;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageWrap = styled.div`
    position: relative;
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
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0 28px;
`;

const InfoHead = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    color: #8b7e6a;
    font-size: 20px;
`;

const InfoFoot = styled.div`
    font-family: 'GmarketSansLight';
    color: #8b7e6a;
    font-size: 18px;
`;
