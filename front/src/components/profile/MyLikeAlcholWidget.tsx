import React from 'react';
import styled from 'styled-components';

type myliketype = {
    AlcoholName: string;
    star: number;
    AlcoholByVolume: number;
};

export const FavoriteAlcholWidget: React.FC<myliketype> = ({
    AlcoholName,
    star,
    AlcoholByVolume,
}) => {
    return (
        <FavoriteAlcholBox>
            <FavoriteAlcoholImgBox>
                <FavoriteAlcholImg src="images/AlcoholImg.png" />
            </FavoriteAlcoholImgBox>
            <FavoriteAlcholLower>
                <FavoriteAlcholNameABV>
                    <FavoriteAlcholName>{AlcoholName}</FavoriteAlcholName>
                    <FavoriteAlcholeABV>{AlcoholByVolume}%</FavoriteAlcholeABV>
                </FavoriteAlcholNameABV>
                <FavoriteAlchilStarDiv>
                    {/* {AlcoholStar === 0 ? (
                        <MyreviewStarBox>
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                        </MyreviewStarBox>
                    ) : null} */}
                    {AlcoholStar === 1 ? (
                        <MyreviewStarBox>
                            <AlcoholStarS
                                src="/images/StarFill.png"
                                alt="채워진 별"
                            />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                        </MyreviewStarBox>
                    ) : null}
                    {/* {AlcoholStar === 2 ? (
                        <MyreviewStarBox>
                            <AlcoholStarS
                                src="/images/StarFill.png"
                                alt="채워진 별"
                            />
                            <AlcoholStarS
                                src="/images/StarFill.png"
                                alt="채워진 별"
                            />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                        </MyreviewStarBox>
                    ) : null}
                    {AlcoholStar === 3 ? (
                        <MyreviewStarBox>
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
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                        </MyreviewStarBox>
                    ) : null}
                    {AlcoholStar === 4 ? (
                        <MyreviewStarBox>
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
                            <AlcoholStarS src="/images/star.png" alt="빈 별" />
                        </MyreviewStarBox>
                    ) : null}
                    {AlcoholStar === 5 ? (
                        <MyreviewStarBox>
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
                        </MyreviewStarBox>
                    ) : null} */}
                </FavoriteAlchilStarDiv>
            </FavoriteAlcholLower>
        </FavoriteAlcholBox>
    );
};

const AlcoholStar = 1;
const MyreviewStarBox = styled.div``;

const AlcoholStarS = styled.img`
    width: 19px;
`;
const FavoriteAlcholBox = styled.div`
    width: 205px;
    height: 293px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-right: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FavoriteAlcoholImgBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FavoriteAlcholImg = styled.img`
    height: 90%;
`;

const FavoriteAlcholLower = styled.div`
    width: 79.51%;
`;

const FavoriteAlcholNameABV = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #bbb6a8;
    margin-bottom: 9px;
    padding-bottom: 9px;
    margin-top: 39px;
`;

const FavoriteAlcholName = styled.p``;

const FavoriteAlcholeABV = styled.p``;

const FavoriteAlchilStarDiv = styled.div``;
