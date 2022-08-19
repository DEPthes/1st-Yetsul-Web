import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const DrinkDetail: React.FC = () => {
    const { id } = useParams();
    const [alcohol, setAlcohol] = useState<DrinkDetailType>({
        id: 0,
        AlcoholName: '',
        category: 0,
        brewery: '',
        price: 0,
        AlcoholByVolume: 0,
        sweet: false,
        bitter: false,
        refreshing: false,
        clean: false,
        cool: false,
        sour: false,
        description: '',
        star: 0,
        alcoholImage: '',
    });

    useEffect(() => {
        axios
            .get(`https://depth-server.herokuapp.com/alcohol/description/${id}`)
            .then((res) => setAlcohol(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <BackgroundTemplate heightValue="auto">
            <div>
                <AlcoholExplain>
                    <AlcoholImg
                        src={alcohol.alcoholImage}
                        alt={alcohol.AlcoholName}
                    />
                    <AlcoholExplain2>
                        <AlcoholType>탁주</AlcoholType>
                        <AlcoholHeart src="/images/Heart.png" alt="빈 하트" />
                        <AlcoholNames>{alcohol.AlcoholName}</AlcoholNames>
                        {alcohol.star === 0 ? (
                            <AlcoholStar>
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                            </AlcoholStar>
                        ) : null}
                        {alcohol.star === 1 ? (
                            <AlcoholStar>
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                            </AlcoholStar>
                        ) : null}
                        {alcohol.star === 2 ? (
                            <AlcoholStar>
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                            </AlcoholStar>
                        ) : null}
                        {alcohol.star === 3 ? (
                            <AlcoholStar>
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                            </AlcoholStar>
                        ) : null}
                        {alcohol.star === 4 ? (
                            <AlcoholStar>
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/star.png"
                                    alt="빈 별"
                                />
                            </AlcoholStar>
                        ) : null}
                        {alcohol.star === 5 ? (
                            <AlcoholStar>
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                                <AlcoholStarS
                                    src="/images/StarFill.png"
                                    alt="채워진 별"
                                />
                            </AlcoholStar>
                        ) : null}
                        <SeeReviewLink to="/">(리뷰 +100) &gt;</SeeReviewLink>
                        <Line />
                        <AlcoholVolume>
                            {alcohol.AlcoholByVolume}%
                        </AlcoholVolume>
                        <Line />
                        <AlcoholPrice>&#8361; {alcohol.price}원대</AlcoholPrice>
                        <Line />
                        <Distillery>{alcohol.brewery}</Distillery>
                        <Explain>{alcohol.description}</Explain>
                    </AlcoholExplain2>
                </AlcoholExplain>
                <AlcoholTaste>
                    <AlcoholGraph>맛 그래프</AlcoholGraph>
                    <LingLine />
                    <Tastes>
                        <Taste>달달함</Taste>
                        <HLine>ㅣ</HLine>
                        <Taste>쓴 맛</Taste>
                        <HLine>ㅣ</HLine>
                        <Taste>상큼함</Taste>
                        <HLine>ㅣ</HLine>
                        <Taste>깔끔함</Taste>
                        <HLine>ㅣ</HLine>
                        <Taste>청량함</Taste>
                        <HLine>ㅣ</HLine>
                        <Taste>신 맛</Taste>
                    </Tastes>
                    <TasteBox>
                        <Box>
                            {alcohol.sweet ? <SweetCircle /> : null}
                            {alcohol.bitter ? <BitterCircle /> : null}
                            {alcohol.refreshing ? <RefreshingCircle /> : null}
                            {alcohol.clean ? <CleanCircle /> : null}
                            {alcohol.cool ? <CoolCircle /> : null}
                            {alcohol.sour ? <SourCircle /> : null}
                        </Box>
                    </TasteBox>
                </AlcoholTaste>
            </div>
        </BackgroundTemplate>
    );
};
export default DrinkDetail;
const AlcoholExplain = styled.div`
    display: flex;
    justify-content: center;
`;

const AlcoholExplain2 = styled.div`
    margin-top: 265px;
    display: inline-block;
`;

const AlcoholImg = styled.img`
    width: 420px;
    height: 500px;
    margin-top: 235px;
    padding-right: 130px;
`;

const AlcoholType = styled.div`
    width: 76px;
    height: 34px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #454038;
    border-radius: 24px;
    color: #454038;
`;

const AlcoholHeart = styled.img`
    position: absolute;
    padding-left: 460px;
    padding-top: 60px;
`;

const AlcoholNames = styled.div`
    width: 330px;
    margin-top: 25px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #8b7e6a;
`;

const AlcoholStar = styled.div`
    display: inline-block;
`;

const AlcoholStarS = styled.img`
    margin-right: 5px;
`;

const SeeReviewLink = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #8b7e6a;
`;

const AlcoholVolume = styled.div`
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #8b7e6a;
`;

const Line = styled.div`
    margin-top: 15px;
    width: 505px;
    border-bottom: 1px solid #bbb6a8;
`;

const AlcoholPrice = styled.div`
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #8b7e6a;
`;

const Distillery = styled.div`
    margin-top: 30px;
    margin-left: 5px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #8b7e6a;
`;

const Explain = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 5px;
    width: 500px;
    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 31px;
    color: #8b7e6a;
`;

const AlcoholTaste = styled.div`
    margin-top: 300px;
`;

const AlcoholGraph = styled.div`
    margin-left: 20px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    color: #675b4f;
`;

const LingLine = styled.div`
    margin-top: 30px;
    width: 1000px;
    border-bottom: 1px solid #bbb6a8;
`;

const Tastes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 70px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    color: #8b7e6a;
`;

const Taste = styled.div`
    margin-right: 20px;
    font-size: 23px;
`;

const HLine = styled.div`
    margin-right: 20px;
    font-size: 18px;
`;

const TasteBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 450px;
`;

const Box = styled.div`
    width: 700px;
    height: 65px;
    border: 1px solid #8b7e6a;
    border-radius: 18px;
`;

const SweetCircle = styled.div`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: 30px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;

const BitterCircle = styled.div`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: 150px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;

const RefreshingCircle = styled.div`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: 268px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;

const CleanCircle = styled.div`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: 391px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;

const CoolCircle = styled.div`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: 517px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;

const SourCircle = styled.div`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: 638px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;

type DrinkDetailType = {
    id: number;
    AlcoholName: string;
    category: number;
    brewery: string;
    price: number;
    AlcoholByVolume: number;
    sweet: boolean;
    bitter: boolean;
    refreshing: boolean;
    clean: boolean;
    cool: boolean;
    sour: boolean;
    description: string;
    star: number;
    alcoholImage: string;
};
