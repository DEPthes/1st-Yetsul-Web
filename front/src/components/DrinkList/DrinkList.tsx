import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BackgroundTemplate from '../common/BackgroundTemplate';
import DrinkCategoryBtn from './DrinkCategoryBtn';
import DrinkListElement from './DrinkListElement';
import Pagination from './Pagination';
import { RootState } from '../../store/config';
import useIntersect from '../../utils/useIntersect';
import PageUpBtn from '../common/PageUpBtn';

const DrinkList: React.FC = () => {
    const [drinks, setDrinks] = useState<DrinkType[]>([]);
    const currentDrinks = useRef<DrinkType[]>([]);
    const [sliceDrinksRender, setSliceDrinksRender] = useState<DrinkType[]>([]);
    const sliceDrinks = useRef<DrinkType[]>([]);
    const [limit] = useState(12); // 페이지 당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지
    const pageRef = useRef(0);
    const maxPage = useRef(0);
    const offset = (page - 1) * limit; // 페이지 당 첫 게시물의 index
    const [sort, setSort] = useState('ASC');
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [heightValue, setHeightValue] = useState('auto');

    const category = useSelector((state: RootState) => {
        return state.listCategory.category;
    });

    const [categoryNum, setCategoryNum] = useState('');

    useEffect(() => {
        if (isMobile) {
            sliceDrinks.current = drinks.slice(offset, offset + limit);
            setSliceDrinksRender(sliceDrinks.current);
            currentDrinks.current = drinks;
            pageRef.current = 1;
            maxPage.current = Math.ceil(drinks.length / limit);
            console.log(pageRef.current);
            console.log(
                drinks.slice(
                    (pageRef.current - 1) * limit,
                    (pageRef.current - 1) * limit + limit,
                ),
            );
            if (drinks.length < 3) {
                setHeightValue('100%');
            } else {
                setHeightValue('auto');
            }
        }
    }, [drinks]);

    useEffect(() => {
        if (document.body.clientWidth <= 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        if (category === '전체') {
            axios
                .post(
                    `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/alcohol/list`,
                    {
                        filter: sort,
                    },
                )
                .then((res) => setDrinks(res.data))
                .catch((err) => console.log(err));
        } else {
            axios
                .post(
                    `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/alcohol/list/${categoryNum}`,
                    {
                        filter: sort,
                    },
                )
                .then((res) => setDrinks(res.data))
                .catch((err) => console.log(err));
        }
    }, [sort, categoryNum]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setRef] = useIntersect(async (entry, observer) => {
        setTimeout(() => {
            observer.unobserve(entry.target);
            if (
                sliceDrinks.current.length > 0 &&
                maxPage.current > pageRef.current
            ) {
                pageRef.current += 1;

                const newData = currentDrinks.current.slice(
                    (pageRef.current - 1) * limit,
                    (pageRef.current - 1) * limit + limit,
                );

                console.log('drinks slice:', newData, 'limit: ', limit);
                console.log('current slice drinks: ', sliceDrinks.current);

                sliceDrinks.current = sliceDrinks.current.concat(newData);
                setSliceDrinksRender(sliceDrinks.current);
                console.log(pageRef.current);
            }
            observer.observe(entry.target);
        }, 1000);
    }, {});

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
        <BackgroundTemplate heightValue={heightValue}>
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
                                                id="asc"
                                                style={{
                                                    transform: `rotate(0.5turn)`,
                                                }}
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
                                            <p>별점 높은 순</p>
                                        </>
                                    ),
                                    DESC: (
                                        <>
                                            <svg
                                                id="asc"
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
                                            <p>별점 낮은 순</p>
                                        </>
                                    ),
                                }[sort]
                            }

                            <svg
                                id="mobileAsc"
                                width="32"
                                height="20"
                                viewBox="0 0 32 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.7146 16.3403L10.7146 4.40811"
                                    stroke="#675B4F"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M6.35156 8.57068L10.7144 4.20782L15.0773 8.57068"
                                    stroke="#675B4F"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.2854 3.65967L21.2854 15.5919"
                                    stroke="#675B4F"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M25.6484 11.4293L21.2856 15.7922L16.9227 11.4293"
                                    stroke="#675B4F"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </SortBtn>
                    </ContentHead>

                    <DrinkElList>
                        <ul>
                            {!isMobile
                                ? drinks
                                      .slice(offset, offset + limit)
                                      .map(
                                          (drink: {
                                              alcoholOfMonth: boolean;
                                              id: number;
                                              category: number;
                                              alcoholImage: string;
                                              AlcoholName: string;
                                              AlcoholByVolume: number;
                                              star: string;
                                          }) => {
                                              return (
                                                  <li key={drink.id}>
                                                      <DrinkListElement
                                                          alcoholOfMonth={
                                                              drink.alcoholOfMonth
                                                          }
                                                          id={drink.id}
                                                          img={
                                                              drink.alcoholImage
                                                          }
                                                          category={
                                                              drink.category
                                                          }
                                                          name={
                                                              drink.AlcoholName
                                                          }
                                                          abv={
                                                              drink.AlcoholByVolume
                                                          }
                                                          star={+drink.star}
                                                      />
                                                  </li>
                                              );
                                          },
                                      )
                                : sliceDrinksRender.map(
                                      (drink: {
                                          alcoholOfMonth: boolean;
                                          id: number;
                                          category: number;
                                          alcoholImage: string;
                                          AlcoholName: string;
                                          AlcoholByVolume: number;
                                          star: string;
                                      }) => {
                                          return (
                                              <li key={drink.id}>
                                                  <DrinkListElement
                                                      alcoholOfMonth={
                                                          drink.alcoholOfMonth
                                                      }
                                                      id={drink.id}
                                                      img={drink.alcoholImage}
                                                      category={drink.category}
                                                      name={drink.AlcoholName}
                                                      abv={
                                                          drink.AlcoholByVolume
                                                      }
                                                      star={+drink.star}
                                                  />
                                              </li>
                                          );
                                      },
                                  )}
                        </ul>
                        {isMobile && maxPage.current > pageRef.current && (
                            <div
                                ref={setRef as React.LegacyRef<HTMLDivElement>}
                            >
                                Loading...
                            </div>
                        )}
                    </DrinkElList>
                </Content>
                {!isMobile && (
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
                )}
                {isMobile && heightValue === 'auto' && <PageUpBtn />}
            </Inner>
        </BackgroundTemplate>
    );
};

export default DrinkList;

const PageScroller = styled.button`
    background-color: inherit;
    border: none;
    position: relative;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70.25em;
    height: auto;
    padding-top: 9.188em;
    @media (max-width: 767px) {
        width: calc(100% - 5em); //20.75em;
        padding-top: 8.75em;
    }
`;

const Head = styled.div`
    margin-top: 4.938em;
    width: 100%;
    height: 4.313em;
    border-bottom: 1px solid #bbb6a8;
    padding-bottom: 2.063em;
    h1 {
        font-size: 1.875em;
        line-height: 1em;
        color: #454038;
        margin-bottom: 0.6em;
    }
    span {
        font-size: 1.25em;
    }
    @media (max-width: 767px) {
        margin-top: 0;
        height: auto;
        padding-bottom: 1.375em;
        h1 {
            margin-bottom: 1.2em;
            font-size: 0.938em;
        }
        span {
            font-size: 0.75em;
            color: #8e8372;
        }
    }
`;

const Content = styled.div`
    margin-top: 2.063em;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        margin-top: 1.375em;
    }
`;

const ContentHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3.875em;
    align-items: center;
    @media (max-width: 767px) {
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 1.5em;
    }
`;

const SortBtn = styled.div`
    cursor: pointer;
    position: relative;
    > svg {
        position: absolute;
        width: 1.25em;
        right: 5.5em;
        top: -2.5px;
    }
    #mobileAsc {
        display: none;
    }
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: -0.01em;
    @media (max-width: 767px) {
        margin-top: 1.583em;
        font-size: 0.75em;
        #asc {
            display: none;
        }
        #mobileAsc {
            display: block;
        }
        > p {
            margin-right: 2.667em;
        }
        > svg {
            position: absolute;
            right: 0;
            width: 2.667em;
            top: -0.5em;
        }
    }
`;

const Category = styled.div`
    width: auto;
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        li:not(:last-of-type) {
            margin-right: 1.063em;
        }
    }
    @media (max-width: 767px) {
        border-bottom: 1px solid #bbb6a8;
        padding-bottom: 0.625em;
        width: 100%;
        ul {
            width: 100%;
            flex-wrap: wrap;
            li {
                margin-right: 0 !important;
                margin-bottom: 0.75em;
                width: 30%;
            }
            li:not(:nth-of-type(3n)) {
                margin-right: 5% !important;
            }
        }
    }
`;

const DrinkElList = styled.div`
    margin-bottom: 7.125em;
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
            margin-right: 1.656em;
            margin-bottom: 1.938em;
        }
        li:nth-of-type(3n) {
            margin-right: 0;
        }
    }
    @media (max-width: 767px) {
        margin-bottom: 2.063em;
        width: 100%;
        > div {
            width: 100%;
            display: flex;
            height: 200px;
            align-items: center;
            justify-content: center;
        }
        ul {
            width: 100%;

            li {
                position: relative;
                margin-right: 0.313em !important;
                margin-bottom: 0.438em !important;
                width: calc(50% - 0.1565em);
            }
            li:nth-of-type(2n) {
                margin-right: 0 !important;
            }
        }
    }
`;

type DrinkType = {
    alcoholOfMonth: boolean;
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
    star: string;
    alcoholImage: string;
};
