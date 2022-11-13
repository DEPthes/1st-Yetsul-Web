/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { ProfileHeader } from './profileHeader';

export const FixProfile: React.FC = () => {
    const [userData, setUserData] = useState<UserType>(Object);

    const onChange = useCallback((e: any) => {
        setUserData(e.target.value);
    }, []);

    const getData = () => {
        const JWT = localStorage.getItem('accessToken') || '';
        console.log('JWT :', JWT);
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };

    useEffect(() => {
        getData()
            .get(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/auth/user',
            )
            .then((res) => setUserData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <BackgroundTemplate heightValue="100%">
            <form method="post">
                <Inner>
                    <ProfileHeader
                        BigHeader="나의 프로필 변경하기
                    "
                        SmallHeader=""
                    />
                    <ProfileImgUploadBtnContainer>
                        <label htmlFor="chooseFile">
                            <FixProfileImgBtnBgSVG
                                width="54"
                                height="54"
                                viewBox="0 0 54 54"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="27"
                                    cy="27"
                                    r="26.5"
                                    fill="white"
                                    stroke="#675B4F"
                                />
                            </FixProfileImgBtnBgSVG>

                            <FixProfileImgBtnSVG
                                width="42"
                                height="42"
                                viewBox="0 0 42 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M25.5 13.5H16.5L15.75 16.5H9V31.5H33V16.5H26.25L25.5 13.5Z"
                                    fill="white"
                                />
                                <path
                                    d="M16.5 13.5V12.85C16.2017 12.85 15.9417 13.053 15.8694 13.3424L16.5 13.5ZM25.5 13.5L26.1306 13.3424C26.0583 13.053 25.7983 12.85 25.5 12.85V13.5ZM15.75 16.5V17.15C16.0483 17.15 16.3083 16.947 16.3806 16.6576L15.75 16.5ZM9 16.5V15.85C8.64101 15.85 8.35 16.141 8.35 16.5H9ZM9 31.5H8.35C8.35 31.859 8.64101 32.15 9 32.15V31.5ZM33 31.5V32.15C33.359 32.15 33.65 31.859 33.65 31.5H33ZM33 16.5H33.65C33.65 16.141 33.359 15.85 33 15.85V16.5ZM26.25 16.5L25.6194 16.6576C25.6917 16.947 25.9517 17.15 26.25 17.15V16.5ZM16.5 14.15H25.5V12.85H16.5V14.15ZM16.3806 16.6576L17.1306 13.6576L15.8694 13.3424L15.1194 16.3424L16.3806 16.6576ZM9 17.15H15.75V15.85H9V17.15ZM9.65 31.5V16.5H8.35V31.5H9.65ZM33 30.85H9V32.15H33V30.85ZM32.35 16.5V31.5H33.65V16.5H32.35ZM26.25 17.15H33V15.85H26.25V17.15ZM24.8694 13.6576L25.6194 16.6576L26.8806 16.3424L26.1306 13.3424L24.8694 13.6576Z"
                                    fill="black"
                                />
                                <circle
                                    cx="21"
                                    cy="23.25"
                                    r="4.5"
                                    stroke="black"
                                    strokeWidth="1.3"
                                />
                            </FixProfileImgBtnSVG>
                        </label>
                        <input
                            type="file"
                            id="chooseFile"
                            name="chooseFile"
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                    </ProfileImgUploadBtnContainer>
                    <ProfileImgFrame>
                        <UserProfileImg
                            className="imgBox"
                            // src="/images/depth.jpeg"
                            src={userData.profileImg}
                            alt="대체이미지"
                        />
                    </ProfileImgFrame>

                    <NameBox>
                        <Name
                            type="text"
                            maxLength={12}
                            value={userData.nickname}
                            onChange={onChange}
                        />
                    </NameBox>
                    <Registration type="submit">등록하기</Registration>
                </Inner>
            </form>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

const ProfileImgFrame = styled.div`
    width: 183px;
    height: 183px;
    border-radius: 100%;
    background-color: #d9d9d9;
    margin-top: 1.979vw;
    overflow: hidden;
`;
const UserProfileImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const ProfileImgUploadBtnContainer = styled.div`
    label {
        cursor: pointer;
        position: absolute;
        top: 320px;
        left: 970px;
    }
`;

const FixProfileImgBtnSVG = styled.svg`
    position: relative;
    left: 6px;
    top: 3px;
`;

const FixProfileImgBtnBgSVG = styled.svg`
    position: absolute;
`;

const NameBox = styled.div`
    height: 66px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #675b4f;
    border-radius: 18px;
    margin-top: 2.5vw;
`;

const Name = styled.input`
    width: 300px;
    font-size: 1.302vw;
    color: #675b4f;
    margin-left: 1.563vw;
    border: none;
    background: none;
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

type UserType = {
    id: number;
    email: string;
    nickname: string;
    profileImg: string;
};
