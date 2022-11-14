import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Star from '../common/Star';

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
        const JWT = localStorage.getItem('accessToken') || '';
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };

    useEffect(() => {
        getData()
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/alcohol/description/${MyreviewAlcoholId}`,
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
                    <MyreviewDrinkKind>{categoryString}</MyreviewDrinkKind>
                    <MyreviewDrinkName>
                        {MyreviewAlcoholeName}
                    </MyreviewDrinkName>
                </MyreviewInformationUpper>
                <MyreviewInformationLower>
                    <MyreviewHeading>{title}</MyreviewHeading>
                </MyreviewInformationLower>
            </MyreviewInformationSection>
            <MyreviewRightSection>
                <StarBox>
                    <Star star={star} widthValue={0.625} />
                </StarBox>
                <LinkWrap to={`/review/alcohol${alcoholId}/review${reviewId}`}>
                    <SeeFull>전체보기 &#62;</SeeFull>
                </LinkWrap>
            </MyreviewRightSection>
        </MyreviewBarInner>
    );
};

const LinkWrap = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const MyreviewBarInner = styled.div`
    height: 5.198vw;
    width: 100%;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    margin-top: 1em;
    @media screen and (max-width: 767px) {
        width: 85.128vw;
        height: 21.538vw;
        border-radius: 12px;
    }
`;
const MyreviewDrinkImgSection = styled.div`
    margin-left: 5.625em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        margin-left: 4.641vw;
    }
`;
const MyreviewDrinkImg = styled.img`
    width: 3.75vw;
    @media screen and (max-width: 767px) {
        width: 11.282vw;
    }
`;

const MyreviewInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-left: 4vw;
    @media screen and (max-width: 767px) {
        margin-left: 4.641vw;
        height: 100%;
    }
`;
const MyreviewInformationUpper = styled.div`
    display: flex;
    margin-top: 0.898vw;
    @media screen and (max-width: 767px) {
        margin-top: 5.128vw;
        width: 90%;
    }
`;
const MyreviewInformationLower = styled.div``;
const MyreviewDrinkKind = styled.div`
    color: #454038;
    border: 1px solid #454038;
    border-radius: 24px;
    padding: 0.3vw 1vw;
    font-size: 0.9375em;
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
    margin-left: 20px;
    font-size: 1.302vw;
    margin-top: 3px;
    @media screen and (max-width: 767px) {
        margin-left: 1vw;
        font-size: 3.615vw;
        margin-top: -0.5vw;
    }
`;
const MyreviewHeading = styled.p`
    margin-left: 0.9375em;
    margin-top: 0.4375em;
    font-size: 0.781vw;
    @media screen and (max-width: 767px) {
        margin-left: 0vw;
        margin-top: 0vw;
        font-size: 3.077vw;
    }
`;
const MyreviewRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-right: 2.42875em;
    @media screen and (max-width: 767px) {
        margin-right: 5.641vw;
    }
`;

const SeeFull = styled.p`
    margin-top: 1.02vw;
    @media screen and (max-width: 767px) {
        font-size: 3.077vw;
        margin-top: 2.128vw;
    }
`;

const StarBox = styled.div`
    width: 8em;
    @media screen and (max-width: 767px) {
        width: 15vw;
    }
    display: flex;
    justify-content: flex-end;
`;
