import React from 'react';
import styled from 'styled-components';

const ShareGmail: React.FC = () => {
    return (
        <ShareBtn type="button">
            <ShareImg src="/images/ShareGmail.png" alt="ShareKakaoTalk" />
        </ShareBtn>
    );
};

export default ShareGmail;

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
