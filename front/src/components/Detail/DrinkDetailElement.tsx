import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAccessToken } from '../../services/tokenControl';
import Star from '../common/Star';

export interface DrinkDetailElementType {
    id: number;
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
    star: string; // 술 별 점
    alcoholImage: string; // 술 사진
    likeCount: number; // 술 찜 횟수
    reviewCount: number; // 리뷰 수
}

const DrinkDetailElement: React.FC<DrinkDetailElementType> = ({
    id,
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
    likeCount,
    reviewCount,
}) => {
    const [like, setLike] = useState(false);

    const getData = () => {
        return axios.create({
            headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
    };

    const likeornot = async () => {
        let alcolid;
        await axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${id}/spec`,
            )
            .then((res) => {
                alcolid = res.data.alcohol.id;
            });

        getData()
            .post(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/alcohol/description/${alcolid}/likeornot`,
                {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                },
            )
            .then((res) => {
                if (res.data === 'LIKE') {
                    setLike(true);
                } else if (res.data === 'NOT') {
                    setLike(false);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        likeornot();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [likes, setLikes] = useState(likeCount);
    const [loading, setLoading] = useState(true);

    const DrinkLike = () => {
        setLike(!like);
    };

    const DrinkLikeClick = async () => {
        try {
            await getData()
                .post(
                    `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/alcohol/description/${id}`,
                )
                .then((res) => {
                    setLikes(res.data.likeCount);
                    DrinkLike();
                    setLoading(false);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const DrinkLikeNum = () => {
        if (likeCount >= 0) {
            if (loading === true) {
                return likeCount;
            }
            return likes;
        }
        return 0;
    };

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
        });
    };

    return (
        <Center>
            <PrevButton
                type="button"
                display={windowSize.width >= 768 ? 'none' : 'flex'}
                onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    history.go(-1);
                }}
            >
                <PrevText>&lt;</PrevText>
            </PrevButton>
            <DrinkExplain>
                <DrinkImg src={alcoholImage} alt={AlcoholName} />
                <div>
                    <DrinkCategory>
                        {category === 1 ? '탁주' : null}
                        {category === 2 ? '과실주' : null}
                        {category === 3 ? '약주' : null}
                        {category === 4 ? '청주' : null}
                        {category === 5 ? '증류주' : null}
                        {category === 6 ? '리큐르주' : null}
                    </DrinkCategory>
                    <DrinkLikeDiv>
                        <DrinkLikeCount>{DrinkLikeNum()}</DrinkLikeCount>
                        <DrinkLikeBtn
                            type="button"
                            onClick={() => DrinkLikeClick()}
                        >
                            {like === true ? (
                                <DrinkLikeImg
                                    src="/images/HeartFill.svg"
                                    alt="하트"
                                />
                            ) : (
                                <DrinkLikeImg
                                    src="/images/Heart.svg"
                                    alt="빈 하트"
                                />
                            )}
                        </DrinkLikeBtn>
                    </DrinkLikeDiv>
                    <h1>{AlcoholName}</h1>
                    <SeeReview
                        type="button"
                        onClick={() => {
                            window.scrollTo({
                                top: 1400,
                                behavior: 'smooth',
                            });
                        }}
                    >
                        (리뷰&nbsp;
                        {reviewCount < 100 ? `${reviewCount}건` : '+100'}) &gt;
                    </SeeReview>
                    <Star
                        star={+star}
                        widthValue={windowSize.width >= 768 ? 0.9375 : 0.8125}
                    />
                    <Line
                        margintop={1.125}
                        marginbottom={1.563}
                        width={31.938}
                        mediamargintop={0.875}
                        mediamarginbottom={0.875}
                        mediawidth={17}
                    />
                    <h2>{AlcoholByVolume}%</h2>
                    <Line
                        margintop={1.563}
                        marginbottom={2}
                        width={31.938}
                        mediamargintop={0.75}
                        mediamarginbottom={1.033}
                        mediawidth={17}
                    />
                    <h2>&#8361; {price}원대</h2>
                    <Line
                        margintop={2.063}
                        marginbottom={2.375}
                        width={31.938}
                        mediamargintop={1.033}
                        mediamarginbottom={2}
                        mediawidth={17}
                    />
                    <DrinkBrewery>{brewery}</DrinkBrewery>
                    <DrinkDescription>{description}</DrinkDescription>
                </div>
            </DrinkExplain>
            <DrinkTaste>
                <h1>맛 그래프</h1>
                <Line
                    margintop={2.5}
                    marginbottom={4.938}
                    width={72.063}
                    mediamargintop={0.938}
                    mediamarginbottom={2.5}
                    mediawidth={19.688}
                />
                <TasteText>
                    <h2>달달함</h2>
                    <h3>ㅣ</h3>
                    <h2>쓴 맛</h2>
                    <h3>ㅣ</h3>
                    <h2>상큼함</h2>
                    <h3>ㅣ</h3>
                    <h2>깔끔함</h2>
                    <h3>ㅣ</h3>
                    <h2>청량함</h2>
                    <h3>ㅣ</h3>
                    <h2>신 맛</h2>
                </TasteText>
                <TasteBox>
                    <Box>
                        {sweet ? (
                            <Circle
                                marginleft={2.813}
                                mediamarginleft={0.563}
                            />
                        ) : null}
                        {bitter ? (
                            <Circle
                                marginleft={10.313}
                                mediamarginleft={3.938}
                            />
                        ) : null}
                        {refreshing ? (
                            <Circle marginleft={18} mediamarginleft={7.375} />
                        ) : null}
                        {clean ? (
                            <Circle marginleft={26.063} mediamarginleft={11} />
                        ) : null}
                        {cool ? (
                            <Circle
                                marginleft={34.188}
                                mediamarginleft={14.75}
                            />
                        ) : null}
                        {sour ? (
                            <Circle
                                marginleft={41.875}
                                mediamarginleft={18.125}
                            />
                        ) : null}
                    </Box>
                </TasteBox>
            </DrinkTaste>
        </Center>
    );
};
export default DrinkDetailElement;

const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 19.064em;
    transition: 0.5s;

    @media (max-width: 767px) {
        margin-top: 8.75em;
    }
`;

const PrevButton = styled.button<{ display: string }>`
    display: ${(props) => props.display};
    justify-content: center;
    align-items: center;
    width: 2.6em;
    height: 1.933em;
    background-color: transparent;
    border: 1px solid #8b7e6a;
    border-radius: 0.563em;

    :hover {
        cursor: pointer;
    }
`;

const PrevText = styled.div`
    font-family: 'GmarketSansMedium';
    font-size: 0.938em;
    color: #3a3d40;
    padding: 0.1em 0.1em 0 0;
`;

const DrinkExplain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 1.175em;
        margin-bottom: 0.625em;
        width: 10em;
        font-size: 2.5em;
        line-height: 135%;
        letter-spacing: -0.01em;
        color: #675b4f;
        word-break: keep-all;
    }

    h2 {
        margin-left: 0.5em;
        font-size: 1.563em;
        letter-spacing: -0.01em;
        color: #8b7e6a;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        h1 {
            margin-top: 2.24em;
            margin-bottom: 0.6em;
            font-size: 1.563em;
            width: 9.12em;
        }

        h2 {
            margin-left: 0.188em;
            font-size: 0.938em;
        }
    }
`;

const DrinkImg = styled.img`
    margin-right: 7.125em;
    height: 39em;
    width: 32.875em;
    object-fit: contain;

    @media (max-width: 767px) {
        margin-top: 0.75em;
        margin-right: 0em;
        width: 12em;
    }
`;

const DrinkCategory = styled.div`
    width: 6.067em;
    height: 2.267em;
    border: 1px solid #454038;
    border-radius: 1.5em;

    text-align: center;
    font-size: 0.938em;
    line-height: 2.65em;
    letter-spacing: -0.01em;
    color: #454038;

    @media (max-width: 767px) {
        display: none;
    }
`;

const DrinkLikeDiv = styled.div`
    display: block;
    margin-top: 3.136em;
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 767px) {
        margin-top: 3.8em;
    }
`;

const DrinkLikeCount = styled.span`
    font-size: 1.25em;
    line-height: 100%;
    letter-spacing: -0.01em;
    margin-top: 0.2em;
    color: #8b7e6a;
    float: left;

    @media (max-width: 767px) {
        font-size: 0.813em;
        line-height: 1.7em;
    }

    @media (max-width: 419px) {
        font-size: 0.813em;
        line-height: 2.3em;
    }
`;

const DrinkLikeBtn = styled.button`
    background-color: transparent;
    border: none;
    float: right;
    padding-left: 0.05em;
    width: 1.7em;
    height: 1.7em;

    :hover {
        cursor: pointer;
    }
`;

const DrinkLikeImg = styled.img`
    width: 1.7em;
    height: 1.7em;

    @media (max-width: 767px) {
        width: 1.692em;
    }
`;

const SeeReview = styled.button`
    position: absolute;
    margin-left: 6.438em;
    background-color: transparent;
    border: none;

    font-family: 'GmarketSansLight';
    font-weight: bold;
    font-size: 0.938em;
    line-height: 1.2em;
    color: #8b7e6a;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 767px) {
        font-size: 0.813em;
        line-height: 1.3em;
    }
`;

const Line = styled.div<{
    margintop: number;
    marginbottom: number;
    width: number;
    mediamargintop: number;
    mediamarginbottom: number;
    mediawidth: number;
}>`
    margin-top: ${(props) => props.margintop}em;
    margin-bottom: ${(props) => props.marginbottom}em;
    width: ${(props) => props.width}em;
    border-bottom: 1px solid #bbb6a8;

    @media (max-width: 767px) {
        margin-top: ${(props) => props.mediamargintop}em;
        margin-bottom: ${(props) => props.mediamarginbottom}em;
        width: ${(props) => props.mediawidth}em;
    }
`;

const DrinkBrewery = styled.div`
    font-size: 1.125em;
    line-height: 1.125em;
    letter-spacing: -0.01em;
    color: #8b7e6a;

    @media (max-width: 767px) {
        font-size: 0.938em;
        line-height: 0.938em;
    }
`;

const DrinkDescription = styled.div`
    margin-top: 1.438em;
    margin-bottom: 3.125em;
    width: 28em;

    font-family: 'GmarketSansLight';
    font-weight: 300;
    font-size: 1.125em;
    line-height: 1.938em;
    color: #8b7e6a;

    @media (max-width: 767px) {
        margin-top: 1.25em;
        margin-bottom: 0em;
        width: 18.3em;
        font-size: 0.938em;
        line-height: 172.5%;
    }
`;

const DrinkTaste = styled.div`
    margin-top: 15.373em;

    h1 {
        margin-left: 0.438em;

        font-size: 1.563em;
        line-height: 1.563em;
        letter-spacing: -0.01em;
        color: #675b4f;
    }
    @media (max-width: 767px) {
        margin-top: 8.75em;

        h1 {
            margin-left: 0em;
            font-size: 0.938em;
            line-height: 0.938em;
        }
    }
`;

const TasteText = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        margin-right: 1.25em;

        font-size: 1.563em;
        line-height: 1.563em;
        letter-spacing: -0.01em;
        color: #8b7e6a;
    }
    h3 {
        margin-right: 1.25em;
        font-size: 1.125em;
    }

    @media (max-width: 767px) {
        h2 {
            margin-right: 0.438em;
            font-size: 0.719em;
            line-height: 0.75em;
        }

        h3 {
            margin-right: 0.438em;
            font-size: 0.75em;
            line-height: 0.75em;
        }
    }
`;

const TasteBox = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 3.438em;
    margin-bottom: 12em;

    @media (max-width: 767px) {
        margin-top: 1.438em;
        margin-bottom: 3.875em;
    }
`;

const Box = styled.div`
    width: 46.875em;
    height: 4.063em;
    border: 1px solid #8b7e6a;
    border-radius: 1.125em;
    @media (max-width: 767px) {
        width: 19.688em;
        height: 1.813em;
        border-radius: 0.625em;
    }
`;

const Circle = styled.div<{ marginleft: number; mediamarginleft: number }>`
    position: absolute;
    width: 1.688em;
    height: 1.688em;
    margin-left: ${(props) => props.marginleft}em;
    margin-top: 1.188em;
    background: #8b7e6a;
    border-radius: 50%;
    @media (max-width: 767px) {
        width: 0.875em;
        height: 0.875em;
        margin-left: ${(props) => props.mediamarginleft}em;
        margin-top: 0.438em;
    }
`;
