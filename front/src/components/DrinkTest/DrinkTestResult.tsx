import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const DrinkTicketBoxResult: React.FC = () => {
    const { state } = useLocation();
    const [movie, setMovie] = useState<ResultMoiveType>(Object);
    const [drink, setDrink] = useState<ResultDrinkType>(Object);
    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        axios
            .post(`https://depth-server.herokuapp.com/ticketbox/result`, {
                resultCombination: state,
            })
            .then((res) => {
                setTicket(res.data);
                setMovie(ticket[0][0]);
                setDrink(ticket[1]);
            })
            .catch((err) => console.log(err));
    });

    return (
        <BackgroundTemplate heightValue="auto">
            <Result>
                {ticket && (
                    <div>
                        <ResultText>나의 옛술 티켓 확인하기</ResultText>
                        <Ticket>
                            <Date>2022/08/24</Date>
                            <div>
                                <LogoImg
                                    src="/images/LogoImg.png"
                                    alt="LogoImg"
                                />
                            </div>
                            <LogoText
                                src="/images/LogoText.png"
                                alt="LogoText"
                            />
                            <div>
                                <TicketText>TICKET</TicketText>
                                <div>
                                    <FlavorText>FLAVOR</FlavorText>
                                    <DottedLine margin={3} />
                                    <Flavors>
                                        <Flavor marginleft={0} marginright={17}>
                                            달달함
                                        </Flavor>
                                        <Flavor
                                            marginleft={16}
                                            marginright={17}
                                        >
                                            쓴 맛
                                        </Flavor>
                                        <Flavor
                                            marginleft={17}
                                            marginright={15}
                                        >
                                            상큼함
                                        </Flavor>
                                        <Flavor
                                            marginleft={14}
                                            marginright={14}
                                        >
                                            깔끔함
                                        </Flavor>
                                        <Flavor
                                            marginleft={14}
                                            marginright={17}
                                        >
                                            청량함
                                        </Flavor>
                                        <Flavor marginleft={17} marginright={3}>
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
                                <DottedLine margin={10} />
                                <CircleDottedLine>
                                    <CircleMovieImg
                                        src={movie.image}
                                        alt={movie.title}
                                    />
                                </CircleDottedLine>
                                <DottedLine margin={17} />
                                <Drinks>
                                    <DrinkImg
                                        src={drink.alcoholImage}
                                        alt={drink.AlcoholName}
                                    />
                                    <Drink>
                                        <DrinkVolume>
                                            {drink.AlcoholByVolume}%
                                        </DrinkVolume>
                                        <DrinkType>
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
                                        </DrinkType>
                                        <DrinkName>
                                            {drink.AlcoholName}
                                        </DrinkName>
                                        <DrinkDetail>
                                            {movie.description}
                                        </DrinkDetail>
                                        <DetailLink to="/">
                                            상세페이지 &gt;
                                        </DetailLink>
                                    </Drink>
                                    <Rating>RATING : </Rating>
                                    {drink.star === '0' ? (
                                        <TicketStar>
                                            <TicketStarImg
                                                src="/images/TicketStar.png"
                                                alt="TicketStar"
                                            />
                                            <TicketStarImg
                                                src="/images/TicketStar.png"
                                                alt="TicketStar"
                                            />
                                            <TicketStarImg
                                                src="/images/TicketStar.png"
                                                alt="TicketStar"
                                            />
                                            <TicketStarImg
                                                src="/images/TicketStar.png"
                                                alt="TicketStar"
                                            />
                                            <TicketStarImg
                                                src="/images/TicketStar.png"
                                                alt="TicketStar"
                                            />
                                        </TicketStar>
                                    ) : null}
                                </Drinks>
                            </div>
                        </Ticket>
                        <Ticket1 src="/images/Ticket1.png" alt="Ticket1" />
                    </div>
                )}
            </Result>
        </BackgroundTemplate>
    );
};

export default DrinkTicketBoxResult;

const Result = styled.div`
    justify-content: center;
`;

const ResultText = styled.div`
    margin: auto;
    margin-top: 304px;
    width: 455px;
    height: 94px;

    border: 1px solid #675b4f;
    border-radius: 18px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 100px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #675b4f;
`;

const Ticket = styled.div`
    position: absolute;
    text-align: center;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
`;

const Ticket1 = styled.img`
    position: relative;
    margin-top: 50px;
    width: 618px;
    height: 2068px;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
`;

const Date = styled.div`
    margin-top: 94px;
    margin-right: 400px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 175.5%;
    text-align: center;

    color: #675b4f;
`;

const LogoImg = styled.img`
    margin-top: 7px;
    width: 71px;
    height: 61px;
`;

const LogoText = styled.img`
    margin-top: 8px;
    width: 105px;
    height: 26px;
`;

const TicketText = styled.div`
    margin-top: 19px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 175.5%;
    color: #675b4f;
`;

const FlavorText = styled.div`
    font-family: 'InterMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 175.5%;
    text-align: center;
    color: #675b4f;
`;

const DottedLine = styled.div<{ margin: number }>`
    margin: auto;
    margin-top: ${(props) => props.margin}px;
    width: 497px;
    height: 0px;

    border-bottom: 1px dashed #000000;
`;

const Flavors = styled.div`
    margin-top: 11px;
`;

const Flavor = styled.span<{ marginleft: number; marginright: number }>`
    margin-left: ${(props) => props.marginleft}px;
    margin-right: ${(props) => props.marginright}px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 175.5%;
    text-align: center;
    color: #675b4f;
`;

const FlavorBox = styled.div`
    display: inline-block;
    margin-left: 18px;
    margin-right: 18px;
    width: 34px;
    height: 35px;

    border: 1px solid #675b4f;
`;

const Circle = styled.div`
    position: absolute;
    margin-top: 7px;
    margin-left: 7px;
    width: 20px;
    height: 20px;
    border-radius: 10px;

    background: #8b7e6a;
`;

const Title = styled.div`
    margin-top: 30px;
    margin-right: 300px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #675b4f;
`;

const CircleDottedLine = styled.div`
    margin: auto;
    margin-top: 15px;
    width: 179px;
    height: 179px;

    border-radius: 100px;
    border: 1px dashed #675b4f;
`;

const CircleMovieImg = styled.img`
    margin-top: 8px;
    width: 163px;
    height: 163px;
`;

const Drinks = styled.div`
    display: flex;
`;

const DrinkImg = styled.img`
    position: absolute;
    margin-top: 23px;
    width: 252px;
    height: 252px;
`;

const Drink = styled.div`
    position: absolute;
    margin-left: 234px;
`;

const DrinkType = styled.div`
    width: 76px;
    height: 32px;
    margin-top: 56px;

    border: 1px solid #8b7e6a;
    border-radius: 18px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #8b7e6a;
`;

const DrinkVolume = styled.div`
    margin-top: 62px;
    right: 5%;

    position: absolute;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #8b7e6a;
`;

const DrinkName = styled.div`
    margin-top: 17px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #675b4f;
`;

const DrinkDetail = styled.div`
    margin-top: 24px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 151.5%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #8e8372;
`;

const DetailLink = styled(Link)`
    text-decoration: none;
    margin-left: 180px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 70px;
    letter-spacing: -0.01em;
    color: #675b4f;
`;

const Rating = styled.div`
    margin-top: 303px;
    margin-left: 95px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 175.5%;
    text-align: center;

    color: #675b4f;
`;

const TicketStar = styled.div`
    margin-top: 300px;
    margin-left: 19px;
`;

const TicketStarImg = styled.img`
    margin-right: 10px;
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
