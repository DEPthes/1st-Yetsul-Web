import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    likeCount: number; // 술 찜 횟수
    reviewCount: number; // 리뷰 수
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
    likeCount,
    reviewCount,
}) => {
    const { id } = useParams();
    const [like, setLike] = useState(false);

    const getData = () => {
        const accessToken = localStorage.getItem('accessToken') || '';
        console.log(accessToken);
        return axios.create({
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    };

    useEffect(() => {
        getData()
            .post(
                `http://depth-server.herokuapp.com/alcohol/description/${id}/likeornot`,
            )
            .then((res) => {
                if (res.data === 'LIKE') {
                    setLike(true);
                } else if (res.data === 'NOT') {
                    setLike(false);
                }
            })
            .catch((err) => console.log(err));
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
                    `http://depth-server.herokuapp.com/alcohol/description/${id}`,
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

    return (
        <div>
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
                    <DrinkLikeCount>{DrinkLikeNum()}</DrinkLikeCount>
                    <DrinkLikeBtn
                        type="button"
                        onClick={() => DrinkLikeClick()}
                    >
                        {like === true ? (
                            <img src="/images/HeartFill.svg" alt="하트" />
                        ) : (
                            <img src="/images/Heart.svg" alt="빈 하트" />
                        )}
                    </DrinkLikeBtn>
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
                    <Star star={star} widthValue={15} heightValue={14} />
                    <Line margintop={18} marginbottom={27} width={511} />
                    <h2>{AlcoholByVolume}%</h2>
                    <Line margintop={23} marginbottom={32} width={511} />
                    <h2>&#8361; {price}원대</h2>
                    <Line margintop={30} marginbottom={38} width={511} />
                    <DrinkBrewery>{brewery}</DrinkBrewery>
                    <DrinkDescription>{description}</DrinkDescription>
                </div>
            </DrinkExplain>
            <DrinkTaste>
                <h1>맛 그래프</h1>
                <Line margintop={40} marginbottom={79} width={1153} />
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
                        {sweet ? <Circle marginleft={45} /> : null}
                        {bitter ? <Circle marginleft={165} /> : null}
                        {refreshing ? <Circle marginleft={288} /> : null}
                        {clean ? <Circle marginleft={417} /> : null}
                        {cool ? <Circle marginleft={547} /> : null}
                        {sour ? <Circle marginleft={670} /> : null}
                    </Box>
                </TasteBox>
            </DrinkTaste>
        </div>
    );
};
export default DrinkDetailElement;

const DrinkExplain = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        margin-top: 47px;
        margin-bottom: 20px;
        width: 382px;
        font-size: 40px;
        line-height: 53px;
        letter-spacing: -0.01em;
        color: #675b4f;
        word-break: keep-all;
    }

    h2 {
        margin-left: 11px;

        font-size: 25px;
        line-height: 25px;
        letter-spacing: -0.01em;
        color: #8b7e6a;
    }
`;

const DrinkImg = styled.img`
    margin-top: 253.03px;
    margin-right: 114px;

    width: 526px;
    //height: 631px;
`;

const DrinkCategory = styled.div`
    margin-top: 305.03px;

    width: 76px;
    height: 34px;
    border: 1px solid #454038;
    border-radius: 24px;

    text-align: center;
    font-size: 15px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #454038;
`;

const DrinkLikeCount = styled.div`
    margin-right: 30px;
    margin-top: 66px;

    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #8b7e6a;
    float: right;
`;

const DrinkLikeBtn = styled.button`
    position: absolute;
    margin-top: 56px;
    margin-left: 480px;
    background-color: transparent;
    border: none;

    :hover {
        cursor: pointer;
    }
`;

const SeeReview = styled.button`
    position: absolute;
    margin-left: 103px;
    background-color: transparent;
    border: none;

    font-family: 'GmarketSansLight';
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #8b7e6a;

    :hover {
        cursor: pointer;
    }
`;

const Line = styled.div<{
    margintop: number;
    marginbottom: number;
    width: number;
}>`
    margin-top: ${(props) => props.margintop}px;
    margin-bottom: ${(props) => props.marginbottom}px;
    width: ${(props) => props.width}px;
    border-bottom: 1px solid #bbb6a8;
`;

const DrinkBrewery = styled.div`
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #8b7e6a;
`;

const DrinkDescription = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
    width: 511px;

    font-family: 'GmarketSansLight';
    font-weight: 300;
    font-size: 18px;
    line-height: 31px;
    color: #8b7e6a;
    word-break: keep-all;
`;

const DrinkTaste = styled.div`
    margin-top: 237.97px;

    h1 {
        margin-left: 7px;

        font-size: 30px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #675b4f;
    }
`;

const TasteText = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        margin-right: 20px;

        font-size: 25px;
        line-height: 25px;
        letter-spacing: -0.01em;
        color: #8b7e6a;
    }

    h3 {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const TasteBox = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 55px;
    margin-bottom: 184px;
`;

const Box = styled.div`
    width: 750px;
    height: 65px;
    border: 1px solid #8b7e6a;
    border-radius: 18px;
`;

const Circle = styled.div<{ marginleft: number }>`
    position: absolute;
    width: 27px;
    height: 27px;
    margin-left: ${(props) => props.marginleft}px;
    margin-top: 19px;
    background: #8b7e6a;
    border-radius: 100px;
`;
