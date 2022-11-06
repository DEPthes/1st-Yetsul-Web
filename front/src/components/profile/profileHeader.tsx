import React from 'react';
import styled from 'styled-components';

type headertype = {
    BigHeader: string;
    SmallHeader: string;
};

export const ProfileHeader: React.FC<headertype> = ({
    BigHeader,
    SmallHeader,
}) => {
    return (
        <ProfileHeaderInner>
            <ProfileHeaderHeadingContainer>
                <HeaderHeading>{BigHeader}</HeaderHeading>
                <HeaderLittleHeading>{SmallHeader}</HeaderLittleHeading>
            </ProfileHeaderHeadingContainer>
        </ProfileHeaderInner>
    );
};

const ProfileHeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 58.073vw;
    border-bottom: 1px solid #bbb6a8;
`;

const ProfileHeaderHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderHeading = styled.h1`
    font-size: 1.5625em;
    color: #454038;
    margin-bottom: 1.5em;
`;

const HeaderLittleHeading = styled.h2`
    font-size: 1.125em;
    color: #8e8372;
    margin-bottom: 1.5em;
`;
