import React from 'react';
import styled from 'styled-components';

export const ProfileHeader: React.FC = () => {
    return (
        <ProfileHeaderInner>
            <HeaderHeading>나의 프로필 변경하기</HeaderHeading>
            <HeaderLittleHeading>
                내가 찜한 옛술을 한 번에 모아볼 수 있어요!
            </HeaderLittleHeading>
        </ProfileHeaderInner>
    );
};

const ProfileHeaderInner = styled.div`
    width: 58.073vw;
    border-bottom: 1px solid #bbb6a8;
`;

const HeaderHeading = styled.h1`
    font-size: 1.563vw;
    color: #454038;
    margin-bottom: 1.042vw;
`;

const HeaderLittleHeading = styled.h2`
    font-size: 1.042vw;
    color: #8e8372;
    margin-bottom: 1.042vw;
    display: none;
`;
