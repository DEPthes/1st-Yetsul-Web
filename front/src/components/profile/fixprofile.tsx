/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { getAccessToken } from '../../services/tokenControl';
import { ProfileHeader } from './profileHeader';

export const FixProfile: React.FC = () => {
    const [userData, setUserData] = useState<UserType>(Object);
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

    const [InputImage, setInputImage] = useState(String);
    const [InputName, setInputName] = useState(String);

    const PatchProfileData = () => {
        useEffect(() => {
            const formData = new FormData();
            formData.append('nickname', InputName);
            formData.append('file', InputImage);
            axios
                .patch(
                    'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/auth/edituser',
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${getAccessToken()}`,
                        },
                    },
                )
                .then(() => {
                    // eslint-disable-next-line no-alert
                    alert('변경되었습니다');
                });
        }, []);
    };

    useEffect(() => {
        setInputImage(userData.profileImg);
        setInputName(userData.nickname);
    }, [userData]);

    const saveFileImage = (e: any) => {
        setInputImage(URL.createObjectURL(e.target.files[0]));
    };

    const onChange = useCallback((e: any) => {
        setInputName(e.target.value);
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
                            <FixProfileIconSvg
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
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32.5 18.5H23.5L22.75 21.5H16V36.5H40V21.5H33.25L32.5 18.5Z"
                                    fill="white"
                                />
                                <path
                                    d="M23.5 18.5V17.85C23.2017 17.85 22.9417 18.053 22.8694 18.3424L23.5 18.5ZM32.5 18.5L33.1306 18.3424C33.0583 18.053 32.7983 17.85 32.5 17.85V18.5ZM22.75 21.5V22.15C23.0483 22.15 23.3083 21.947 23.3806 21.6576L22.75 21.5ZM16 21.5V20.85C15.641 20.85 15.35 21.141 15.35 21.5H16ZM16 36.5H15.35C15.35 36.859 15.641 37.15 16 37.15V36.5ZM40 36.5V37.15C40.359 37.15 40.65 36.859 40.65 36.5H40ZM40 21.5H40.65C40.65 21.141 40.359 20.85 40 20.85V21.5ZM33.25 21.5L32.6194 21.6576C32.6917 21.947 32.9517 22.15 33.25 22.15V21.5ZM23.5 19.15H32.5V17.85H23.5V19.15ZM23.3806 21.6576L24.1306 18.6576L22.8694 18.3424L22.1194 21.3424L23.3806 21.6576ZM16 22.15H22.75V20.85H16V22.15ZM16.65 36.5V21.5H15.35V36.5H16.65ZM40 35.85H16V37.15H40V35.85ZM39.35 21.5V36.5H40.65V21.5H39.35ZM33.25 22.15H40V20.85H33.25V22.15ZM31.8694 18.6576L32.6194 21.6576L33.8806 21.3424L33.1306 18.3424L31.8694 18.6576Z"
                                    fill="black"
                                />
                                <circle
                                    cx="28"
                                    cy="28.25"
                                    r="4.5"
                                    stroke="black"
                                    strokeWidth="1.3"
                                />
                            </FixProfileIconSvg>
                        </label>
                        <input
                            type="file"
                            id="chooseFile"
                            name="chooseFile"
                            accept="image/*"
                            onChange={saveFileImage}
                            style={{ display: 'none' }}
                        />
                    </ProfileImgUploadBtnContainer>
                    <ProfileImgFrame>
                        <UserProfileImg
                            className="imgBox"
                            src={InputImage}
                            alt="대체이미지"
                        />
                    </ProfileImgFrame>

                    <NameBox>
                        <Name
                            type="text"
                            maxLength={12}
                            value={InputName}
                            onChange={onChange}
                        />
                    </NameBox>
                    <Registration onClick={PatchProfileData}>
                        등록하기
                    </Registration>
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

const FixProfileIconSvg = styled.svg``;

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
