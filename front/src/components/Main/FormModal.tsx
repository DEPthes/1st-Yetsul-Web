import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FormModal: React.FC<{ modal: () => void }> = ({ modal }) => {
    return (
        <ModalMain>
            <LoginWrap onClick={(e) => e.stopPropagation()} aria-hidden>
                <div>
                    <CloseBtn>
                        <svg
                            onClick={modal}
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.34766 22.4609L21.8144 9.99416"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.34766 9.99414L21.8144 22.4609"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </CloseBtn>
                    <ModalContents>
                        <LogoWrap>
                            <Logo />
                        </LogoWrap>
                        <h1>
                            옛술의 전당에 자유롭게
                            <br /> 의견을 남겨주세요 !
                        </h1>
                        <p>
                            아래 구글폼으로 들어가서 저희
                            <br />
                            사이트에 대한 만족도 및 피드백을 남겨주시면
                            <br /> 앞으로의 행보에 큰 도움이 될 것 같습니다
                            감사합니다 :)
                        </p>
                    </ModalContents>
                    <ModalBottom>
                        <Btn>
                            <a href="https://docs.google.com/forms/d/1PznqpfSg_6N9aEGWASG_mDRvEMBLYlI5py-jkGWArJs/viewform?edit_requested=true">
                                구글 폼 주소
                            </a>
                        </Btn>
                    </ModalBottom>
                </div>
            </LoginWrap>
        </ModalMain>
    );
};

export default FormModal;

const ModalMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    backdrop-filter: blur(5px);
`;

const LoginWrap = styled.div`
    position: absolute;
    bottom: 166px;
    right: 183px;
    z-index: 1001;
    background: #fff;
    width: 302px;
    height: 344px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    > div {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

const CloseBtn = styled.div`
    z-index: 20;
    position: absolute;
    top: 11px;
    right: 11px;
    > svg {
        cursor: pointer;
    }
`;

const ModalContents = styled.div`
    > div {
        margin-top: 30px;
        margin-bottom: 24.64px;
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 265px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 175.5%;
    /* or 26px */

    text-align: center;

    color: #675b4f;
    background: #e2dfda;
    border-radius: 12px 12px 0px 0px;
    > p {
        margin-top: 25px;
        font-family: 'GmarketSansMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 175.5%;
        text-align: center;
        color: #8b7e6a;
    }
`;

const LogoWrap = styled.div`
    width: 100%;
    height: 57.36px;
    transform: scale(1.3);
`;

const ModalBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 265px);
`;

const Btn = styled.div`
    > a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
    }

    cursor: pointer;
    width: 262px;
    height: 35px;
    border: none;
    background: #8b7e6a;
    border-radius: 12px;

    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.01em;
`;
