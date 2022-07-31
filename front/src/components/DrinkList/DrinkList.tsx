import React from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import DrinkCategoryBtn from './DrinkCategoryBtn';
import DrinkListElement from './DrinkListElement';
import { drinkInfo } from '../common/dummydata';

const DrinkList: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <Head>
                    <h1>옛술 리스트</h1>
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
                            {drinkInfo.map((data) => {
                                return (
                                    <li key={data.id}>
                                        <DrinkListElement
                                            img={data.alcoholImage}
                                            name={data.AlcoholName}
                                            abv={data.AlcoholByVolume}
                                            price={data.price}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </DrinkElList>
                </Content>
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
    height: 100%;
    padding-top: 147px;
`;

const Head = styled.div`
    margin-top: 79px;
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #bbb6a8;
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #454038;
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
