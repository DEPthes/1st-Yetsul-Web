import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
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
                        title: '옛술의 전당\n매표소',
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
            <ShareImg src="/images/ShareKakaoTalk.svg" alt="ShareKakaoTalk" />
        </ShareBtn>
    );
};

export default ShareKakao;

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
