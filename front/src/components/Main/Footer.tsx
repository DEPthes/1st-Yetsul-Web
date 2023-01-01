/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Footer: React.FC = () => {
    const copyGmailToClipBoard = (gmail: string) => {
        const txt = document.createElement('textarea');
        document.body.appendChild(txt);
        txt.value = gmail;
        txt.select();
        document.execCommand('copy');
        document.body.removeChild(txt);

        const Toast = Swal.mixin({
            toast: true,
            showConfirmButton: false,
            timer: 1000,
            iconColor: '#8b7e6a',
            background: 'none',
            position: 'center',
            backdrop: false,
        });

        Toast.fire({
            icon: 'success',
            text: '클립보드에 복사되었습니다.',
        });
    };

    return (
        <FooterWrapper className="footer">
            <FooterInner>
                <FooterInfo>
                    <h1>
                        &lt;옛술의 전당&gt;은 명지대학교 소속 DEPth팀이 운영하고
                        있으며, 전통주 활성화를 목표로 다양한 컨텐츠를 제공하는
                        정보 사이트입니다.
                    </h1>
                </FooterInfo>
                <FooterCenter>
                    <SnsIcon
                        onClick={() =>
                            copyGmailToClipBoard('2022depth@gmail.com')
                        }
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/gmail.png`}
                            alt="gmail"
                        />
                    </SnsIcon>
                    <SnsIcon>
                        <a
                            href="https://www.instagram.com/yetsool_hall/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                                alt="instagram"
                            />
                        </a>
                    </SnsIcon>
                </FooterCenter>
                <FooterFoot>
                    <h1>www.yetsul.com</h1>
                </FooterFoot>
            </FooterInner>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    width: 100%;
    height: 18.75em;
    background: #fff;
    @media (max-width: 767px) {
        height: 8.1875em;
    }
`;

const FooterInner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const FooterInfo = styled.div`
    font-weight: 400;
    line-height: 1.5625em;
    letter-spacing: -0.01em;
    color: #8b7e6a;
    > h1 {
        font-size: 1.125em;
    }
    @media (max-width: 767px) {
        margin-top: 1em;
        line-height: 190%;
        width: 300px;
        > h1 {
            font-size: 0.5em !important;
            text-align: center;
        }
    }
`;

const FooterCenter = styled.div`
    display: flex;
    margin: 2.8125em 0;
    @media (max-width: 767px) {
        margin: 1.125em 0;
    }
`;

const SnsIcon = styled.div`
    &:first-of-type {
        margin-right: 2.8125em;
    }
    width: 4.0625em;
    height: 4.0625em;
    img {
        width: 4.0625em;
    }
    @media (max-width: 767px) {
        &:first-of-type {
            margin-right: 1.0625em;
        }
        width: 1.625em;
        height: 1.625em;
        img {
            width: 1.625em;
        }
    }
`;

const FooterFoot = styled.div`
    font-weight: 400;
    line-height: 1.5625em;
    text-align: center;
    letter-spacing: -0.01em;
    color: #bbb6a8;
    h1 {
        font-size: 1.125em;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;
