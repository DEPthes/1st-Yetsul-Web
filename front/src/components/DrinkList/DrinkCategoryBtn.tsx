import React from 'react';
import styled from 'styled-components';

const DrinkCategoryBtn: React.FC = () => {
    return (
        <BtnWrap>
            <p>술종류</p>
        </BtnWrap>
    );
};

export default DrinkCategoryBtn;

const BtnWrap = styled.div`
    width: auto;
    height: 42px;
    border: 1px solid #bbb6a8;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.01em;
        color: #8b7e6a;
        margin: 0 40px;
    }
    &:hover {
        background: #454038;
        p {
            color: #fff;
        }
    }
`;
