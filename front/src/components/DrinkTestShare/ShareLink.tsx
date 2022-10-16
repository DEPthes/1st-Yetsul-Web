import React from 'react';
import styled from 'styled-components';

export const clip = () => {
    const nowUrl = window.location.href;

    navigator.clipboard.writeText(nowUrl).then(() => {
        // eslint-disable-next-line no-alert
        alert('공유 링크가 복사되었습니다');
    });
};

const ShareGmail: React.FC = () => {
    return (
        <ShareBtn type="button" onClick={clip}>
            <ShareImg src="/images/ShareLink.svg" alt="ShareLink" />
        </ShareBtn>
    );
};
export default ShareGmail;

const ShareBtn = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 20px;
    margin-right: 20px;

    @media (max-width: 767px) {
        margin-left: 5px;
        margin-right: 5px;
    }
`;

const ShareImg = styled.img`
    width: 65px;
    //height: 65px;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 26px;
        //height: 26px;
    }
`;
