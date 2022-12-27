import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Star from '../common/Star';
import { getAccessToken } from '../../services/tokenControl';

type myreviewtype = {
    alcoholId: number;
    id: number;
    title: string;
    star: number;
};

export const MyReviewWidget: React.FC<myreviewtype> = ({
    alcoholId,
    title,
    star,
    id,
}) => {
    const MyreviewAlcoholId = alcoholId;
    const reviewId = id;
    const [MyreviewAlcoholData, setMyreviewAlcoholData] = useState(Object);

    const getData = () => {
        return axios.create({
            headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
    };

    useEffect(() => {
        getData()
            .get(
                `https://yetsul-server.site/alcohol/description/${MyreviewAlcoholId}`,
            )
            .then((res) => setMyreviewAlcoholData(res.data))
            .catch((err) => console.log(err));
    }, []);
    const MyreviewAlcoholeName = MyreviewAlcoholData.AlcoholName;
    const MyreviewAlcoholCategoryNum = MyreviewAlcoholData.category;
    const MyreviewAlcoholImg = MyreviewAlcoholData.alcoholImage;
    const [categoryString, setCategoryString] = useState(String);

    useEffect(() => {
        switch (MyreviewAlcoholCategoryNum) {
            case 1:
                setCategoryString('탁주');
                break;
            case 2:
                setCategoryString('과실주');
                break;
            case 3:
                setCategoryString('약주');
                break;
            case 4:
                setCategoryString('청주');
                break;
            case 5:
                setCategoryString('증류주');
                break;
            case 6:
                setCategoryString('리큐르주');
                break;
            default:
                console.log('fail');
                break;
        }
    }, [MyreviewAlcoholCategoryNum]);

    return (
        <MyreviewBarInner>
            <MyreviewDrinkImgSection>
                <MyreviewDrinkImg src={MyreviewAlcoholImg} />
            </MyreviewDrinkImgSection>
            <MyreviewInformationSection>
                <MyreviewInformationUpper>
                    <MyreviewAlcoholeInformationLine>
                        <MyreviewDrinkKind>{categoryString}</MyreviewDrinkKind>
                        <MyreviewDrinkName>
                            {MyreviewAlcoholeName}
                        </MyreviewDrinkName>
                    </MyreviewAlcoholeInformationLine>
                    <StarBox>
                        <Star star={star} widthValue={1.225} />
                    </StarBox>
                    <MobileStarBox>
                        <Star star={star} widthValue={0.625} />
                    </MobileStarBox>
                </MyreviewInformationUpper>
                <MyreviewInformationLower>
                    <MyreviewHeading>{title}</MyreviewHeading>
                    <LinkWrap
                        to={`/review/alcohol${alcoholId}/review${reviewId}`}
                    >
                        <SeeFull>전체보기 &#62;</SeeFull>
                    </LinkWrap>
                </MyreviewInformationLower>
            </MyreviewInformationSection>
        </MyreviewBarInner>
    );
};

const LinkWrap = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const MyreviewBarInner = styled.div`
    height: 4.998vw;
    width: 100%;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    align-items: center;
    margin-top: 0.573vw;
    @media screen and (max-width: 767px) {
        width: 85.128vw;
        height: 23.538vw;
        border-radius: 12px;
        margin-bottom: 1.521vw;
    }
`;
const MyreviewDrinkImgSection = styled.div`
    margin-left: 4.288vw;
    width: 15%;
    height: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        margin-left: 4.641vw;
    }
`;
const MyreviewDrinkImg = styled.img`
    height: 100%;
    @media screen and (max-width: 767px) {
        height: 17vw;
    }
`;

const MyreviewInformationSection = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4vw;
    @media screen and (max-width: 767px) {
        margin-left: 4.641vw;
        height: 100%;
    }
`;
const MyreviewInformationUpper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.198vw;
    justify-content: space-between;
    width: 120%;
    @media screen and (max-width: 767px) {
        margin-top: 5.128vw;
        width: 140%;
    }
`;

const MyreviewAlcoholeInformationLine = styled.div`
    display: flex;
    width: 70%;
`;
const MyreviewInformationLower = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120%;
    align-items: flex-end;
    @media screen and (max-width: 767px) {
        width: 58vw;
    }
`;
const MyreviewDrinkKind = styled.div`
    color: #454038;
    border: 1px solid #454038;
    border-radius: 24px;
    padding: 0.4vw 1vw;
    font-size: 0.781vw;
    white-space: nowrap;
    @media screen and (max-width: 767px) {
        height: 3.103vw;
        width: 9.6vw;
        font-size: 2.564vw;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.6vw;
    }
`;

const MyreviewDrinkName = styled.p`
    color: #675b4f;
    margin-left: 2vw;
    font-size: 1.302vw;
    white-space: nowrap;
    @media screen and (max-width: 767px) {
        margin-left: 1vw;
        font-size: 3.615vw;
        white-space: normal;
    }
`;
const MyreviewHeading = styled.p`
    font-size: 0.781vw;
    margin-top: 0.598vw;
    @media screen and (max-width: 767px) {
        margin-left: 0vw;
        margin-top: 2vw;
        font-size: 3.077vw;
    }
`;

const SeeFull = styled.p`
    margin-top: 1.02vw;
    z-index: 2222222;
    @media screen and (max-width: 767px) {
        font-size: 3.077vw;
    }
`;

const StarBox = styled.div`
    width: 4.5vw;
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const MobileStarBox = styled.div`
    display: none;
    @media screen and (max-width: 767px) {
        display: block;
        width: 15vw;
        margin-bottom: 1.5vw;
        height: 5vw;
    }
`;
