import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setCategory } from '../../store/slices/listCategorySlice';

type DrinkCategoryBtnType = {
    category: string;
};

const DrinkCategoryBtn: React.FC<DrinkCategoryBtnType> = ({ category }) => {
    const dispatch = useDispatch();

    const categoryRedux = useSelector((state: RootState) => {
        return state.listCategory.category;
    });

    const CluckBtn = () => {
        dispatch(setCategory(category));
    };

    return (
        <BtnWrap temp={categoryRedux} category={category} onClick={CluckBtn}>
            <p>{category}</p>
        </BtnWrap>
    );
};

export default DrinkCategoryBtn;

type BtnType = {
    temp: string;
    category: string;
};

const BtnWrap = styled.div<BtnType>`
    width: 85px;
    height: 36px;
    border: 1px solid #bbb6a8;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${(props) =>
        props.temp === props.category ? `#454038` : `rgba(0, 0, 0, 0)`};
    color: ${(props) => (props.temp === props.category ? `#fff` : `#8b7e6a`)};
    p {
        font-size: 15px;
        line-height: 23px;
        letter-spacing: -0.01em;
        margin: 2 12px;
    }
`;
