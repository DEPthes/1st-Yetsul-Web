import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import TodayDate from './TodayDate';
import ShareImg from '../DrinkTestShare/ShareImg';
import ShareLink from '../DrinkTestShare/ShareLink';
import ShareKakaoBtn from '../DrinkTestShare/ShareKakaoBtn';
import Source from './Source';

const DrinkTicketBoxResult: React.FC = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<ResultMoiveType>(Object);
    const [drink, setDrink] = useState<ResultDrinkType>(Object);
    const [drinks, setDrinks] = useState<ResultDrinkType[]>([]);
    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        axios
            .post(`http://depth-server.herokuapp.com/ticketbox/result`, {
                resultCombination: params.resultStr,
            })
            .then((res) => {
                setTicket(res.data);
                if (ticket.length > 0) {
                    setMovie(ticket[0][0]);
                    setDrink(ticket[1]);
                    setDrinks(ticket[2]);
                } else {
                    setLoading(false);
                }
            })
            .catch((err) => console.log(err));
    }, [loading]);

    return (
        <BackgroundTemplate heightValue="auto">
            <Result>
                <ResultText>나의 옛술 티켓 확인하기</ResultText>
                <div id="imgDiv">
                    <ImgDiv>
                        <Ticket>
                            <Date>
                                <TodayDate />
                            </Date>
                            <LogoImg src="/images/LogoImg.svg" alt="LogoImg" />
                            <LogoText
                                src="/images/LogoText.svg"
                                alt="LogoText"
                            />
                            <div>
                                <TicketText margin={25.36} mediamargin={3.64}>
                                    TICKET
                                </TicketText>
                                <div>
                                    <FlavorText>FLAVOR</FlavorText>
                                    <DottedLine margin={0} mediamargin={5} />
                                    <Flavors>
                                        <Flavor
                                            marginleft={-4}
                                            marginright={14}
                                            mediamarginleft={0}
                                            mediamarginright={5}
                                        >
                                            달달함
                                        </Flavor>
                                        <Flavor
                                            marginleft={11}
                                            marginright={12}
                                            mediamarginleft={5}
                                            mediamarginright={5}
                                        >
                                            쓴 맛
                                        </Flavor>
                                        <Flavor
                                            marginleft={13}
                                            marginright={10}
                                            mediamarginleft={3}
                                            mediamarginright={4}
                                        >
                                            상큼함
                                        </Flavor>
                                        <Flavor
                                            marginleft={10}
                                            marginright={9}
                                            mediamarginleft={4}
                                            mediamarginright={5}
                                        >
                                            깔끔함
                                        </Flavor>
                                        <Flavor
                                            marginleft={10}
                                            marginright={12}
                                            mediamarginleft={2}
                                            mediamarginright={4}
                                        >
                                            청량함
                                        </Flavor>
                                        <Flavor
                                            marginleft={10}
                                            marginright={0}
                                            mediamarginleft={3}
                                            mediamarginright={3}
                                        >
                                            신 맛
                                        </Flavor>
                                    </Flavors>
                                    <div>
                                        <FlavorBox>
                                            {drink.sweet ? <Circle /> : null}
                                        </FlavorBox>
                                        <FlavorBox>
                                            {drink.bitter ? <Circle /> : null}
                                        </FlavorBox>
                                        <FlavorBox>
                                            {drink.refreshing ? (
                                                <Circle />
                                            ) : null}
                                        </FlavorBox>
                                        <FlavorBox>
                                            {drink.clean ? <Circle /> : null}
                                        </FlavorBox>
                                        <FlavorBox>
                                            {drink.cool ? <Circle /> : null}
                                        </FlavorBox>
                                        <FlavorBox>
                                            {drink.sour ? <Circle /> : null}
                                        </FlavorBox>
                                    </div>
                                </div>
                                <Title>TITLE : {movie.title}</Title>
                                <DottedLine margin={4.34} mediamargin={3} />
                                <CircleDottedLine>
                                    <CircleMovieImg
                                        src={movie.image}
                                        alt={movie.title}
                                    />
                                </CircleDottedLine>
                                <ImgSource>
                                    <Source title={movie.title} />
                                </ImgSource>
                                <DottedLine margin={12.28} mediamargin={1} />
                                <Drinks margin={0} mediamargin={220}>
                                    <DrinkImg
                                        src={drink.alcoholImage}
                                        alt={drink.AlcoholName}
                                    />
                                    <Drink>
                                        <DrinkVolume>
                                            {drink.AlcoholByVolume}%
                                        </DrinkVolume>
                                        <DrinkType>
                                            <DrinkTypeText>
                                                {(() => {
                                                    if (drink.category === 1) {
                                                        return '탁주';
                                                    }
                                                    if (drink.category === 2) {
                                                        return '과실주';
                                                    }
                                                    if (drink.category === 3) {
                                                        return '약주';
                                                    }
                                                    if (drink.category === 4) {
                                                        return '청주';
                                                    }
                                                    if (drink.category === 5) {
                                                        return '증류주';
                                                    }
                                                    if (drink.category === 6) {
                                                        return '리큐르주';
                                                    }
                                                    return null;
                                                })()}
                                            </DrinkTypeText>
                                        </DrinkType>
                                        <DrinkName>
                                            {drink.AlcoholName}
                                        </DrinkName>
                                        <DrinkDetail>
                                            {movie.description}
                                        </DrinkDetail>
                                        <DetailLink
                                            to={`/list/${drink.id}/spec`}
                                            margin={150}
                                        >
                                            상세페이지 &gt;
                                        </DetailLink>
                                    </Drink>
                                </Drinks>
                            </div>
                            <TicketText margin={750} mediamargin={420}>
                                TICKET
                            </TicketText>
                            <DottedLine margin={22.94} mediamargin={5} />
                            <Plus>이런 술도 있어요!</Plus>
                            <DottedLinex />
                            {drinks.map((data) => {
                                return (
                                    <Drinks
                                        key={data.id}
                                        margin={24.48}
                                        mediamargin={180}
                                    >
                                        <DrinkImg
                                            src={data.alcoholImage}
                                            alt={data.AlcoholName}
                                        />
                                        <Drink>
                                            <DrinkVolume>
                                                {data.AlcoholByVolume}%
                                            </DrinkVolume>
                                            <DrinkType>
                                                <DrinkTypeText>
                                                    {(() => {
                                                        if (
                                                            data.category === 1
                                                        ) {
                                                            return '탁주';
                                                        }
                                                        if (
                                                            data.category === 2
                                                        ) {
                                                            return '과실주';
                                                        }
                                                        if (
                                                            data.category === 3
                                                        ) {
                                                            return '약주';
                                                        }
                                                        if (
                                                            data.category === 4
                                                        ) {
                                                            return '청주';
                                                        }
                                                        if (
                                                            data.category === 5
                                                        ) {
                                                            return '증류주';
                                                        }
                                                        if (
                                                            data.category === 6
                                                        ) {
                                                            return '리큐르주';
                                                        }
                                                        return null;
                                                    })()}
                                                </DrinkTypeText>
                                            </DrinkType>
                                            <DrinkName>
                                                {data.AlcoholName}
                                            </DrinkName>
                                            <DrinkDetail>
                                                {data.description}
                                            </DrinkDetail>
                                            <DetailLink
                                                to={`/list/${data.id}/spec`}
                                                margin={165}
                                            >
                                                상세페이지 &gt;
                                            </DetailLink>
                                        </Drink>
                                    </Drinks>
                                );
                            })}
                        </Ticket>
                        <TicketImg src="/images/Ticket.svg" alt="Ticket" />
                    </ImgDiv>
                </div>
                <Restart>
                    <RestartLink to="/ticketbox">다시하기</RestartLink>
                </Restart>
                <Share>
                    <ShareText>
                        친구들한테 <strong>공유하고</strong>
                        <br /> 옛술의 전당 알리기!
                    </ShareText>
                </Share>
                <ShareBtn>
                    <ShareLink />
                    <ShareKakaoBtn />
                    <ShareImg />
                </ShareBtn>
            </Result>
        </BackgroundTemplate>
    );
};

export default DrinkTicketBoxResult;

const Result = styled.div`
    justify-content: center;
`;

const ImgDiv = styled.div`
    margin-left: 100px;
    margin-right: 100px;

    @media (max-width: 767px) {
        margin-left: 30px;
        margin-right: 30px;
    }
`;

const ResultText = styled.div`
    margin: auto;
    margin-top: 240px;
    width: 375px;
    height: 77px;

    border: 1px solid #675b4f;
    border-radius: 18px;

    font-family: 'GmarketSansBold';
    font-size: 20px;
    line-height: 83px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-top: 140px;
        width: 157px;
        height: 32px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 36px;
    }
`;

const Ticket = styled.div`
    position: absolute;
    text-align: center;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
`;

const TicketImg = styled.img`
    position: relative;
    width: 539.71px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 90px;
    margin-bottom: 30px;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));

    @media (max-width: 767px) {
        margin-top: 29px;
        width: 278px;
    }
`;

const Date = styled.div`
    margin-top: 125.81px;
    margin-right: 390px;

    font-size: 15px;
    line-height: 175.5%;
    text-align: center;

    color: #675b4f;

    @media (max-width: 767px) {
        margin-top: 55px;
        margin-right: 150px;
        font-size: 10px;
        transform: scale(0.9);
    }
`;

const LogoImg = styled.img`
    display: flex;
    margin: auto;
    width: 59.5px;

    @media (max-width: 767px) {
        margin-top: -10px;
        width: 27.27px;
    }
`;

const LogoText = styled.img`
    margin-top: 6.83px;
    width: 87.79px;

    @media (max-width: 767px) {
        margin-top: 2.73px;
        width: 40px;
    }
`;

const TicketText = styled.div<{ margin: number; mediamargin: number }>`
    margin-top: ${(props) => props.margin}px;
    font-size: 35px;
    line-height: 175.5%;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-top: ${(props) => props.mediamargin}px;
        font-size: 20px;
        line-height: 140%;
    }
`;

const FlavorText = styled.div`
    margin-top: 5.07px;
    font-family: 'InterMedium';
    font-size: 20px;
    line-height: 175.5%;
    text-align: center;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-top: 0px;
        font-size: 12px;
        line-height: 140%;
    }
`;

const DottedLine = styled.div<{ margin: number; mediamargin: number }>`
    margin: auto;
    margin-top: ${(props) => props.margin}px;
    width: 434.04px;
    height: 0px;

    border-bottom: 1px dashed #000000;

    @media (max-width: 767px) {
        width: 212px;
        margin-top: ${(props) => props.mediamargin}px;
    }
`;

const Flavors = styled.div`
    margin-top: 9.61px;

    @media (max-width: 767px) {
        margin-top: 5px;
    }
`;

const Flavor = styled.span<{
    marginleft: number;
    marginright: number;
    mediamarginleft: number;
    mediamarginright: number;
}>`
    margin-left: ${(props) => props.marginleft}px;
    margin-right: ${(props) => props.marginright}px;

    font-size: 15px;
    line-height: 175.5%;
    text-align: center;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-left: ${(props) => props.mediamarginleft}px;
        margin-right: ${(props) => props.mediamarginright}px;
        font-size: 10px;
    }
`;

const FlavorBox = styled.div`
    display: inline-block;
    margin-left: 16px;
    margin-right: 16px;
    width: 29.69px;
    height: 30.57px;

    border: 1px solid #675b4f;

    @media (max-width: 767px) {
        margin-left: 9.5px;
        margin-right: 10px;
        width: 13.5px;
        height: 13.5px;
    }
`;

const Circle = styled.div`
    position: absolute;
    margin-top: 7px;
    margin-left: 6px;
    width: 17.47px;
    height: 17.47px;
    border-radius: 50%;

    background: #8b7e6a;

    @media (max-width: 767px) {
        margin-top: 3px;
        margin-left: 3px;
        width: 7.71px;
        height: 7.71px;
    }
`;

const Title = styled.div`
    margin-top: 30px;
    margin-left: 55px;
    text-align: left;
    font-size: 20px;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-left: 0px;
        margin-top: 5px;
        font-size: 13px;
    }
`;

const CircleDottedLine = styled.div`
    margin: auto;
    margin-top: 24.45px;
    width: 156.32px;
    height: 156.32px;

    border-radius: 50%;
    border: 1px dashed #675b4f;

    @media (max-width: 767px) {
        margin-top: 15px;
        width: 57px;
        height: 57px;
    }
`;

const CircleMovieImg = styled.img`
    margin-top: 6.99px;
    width: 142.35px;

    @media (max-width: 767px) {
        margin-top: 3px;
        width: 51px;
    }
`;

const ImgSource = styled.div`
    text-align: right;
    margin-top: 2.11px;
    margin-right: 15px;

    @media (max-width: 767px) {
        margin-top: 0px;
        margin-right: 0px;
    }
`;

const Drinks = styled.div<{ margin: number; mediamargin: number }>`
    display: flex;
    margin-top: ${(props) => props.margin}px;
    margin-bottom: 330px;

    @media (max-width: 767px) {
        margin-top: 0px;
        margin-bottom: ${(props) => props.mediamargin}px;
    }
`;

const DrinkImg = styled.img`
    position: absolute;
    margin-top: 42.35px;
    margin-left: 20px;
    width: 173.63px;
    height: 170.71px;

    @media (max-width: 767px) {
        margin-top: 39px;
        margin-left: 0px;
        width: 89px;
        height: 87px;
    }
`;

const Drink = styled.div`
    position: absolute;
    margin-left: 230.93px;

    @media (max-width: 767px) {
        margin-left: 96px;
    }
`;

const DrinkType = styled.div`
    margin-top: 43.81px;
    width: 68.04px;
    height: 28.65px;

    border: 1px solid #8b7e6a;
    border-radius: 18px;

    @media (max-width: 767px) {
        margin-top: 14px;
        width: 29.31px;
        height: 12.34px;
    }
`;

const DrinkTypeText = styled.div`
    font-size: 15px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #8b7e6a;

    @media (max-width: 767px) {
        font-size: 7.5px;
        zoom: 0.75;
        line-height: 19px;
    }
`;

const DrinkVolume = styled.div`
    position: absolute;
    margin-top: 50.69px;
    right: 5%;

    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #8b7e6a;

    @media (max-width: 767px) {
        margin-top: 13px;
        font-size: 10px;
    }
`;

const DrinkName = styled.div`
    margin-top: 13.23px;

    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #675b4f;
    word-break: keep-all;

    @media (max-width: 767px) {
        margin-top: 9.72px;
        line-height: 118.5%;
        font-size: 15px;
    }
`;

const DrinkDetail = styled.div`
    margin-top: 13.38px;

    font-size: 15px;
    line-height: 151.5%;
    text-align: left;
    letter-spacing: -0.01em;
    color: #8e8372;

    @media (max-width: 767px) {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 9px;
        zoom: 0.95;
        line-height: 136%;
        color: #bbb6a8;
    }
`;

const DetailLink = styled(Link)<{ margin: number }>`
    text-decoration: none;
    margin-left: ${(props) => props.margin}px;

    font-size: 13px;
    line-height: 45px;
    letter-spacing: -0.01em;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-left: 55px;
        font-size: 10px;
        line-height: 10px;
    }
`;

const Plus = styled.div`
    margin-top: 36.37px;

    font-size: 25px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #675b4f;

    @media (max-width: 767px) {
        margin-top: 13px;
        font-size: 13px;
        line-height: 13px;
    }
`;

const DottedLinex = styled.div`
    position: absolute;
    margin-top: 315px;
    left: 50%;
    transform: translate(-50%);
    width: 434.04px;
    height: 0px;

    border-bottom: 1px dashed #000000;

    @media (max-width: 767px) {
        margin-top: 180px;
        width: 212px;
    }
`;

const Restart = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        margin-top: 0px;
    }
`;

const RestartLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 157px;
    height: 157px;

    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 50%;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 162px;
    letter-spacing: -0.01em;
    color: #8b7e6a;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 66px;
        height: 67px;

        font-size: 13px;
        line-height: 70px;
    }
`;

const Share = styled.div`
    display: flex;
    justify-content: center;
`;

const ShareText = styled.div`
    margin-top: 88px;
    text-align: center;

    font-size: 25px;
    line-height: 50px;
    letter-spacing: 0.01em;
    color: #675b4f;

    strong {
        font-family: 'GmarketSansBold';
    }

    @media (max-width: 767px) {
        margin-top: 30px;
        font-size: 15px;
        line-height: 170%;
    }
`;

const ShareBtn = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 83px;
    margin-bottom: 326px;

    @media (max-width: 767px) {
        margin-top: 40px;
        margin-bottom: 78.77px;
    }
`;

type ResultMoiveType = {
    id: number;
    title: string;
    description: string;
    image: string;
    alcohol: number;
};

type ResultDrinkType = {
    id: number;
    AlcoholName: string;
    category: number;
    brewery: string;
    price: number;
    sweet: boolean;
    bitter: boolean;
    refreshing: boolean;
    clean: boolean;
    cool: boolean;
    sour: boolean;
    description: string;
    star: string;
    AlcoholByVolume: number;
    alcoholImage: string;
};
