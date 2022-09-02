import React from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { ProfileHeader } from './profileHeader';

export const FixProfile: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <ProfileHeader />
                <ProfileImgFrame>
                    <UserProfileImg src="images/profilegray.png" />
                </ProfileImgFrame>
                <NameBox>
                    <Name>안녕</Name>
                    <NameChange> 변경</NameChange>
                </NameBox>
                <form method="get" action="/login">
                    <Registration>등록하기</Registration>
                </form>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProfileImgFrame = styled.div`
    width: 9.531vw;
    height: 9.531vw;
    border-radius: 100%;
    background: #d9d9d9;
    margin-top: 1.979vw;
`;

const UserProfileImg = styled.img`
    z-index: 999999999;
`;

const NameBox = styled.div`
    height: 3.958vw;
    display: flex;
    align-items: center;
    min-width: 21.615vw;
    justify-content: space-between;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-top: 2.5vw;
`;

const Name = styled.p`
    font-size: 1.302vw;
    color: #675b4f;
    margin-left: 1.563vw;
`;

const NameChange = styled.a`
    color: #8e8372;
    font-size: 1.042vw;
    cursor: pointer;
    margin-right: 1.563vw;
`;

const Registration = styled.button`
    background: #8b7e6a;
    border: 1px solid #8b7e6a;
    border-radius: 18px;
    width: 6.875vw;
    height: 2.917vw;
    color: white;
    font-size: 1.042vw;
    margin-top: 14.01vw;
    cursor: pointer;
`;
