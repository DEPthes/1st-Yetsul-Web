import React, { useEffect, useState } from 'react';
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

const MyreviewBarInner = styled.div`
    width: 730px;
    height: 73.39px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    display: flex;
    margin-bottom: 16.61px;
    margin-top: 20px;
`;
const MyreviewDrinkImgSection = styled.div`
    margin-left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MyreviewDrinkImg = styled.img`
    height: 60px;
`;
const MyreviewInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const MyreviewInformationUpper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 6px;
    margin-left: 80px;
`;
const MyreviewInformationLower = styled.div`
    margin-left: 80px;
    margin-top: 10px;
`;
const MyreviewDrinkKind = styled.div`
    color: #454038;
    border: 1px solid #454038;
    border-radius: 24px;
    width: 43px;
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    font-size: 13px;
`;
const MyreviewDrinkName = styled.div`
    font-size: 18px;
    line-height: 0;
    margin-top: 3px;
    margin-left: 11px;
    color: #675b4f;
`;
const MyreviewHeading = styled.div`
    margin-top: 2.3px;
    font-size: 13px;
    margin-left: 7px;
`;
const MyreviewRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: 200px;
`;

const SeeFull = styled.div`
    font-size: 15px;
`;

const StarBox = styled.div`
    height: 30px;
    display: flex;
    justify-content: flex-end;
`;
