import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Star from '../common/Star';

type myreviewtype = {
    id: number;
    alcoholId: number;
    title: string;
    star: number;
    getData: () => Promise<void>;
};

export const MyReviewModalWidget: React.FC<myreviewtype> = ({
    id,
    alcoholId,
    title,
    star,
    getData,
}) => {
    const MyreviewAlcoholId = alcoholId;
    const [MyreviewAlcoholData, setMyreviewAlcoholData] = useState(Object);

    const getData2 = () => {
        const JWT = localStorage.getItem('accessToken') || '';
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };

    useEffect(() => {
        getData2()
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

    const deleteTemporary = async () => {
        // eslint-disable-next-line no-restricted-globals, no-alert
        if (confirm('정말 삭제하시겠습니까??') === true) {
            await axios.delete(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review?alcoholId=${alcoholId}&reviewId=${id}`,
            );
            // eslint-disable-next-line no-alert
            alert('리뷰가 삭제되었습니다.');
            getData();
        }
    };

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
                    <SeeFull>이어쓰기 &#62;</SeeFull>
                </MyreviewInformationLower>
            </MyreviewInformationSection>
            <MyreviewRightSection>
                <StarBox>
                    <Star star={star} widthValue={0.625} />
                </StarBox>
                <StarBoxMobile>
                    <Star star={star} widthValue={0.425} />
                </StarBoxMobile>
            </MyreviewRightSection>
            <RightRightSection>
                <CloseBtn>
                    <svg
                        width="38"
                        height="39"
                        viewBox="0 0 38 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                            deleteTemporary();
                        }}
                    >
                        <path
                            d="M11.1003 26.6909L25.9046 11.8866"
                            stroke="black"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11.1003 11.8862L25.9046 26.6905"
                            stroke="black"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />
                    </svg>
                </CloseBtn>
            </RightRightSection>
        </MyreviewBarInner>
    );
};

const RightRightSection = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    width: 1.75em;
`;

const CloseBtn = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0.388em;
    right: 0.388em;
    > svg {
        width: 1.75em;
        height: 1.75em;
        @media screen and (max-width: 767px) {
            width: 1.15em;
            height: 1.15em;
        }
        > path {
            stroke-width: 2.3;
        }
    }
`;

const MyreviewBarInner = styled.div`
    width: 97%;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-bottom: 0.865vw;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 767px) {
        border-radius: 12px;
        margin-bottom: 1.795vw;
    }
`;
const MyreviewDrinkImgSection = styled.div`
    margin-left: 3.125vw;
    width: 10%;
    height: 3.822vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3vw;
    @media screen and (max-width: 767px) {
        margin-left: 3.59vw;
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
    width: 50vw;
    display: flex;
    justify-content: space-between;
`;

const MyreviewDrinkKind = styled.div`
    color: #454038;
    border: 1px solid #454038;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    font-size: 0.677vw;
    width: 2.577vw;
    white-space: nowrap;
    padding: 0 0.3vw;
    @media screen and (max-width: 767px) {
        width: 10.256vw;
        padding: 1vw 1vw;
        margin-right: 2vw;
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
    margin-top: 0.12vw;
    font-size: 0.677vw;
    margin-left: 0.365vw;
`;
const MyreviewRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 20%;
    margin-right: 1.5vw;
    @media screen and (max-width: 767px) {
        margin-right: -6vw;
    }
`;

const SeeFull = styled.div`
    font-size: 0.573vw;
`;

const StarBox = styled.div`
    height: 30px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const StarBoxMobile = styled.div`
    display: none;
    @media screen and (max-width: 767px) {
        height: 8vw;
        display: flex;
        justify-content: flex-end;
    }
`;
