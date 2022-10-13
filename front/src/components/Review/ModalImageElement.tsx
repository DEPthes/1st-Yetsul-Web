import React from 'react';
import styled from 'styled-components';

type ModalImageElementType = {
    src: string;
};

const ModalImageElement: React.FC<ModalImageElementType> = ({ src }) => {
    return (
        <ElementWrap>
            <ImgWrap>
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
