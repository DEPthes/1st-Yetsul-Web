import React from 'react';
import styled from 'styled-components';

type ModalImageElementType = {
    id: number;
    src: string;
};

const ModalImageElement: React.FC<ModalImageElementType> = ({ id, src }) => {
    return (
        <ElementWrap>
            <ImgWrap className={id.toString()}>
                <img src={src} alt="img" />
            </ImgWrap>
        </ElementWrap>
    );
};

export default ModalImageElement;

const ElementWrap = styled.div`
    width: 137px;
    height: 137px;
    border-radius: 18px;
    background: #d9d9d9;
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-of-type(6n) {
        margin-right: 0;
    }
    cursor: pointer;
`;

const ImgWrap = styled.div`
    overflow: hidden;
    width: 137px;
    height: 137px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    img {
        height: 100%;
        object-fit: cover;
    }
`;
