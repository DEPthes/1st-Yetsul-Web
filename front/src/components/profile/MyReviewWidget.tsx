import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Star from '../common/Star';

type myreviewtype = {
    alcoholId: number;
    title: string;
    star: number;
};

export const MyReviewWidget: React.FC<myreviewtype> = ({
    alcoholId,
    title,
    star,
}) => {
    const MyreviewAlcoholId = alcoholId;
    const [MyreviewAlcoholData, setMyreviewAlcoholData] = useState(Object);
    useEffect(() => {
        axios
            .get(
                `https://depth-server.herokuapp.com/alcohol/description/${MyreviewAlcoholId}`,
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
                    <Star star={star} widthValue={15} heightValue={14} />
                </StarBox>
                <SeeFull>전체보기 &#62;</SeeFull>
            </MyreviewRightSection>
        </MyreviewBarInner>
    );
};

const MyreviewBarInner = styled.div`
    width: 100%;
    height: 119px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    margin: 8px;
`;
const MyreviewDrinkImgSection = styled.div`
    margin-left: 101.8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MyreviewDrinkImg = styled.img`
    height: 90px;
`;
const MyreviewInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    margin-left: 150px;
`;
const MyreviewInformationUpper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 23px;
`;
const MyreviewInformationLower = styled.div``;
const MyreviewDrinkKind = styled.div`
    color: #454038;
    border: 1px solid #454038;
    border-radius: 24px;
    padding: 10px 25px;
`;
const MyreviewDrinkName = styled.p`
    color: #675b4f;
    margin-left: 20px;
    font-size: 28px;
    line-height: 0;
    margin-top: 3px;
`;
const MyreviewHeading = styled.p`
    margin-top: 23px;
    margin-left: 15px;
`;
const MyreviewRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 200px;
    margin-right: 50px;
`;

const SeeFull = styled.p`
    margin-top: 25px;
`;

const StarBox = styled.div`
    width: 129px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
`;
