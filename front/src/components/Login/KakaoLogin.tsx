import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userAPI } from '../../services/userControl';
import BackgroundTemplate from '../common/BackgroundTemplate';

const KakaoLogin: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    const getKakaoToken = () => {
        fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=authorization_code&client_id=e2d1c7ba92ca798e88509878ae8f44ee&redirect_uri=http://localhost:3000/auth/kakaologin&code=${KAKAO_CODE}`,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    localStorage.setItem('token', data.access_token);
                    console.log('success');
                    getJwtToken();
                } else {
                    console.log('fail');
                    navigate('/');
                }
            })
            .catch((err) => console.log(err));
    };

    const getJwtToken = () => {
        axios
            .get(
                `http://depth-server.herokuapp.com/auth/createjwttoken/${localStorage.getItem(
                    'token',
                )}`,
            )
            .then(async (res) => {
                console.log('accesstoken: ', res.data);
                if (res.data) {
                    localStorage.setItem('accessToken', res.data);
                    await userAPI().then(() => {
                        window.location.replace('/');
                    });
                } else {
                    console.log('fail');
                    navigate('/');
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getKakaoToken();
    }, []);

    return (
        <BackgroundTemplate heightValue="100%">
            <LOADING>로그인 중...</LOADING>
        </BackgroundTemplate>
    );
};

export default KakaoLogin;

const LOADING = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
`;
