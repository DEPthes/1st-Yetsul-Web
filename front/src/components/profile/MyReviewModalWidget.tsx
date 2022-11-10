import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Star from '../common/Star';

type myreviewtype = {
    alcoholId: number;
    title: string;
    star: number;
};

export const MyReviewModalWidget: React.FC<myreviewtype> = ({
    alcoholId,
    title,
    star,
}) => {
    const MyreviewAlcoholId = alcoholId;
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
                    <Star star={star} widthValue={10} heightValue={14} />
                </StarBox>
                <SeeFull>이어쓰기 &#62;</SeeFull>
            </MyreviewRightSection>
        </MyreviewBarInner>
    );
};

const LinkWrap = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const MyreviewBarInner = styled.div`
    width: 97%;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-bottom: 0.865vw;
    display: flex;
    @media screen and (max-width: 767px) {
    border-radius: 12px;
    margin-bottom: 1.795vw;
    }

`;
const MyreviewDrinkImgSection = styled.div`
    margin-left: 3.125vw;
    height: 3.822vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    @media screen and (max-width: 767px) {
        margin-left: 3.590vw;
        height: 21.538vw;
    }
`;
const MyreviewDrinkImg = styled.img`
    height: 70%;
`;
const MyreviewInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    @media screen and (max-width: 767px) {
        width: 50%;
    }
`;
const MyreviewInformationUpper = styled.div`
    display: flex;
    align-items: center;
`;
const MyreviewInformationLower = styled.div`
`;
const MyreviewDrinkKind = styled.div`
    color: #454038;
    border: 1px solid #454038;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    font-size: 0.677vw;
    width: 2.577vw;
    padding: 0 0.3vw;
    @media screen and (max-width: 767px) {
        width: 10.256vw;
        padding: 1vw 0.3vw;
    }
`;
const MyreviewDrinkName = styled.div`
    font-size: 0.938vw;
    margin-top: 0.156vw;
    margin-left: 0.573vw;
    color: #675b4f;
    @media screen and (max-width: 767px) {
        font-size: 4.359vw;

    }
`;
const MyreviewHeading = styled.div`
    margin-top: 0.120vw;
    font-size: 0.677vw;
    margin-left: 0.365vw;
`;
const MyreviewRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

`;

const SeeFull = styled.div`
    font-size: 0.573vw;
`;

const StarBox = styled.div`
    height: 30px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 767px) {
        height: 30px;
    }
`;
