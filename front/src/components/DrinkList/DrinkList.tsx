import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BackgroundTemplate from '../common/BackgroundTemplate';
import DrinkCategoryBtn from './DrinkCategoryBtn';
import DrinkListElement from './DrinkListElement';
import Pagination from './Pagination';
import { RootState } from '../../store/config';

const DrinkList: React.FC = () => {
    const [drinks, setDrinks] = useState<DrinkType[]>([]);
    const [limit] = useState(12); // 페이지 당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지
    const offset = (page - 1) * limit; // 페이지 당 첫 게시물의 index
    const [sort, setSort] = useState('ASC');

    const category = useSelector((state: RootState) => {
        return state.listCategory.category;
    });

    const [categoryNum, setCategoryNum] = useState('');

    useEffect(() => {
        if (category === '전체') {
            axios
                .post(`https://depth-server.herokuapp.com/alcohol/list`, {
                    filter: sort,
                })
                .then((res) => setDrinks(res.data))
                .catch((err) => console.log(err));
        } else {
            axios
                .post(
                    `https://depth-server.herokuapp.com/alcohol/list/${categoryNum}`,
                    {
                        filter: sort,
                    },
                )
                .then((res) => setDrinks(res.data))
                .catch((err) => console.log(err));
        }
    }, [sort, categoryNum]);

    useEffect(() => {
        switch (category) {
            case '탁주':
                setCategoryNum('1');
                break;
            case '과실주':
                setCategoryNum('2');
                break;
            case '약주':
                setCategoryNum('3');
                break;
            case '청주':
                setCategoryNum('4');
                break;
            case '증류주':
                setCategoryNum('5');
                break;
            case '리큐르주':
                setCategoryNum('6');
                break;
            case '전체':
                setCategoryNum('0');
                break;
            default:
                break;
        }
    }, [category]);

    const changeSort = () => {
        if (sort === 'ASC') {
            setSort('DESC');
        } else {
            setSort('ASC');
        }
    };

    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <Head>
                    <h1>옛술 리스트</h1>
                    <span>다양한 옛술을 옛술 리스트에서 만나보세요.</span>
                </Head>
                <Content>
                    <ContentHead>
                        <Category>
                            <ul>
                                <li>
                                    <DrinkCategoryBtn category="전체" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="탁주" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="약주" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="청주" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="과실주" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="증류주" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="리큐르주" />
                                </li>
                                <li>
                                    <DrinkCategoryBtn category="기타주류" />
                                </li>
                            </ul>
                        </Category>
                        <SortBtn onClick={changeSort}>
                            {
                                {
                                    ASC: (
                                        <>
                                            <svg
                                                width="25"
                                                height="15"
                                                viewBox="0 0 25 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23 2L12.5 12.5963L2 2"
                                                    stroke="#8B7E6A"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            별점 높은 순
                                        </>
                                    ),
                                    DESC: (
                                        <>
                                            <svg
                                                width="25"
                                                height="15"
                                                viewBox="0 0 25 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23 2L12.5 12.5963L2 2"
                                                    stroke="#8B7E6A"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            별점 낮은 순
                                        </>
                                    ),
                                }[sort]
                            }
                        </SortBtn>
                    </ContentHead>

                    <DrinkElList>
                        <ul>
                            {drinks
                                .slice(offset, offset + limit)
                                .map(
                                    (drink: {
                                        id: number;
                                        category: number;
                                        alcoholImage: string;
                                        AlcoholName: string;
                                        AlcoholByVolume: number;
                                        star: number;
                                    }) => {
                                        return (
                                            <li key={drink.id}>
                                                <DrinkListElement
                                                    id={drink.id}
                                                    img={drink.alcoholImage}
                                                    category={drink.category}
                                                    name={drink.AlcoholName}
                                                    abv={drink.AlcoholByVolume}
                                                    star={drink.star}
                                                />
                                            </li>
                                        );
                                    },
                                )}
                        </ul>
                    </DrinkElList>
                </Content>
                <PageScroller
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <Pagination
                        total={drinks.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </PageScroller>
            </Inner>
        </BackgroundTemplate>
    );
};

export default DrinkList;

const PageScroller = styled.button`
    background-color: inherit;
    border: none;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1124px;
    height: auto;
    padding-top: 147px;
`;

const Head = styled.div`
    margin-top: 79px;
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #bbb6a8;
    padding-bottom: 33px;
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
    margin-top: 33px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ContentHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 62px;
    align-items: center;
`;

const SortBtn = styled.div`
    cursor: pointer;
    > svg {
        margin-right: 16px;
    }
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.01em;
`;

const Category = styled.div`
    width: auto;
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        li:not(:last-of-type) {
            margin-right: 17px;
        }
    }
`;

const DrinkElList = styled.div`
    margin-bottom: 114px;
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
            margin-right: 26.5px;
            margin-bottom: 31px;
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
