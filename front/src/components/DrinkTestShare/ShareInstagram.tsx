import React from 'react';
import styled from 'styled-components';

const ShareInstagram: React.FC = () => {
    return (
        <ShareBtn type="button">
            <ShareImg src="/images/ShareInstagram.png" alt="ShareKakaoTalk" />
        </ShareBtn>
    );
};

export default ShareInstagram;

const ShareBtn = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 63px;
    margin-left: 20px;
    margin-right: 20px;
`;

const ShareImg = styled.img`
    width: 65px;
    height: 65px;

    :hover {
        cursor: pointer;
    }
`;
