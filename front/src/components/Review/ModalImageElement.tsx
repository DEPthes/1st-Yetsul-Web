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
    width: 8.5625em;
    height: 8.5625em;
    border-radius: 18px;
    background: #d9d9d9;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 5.209375em;
        height: 5.109375em;
    }
`;

const ImgWrap = styled.div`
    overflow: hidden;
    width: 8.5625em;
    height: 8.5625em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;

    @media (max-width: 767px) {
        width: 5.209375em;
        height: 5.109375em;
    }
    img {
        height: 100%;
        object-fit: cover;
    }
`;
