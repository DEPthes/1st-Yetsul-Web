import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
    interface Window {
        Kakao: any;
    }
}

const ShareKakao: React.FC = () => {
    const url = 'http://localhost:3000/ticketbox';
    const ShareURL = window.location.href;

    useEffect(() => {
        ShareKakao();
    }, []);

    const ShareKakao = () => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }
            kakao.Share.createDefaultButton({
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '옛술의 전당 매표소',
                    description: '나에게 어울리는 전통주는?',
                    imageUrl: '/images/DEPth.jpeg',
                    link: {
                        webUrl: url,
                    },
                },
                buttons: [
                    {
                        title: '옛술의 전당 매표소',
                        link: {
                            webUrl: url,
                        },
                    },
                    {
                        title: '결과보기',
                        link: {
                            webUrl: ShareURL,
                        },
                    },
                ],
            });
        }
    };

    return (
        <ShareBtn type="button" id="kakao-link-btn">
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
