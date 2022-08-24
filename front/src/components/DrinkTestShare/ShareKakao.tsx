import React from 'react';
import styled from 'styled-components';

const ShareKakao: React.FC = () => {
    return (
        <ShareBtn type="button">
            <ShareImg src="/images/ShareKakaoTalk.png" alt="ShareKakaoTalk" />
        </ShareBtn>
    );
};

export default ShareKakao;

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
