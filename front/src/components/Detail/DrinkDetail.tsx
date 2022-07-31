import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const DrinkDetail: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="100%">
            <AlcoholExplain>
                <AlcoholImg src="/images/AlcoholImg.png" alt="술 사진" />
                <AlcoholExplain2>
                    <AlcoholName>담은</AlcoholName>
                    <AlcoholVolume>6.5%</AlcoholVolume>
                    <AlcoholStar>
                        <AlcoholStar1
                            src="/images/StarFill.png"
                            alt="채워진 별"
                        />
                        <AlcoholStar2
                            src="/images/StarFill.png"
                            alt="채워진 별"
                        />
                        <AlcoholStar3
                            src="/images/StarFill.png"
                            alt="채워진 별"
                        />
                        <AlcoholStar4 src="/images/star.png" alt="빈 별" />
                        <AlcoholStar5 src="/images/star.png" alt="빈 별" />
                    </AlcoholStar>
                    <SeeReviewLink to="/">(리뷰 +100) &gt;</SeeReviewLink>
                    <Line />
                    <AlcoholPrice>$ 11000원대</AlcoholPrice>
                    <Line />
                    <Distillery>(주)1932 포천일동막걸리</Distillery>
                    <Explain>
                        전통 누륵의 우수한 균주만을 사용한 100% 수제 공법
                        생쌀발효
                        <br />
                        프리미엄 막걸리 담은, 부드럽고 포근한 구름의 맛을
                        선사합니다.
                    </Explain>
                    <WriteReviewLink to="/">리뷰 작성하기&gt;</WriteReviewLink>
                </AlcoholExplain2>
            </AlcoholExplain>
        </BackgroundTemplate>
    );
};
export default DrinkDetail;

const AlcoholExplain = styled.div`
    display: flex;
    justify-content: center;
`;

const AlcoholExplain2 = styled.div`
    margin-top: 336px;
    display: inline-block;
`;

const AlcoholImg = styled.img`
    width: 420px;
    height: 500px;
    margin-top: 235px;
    padding-right: 130px;
`;

const AlcoholName = styled.div`
    position: absolute;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: #8b7e6a;
`;

const AlcoholVolume = styled.div`
    padding-top: 8px;
    padding-left: 450px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #8b7e6a;
`;

const AlcoholStar = styled.div`
    margin-top: 35px;
    display: inline-block;
`;
const AlcoholStar1 = styled.img`
    margin-right: 5px;
`;

const AlcoholStar2 = styled.img`
    margin-right: 5px;
`;

const AlcoholStar3 = styled.img`
    margin-right: 5px;
`;

const AlcoholStar4 = styled.img`
    margin-right: 5px;
`;

const AlcoholStar5 = styled.img`
    margin-right: 5px;
`;

const SeeReviewLink = styled(Link)`
    text-decoration: none;

    margin-left: 5px;

    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color: #8b7e6a;
`;

const Line = styled.div`
    margin-top: 20px;
    width: 505px;

    border-bottom: 1px solid #bbb6a8;
`;

const AlcoholPrice = styled.div`
    margin-top: 20px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #8b7e6a;
`;

const Distillery = styled.div`
    margin-top: 30px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #8b7e6a;
`;

const Explain = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;

    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 31px;
    color: #8b7e6a;
`;

const WriteReviewLink = styled(Link)`
    text-decoration: none;

    margin-left: 380px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #8b7e6a;
`;
