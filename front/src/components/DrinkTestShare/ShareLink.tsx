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
            <ShareImg src="/images/ShareGmail.png" alt="ShareLink" />
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
