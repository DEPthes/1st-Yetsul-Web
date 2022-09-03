import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../common/Star';

export interface DrinkDetailElementType {
    AlcoholName: string; // 술 이름
    category: number; // 주종
    brewery: string; // 양조장
    price: number; // 가격
    AlcoholByVolume: number; // 도수
    sweet: boolean; // 달달함
    bitter: boolean; // 쓴 맛
    refreshing: boolean; // 상큼함
    clean: boolean; // 깔끔함
    cool: boolean; // 청량함
    sour: boolean; // 신 맛
    description: string; // 술 설명
    star: number; // 술 별 점
    alcoholImage: string; // 술 사진
}

const DrinkDetailElement: React.FC<DrinkDetailElementType> = ({
    AlcoholName,
    category,
    brewery,
    price,
    AlcoholByVolume,
    sweet,
    bitter,
    refreshing,
    clean,
    cool,
    sour,
    description,
    star,
    alcoholImage,
}) => {
    return (
        <div>
            <AlcoholExplain>
                <AlcoholImg src={alcoholImage} alt={AlcoholName} />
                <AlcoholExplain2>
                    <AlcoholType>
                        {category === 1 ? '탁주' : null}
                        {category === 2 ? '과실주' : null}
                        {category === 3 ? '약주' : null}
                        {category === 4 ? '청주' : null}
                        {category === 5 ? '증류주' : null}
                        {category === 6 ? '리큐르주' : null}
                    </AlcoholType>
                    <AlcoholHeart src="/images/Heart.png" alt="빈 하트" />
                    <AlcoholNames>{AlcoholName}</AlcoholNames>
                    <Star
                        star={star}
                        big={false}
                        widthValue={29}
                        heightValue={27}
                    />
                    <SeeReviewLink to="/">(리뷰 +100) &gt;</SeeReviewLink>
                    <Line />
                    <AlcoholVolume>{AlcoholByVolume}%</AlcoholVolume>
                    <Line />
                    <AlcoholPrice>&#8361; {price}원대</AlcoholPrice>
                    <Line />
                    <Distillery>{brewery}</Distillery>
                    <Explain>{description}</Explain>
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
                        {sweet ? <SweetCircle /> : null}
                        {bitter ? <BitterCircle /> : null}
                        {refreshing ? <RefreshingCircle /> : null}
                        {clean ? <CleanCircle /> : null}
                        {cool ? <CoolCircle /> : null}
                        {sour ? <SourCircle /> : null}
                    </Box>
                </TasteBox>
            </AlcoholTaste>
        </div>
    );
};
export default DrinkDetailElement;

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
