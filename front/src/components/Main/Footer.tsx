/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
    return (
        <FooterWrapper className="footer">
            <FooterInner>
                <FooterInfo>
                    <h1>
                        ‘옛술의 전당'은 명지대학교 소속 DEPth팀에서 전통주
                        활성화를 목표로 다양한 컨텐츠를 제공하는
                        정보사이트입니다.
                    </h1>
                </FooterInfo>
                <FooterCenter>
                    <SnsIcon>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/gmail.png`}
                            alt="gmail"
                        />
                    </SnsIcon>
                    <SnsIcon>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                            alt="instagram"
                        />
                    </SnsIcon>
                </FooterCenter>
                <FooterFoot>
                    <h1>옛술의 전당 사이트 주소</h1>
                </FooterFoot>
            </FooterInner>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    width: 100%;
    height: 300px;
    background: #f2f2f2;
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
    font-size: 25px;
    line-height: 25px;
    letter-spacing: -0.01em;
    color: #8b7e6a;
`;

const FooterCenter = styled.div`
    display: flex;
    margin: 45px 0;
`;

const SnsIcon = styled.div`
    &:first-of-type {
        margin-right: 45px;
    }
    width: 65px;
    height: 65px;
`;

const FooterFoot = styled.div`
    font-weight: 400;
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #000000;
`;
