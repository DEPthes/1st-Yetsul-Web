import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import Clock from './Clock';
import ShareImg from '../DrinkTestShare/ShareImg';
import ShareLink from '../DrinkTestShare/ShareLink';
import ShareKakaoBtn from '../DrinkTestShare/ShareKakaoBtn';

const DrinkTicketBoxResult: React.FC = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<ResultMoiveType>(Object);
    const [drink, setDrink] = useState<ResultDrinkType>(Object);
    const [drinks, setDrinks] = useState<ResultDrinkType[]>([]);
    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        axios
            .post(`https://depth-server.herokuapp.com/ticketbox/result`, {
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
                <ResultText data-html2canvas-ignore="true">
                    나의 옛술 티켓 확인하기
                </ResultText>
                <Ticket>
                    <Date>
                        <Clock />
                    </Date>
                    <div>
                        <LogoImg src="/images/LogoImg.png" alt="LogoImg" />
                    </div>
                    <LogoText src="/images/LogoText.png" alt="LogoText" />
                    <div>
                        <TicketText margin={19}>TICKET</TicketText>
                        <div>
                            <FlavorText>FLAVOR</FlavorText>
                            <DottedLine margin={3} />
                            <Flavors>
                                <Flavor marginleft={0} marginright={17}>
                                    달달함
                                </Flavor>
                                <Flavor marginleft={16} marginright={17}>
                                    쓴 맛
                                </Flavor>
                                <Flavor marginleft={17} marginright={15}>
                                    상큼함
                                </Flavor>
                                <Flavor marginleft={14} marginright={14}>
                                    깔끔함
                                </Flavor>
                                <Flavor marginleft={14} marginright={17}>
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
                                    {drink.refreshing ? <Circle /> : null}
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
                        <Drinks margin={0}>
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
                                <DrinkName>{drink.AlcoholName}</DrinkName>
                                <DrinkDetail>{movie.description}</DrinkDetail>
                                <DetailLink to="/" margin={175}>
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
                    <TicketText margin={602}>TICKET</TicketText>
                    <DottedLine margin={26} />
                    <Plus>이런 술도 있어요!</Plus>
                    <DottedLinex />
                    {drinks.map((data) => {
                        return (
                            <Drinks key={data.id} margin={60}>
                                <DrinkImg
                                    src={data.alcoholImage}
                                    alt={data.AlcoholName}
                                />
                                <Drink>
                                    <DrinkVolume>
                                        {data.AlcoholByVolume}%
                                    </DrinkVolume>
                                    <DrinkType>
                                        {(() => {
                                            if (data.category === 1) {
                                                return '탁주';
                                            }
                                            if (data.category === 2) {
                                                return '과실주';
                                            }
                                            if (data.category === 3) {
                                                return '약주';
                                            }
                                            if (data.category === 4) {
                                                return '청주';
                                            }
                                            if (data.category === 5) {
                                                return '증류주';
                                            }
                                            if (data.category === 6) {
                                                return '리큐르주';
                                            }
                                            return null;
                                        })()}
                                    </DrinkType>
                                    <DrinkName>{data.AlcoholName}</DrinkName>
                                    <DrinkDetail>
                                        {data.description}
                                    </DrinkDetail>
                                    <DetailLink to="/" margin={165}>
                                        상세페이지 &gt;
                                    </DetailLink>
                                </Drink>
                            </Drinks>
                        );
                    })}
                    <Ratings>RATING : </Ratings>
                    {drink.star === '0' ? (
                        <TicketStars>
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
                        </TicketStars>
                    ) : null}
                    <Restart data-html2canvas-ignore="true">
                        <RestartLink to="/ticketbox">다시하기</RestartLink>
                    </Restart>
                    <Share data-html2canvas-ignore="true">
                        <ShareText>
                            친구들한테 <strong>공유하고</strong> 옛술의 전당
                            알리기!
                        </ShareText>
                        <ShareLink />
                        <ShareImg />
                        <ShareKakaoBtn />
                    </Share>
                </Ticket>
                <TicketImg src="/images/Ticket.png" alt="Ticket" />
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

const TicketImg = styled.img`
    position: relative;
    width: 618px;
    height: 3888px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
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

const TicketText = styled.div<{ margin: number }>`
    margin-top: ${(props) => props.margin}px;
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

const Drinks = styled.div<{ margin: number }>`
    display: flex;
    margin-top: ${(props) => props.margin}px;
    margin-bottom: 330px;
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

const DetailLink = styled(Link)<{ margin: number }>`
    text-decoration: none;
    margin-left: ${(props) => props.margin}px;

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

const Plus = styled.div`
    margin-top: 24px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #675b4f;
`;

const DottedLinex = styled.div`
    position: absolute;
    margin-top: 370px;
    width: 497px;
    height: 0px;

    border-bottom: 1px dashed #000000;
`;

const Ratings = styled.div`
    position: absolute;
    margin-top: 3px;
    margin-left: 88px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 175.5%;
    text-align: center;

    color: #675b4f;
`;

const TicketStars = styled.div`
    margin-left: 158px;
`;

const Restart = styled.div`
    position: absolute;
    margin-top: 605px;
    left: 50%;
    transform: translateX(-50%);
`;

const RestartLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 157px;
    height: 157px;

    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 100px;

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
`;

const Share = styled.div`
    position: absolute;
    margin-top: 845px;
    left: 50%;
    transform: translateX(-50%);
`;

const ShareText = styled.div`
    width: 373px;
    height: 102px;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #675b4f;

    strong {
        font-family: 'GmarketSansBold';
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
