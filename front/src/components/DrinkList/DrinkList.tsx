import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BackgroundTemplate from '../common/BackgroundTemplate';
import DrinkCategoryBtn from './DrinkCategoryBtn';
import DrinkListElement from './DrinkListElement';
import { drinkInfo } from '../common/dummydata';
import Pagination from './Pagination';

const DrinkList: React.FC = () => {
    const [drinks, setDrinks] = useState<DrinkType[]>([]);
    const [limit, setLimit] = useState(12); // 페이지 당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지
    const offset = (page - 1) * limit; // 페이지 당 첫 게시물의 index

    useEffect(() => {
        axios
            .post(`https://depth-server.herokuapp.com/alcohol/list`, {
                filter: 'ASC',
            })
            .then((res) => setDrinks(res.data))
            .catch((err) => console.log(err));
    });

    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <Head>
                    <h1>옛술 리스트</h1>
                    <span>다양한 옛술을 옛술 리스트에서 만나보세요.</span>
                </Head>
                <Content>
                    <Category>
                        <ul>
                            <li>
                                <DrinkCategoryBtn />
                            </li>
                            <li>
                                <DrinkCategoryBtn />
                            </li>
                            <li>
                                <DrinkCategoryBtn />
                            </li>
                            <li>
                                <DrinkCategoryBtn />
                            </li>
                            <li>
                                <DrinkCategoryBtn />
                            </li>
                            <li>
                                <DrinkCategoryBtn />
                            </li>
                        </ul>
                    </Category>

                    <DrinkElList>
                        <ul>
                            {drinks
                                .slice(offset, offset + limit)
                                .map((drink) => {
                                    return (
                                        <li key={drink.id}>
                                            <DrinkListElement
                                                img={drink.alcoholImage}
                                                name={drink.AlcoholName}
                                                abv={drink.AlcoholByVolume}
                                                price={drink.price}
                                            />
                                        </li>
                                    );
                                })}
                        </ul>
                    </DrinkElList>
                </Content>
                <Pagination
                    total={drinks.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </Inner>
        </BackgroundTemplate>
    );
};

export default DrinkList;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1129px;
    height: auto;
    padding-top: 147px;
`;

const Head = styled.div`
    margin-top: 79px;
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #bbb6a8;
    padding-bottom: 40px;
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #454038;
        margin-bottom: 18px;
    }

    span {
        font-size: 20px;
    }
`;

const Content = styled.div`
    margin-top: 44px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Category = styled.div`
    width: 100%;
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        li:not(:last-of-type) {
            margin-right: 17px;
        }
    }
    margin-bottom: 98px;
`;

const DrinkElList = styled.div`
    margin-bottom: 234px;
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
            margin-right: 27.5px;
            margin-bottom: 98px;
        }
        li:nth-of-type(3n) {
            margin-right: 0;
        }
    }
`;

type DrinkType = {
    children: ReactNode;
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
