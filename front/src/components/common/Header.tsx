import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setModal } from '../../store/slices/onModalSlice';
import LoginModal from '../Login/LoginModal';
import {
    deleteUserLocalStorage,
    getUserLocalStorage,
} from '../../services/userControl';
import { deleteAccessToken } from '../../services/tokenControl';

const Header: React.FC = () => {
    $(window).scroll(() => {
        const scroll = $(window).scrollTop() || 0;
        if (scroll > 1) {
            $('.head').css('background', '#fff');

            $('.logo_text').fadeOut();
            $('.logo_img').fadeOut();
            $('.logo_second').fadeIn();
        } else {
            $('.head').css('background', 'rgba(0, 0, 0, 0)');

            $('.logo_text').fadeIn();
            $('.logo_img').fadeIn();
            $('.logo_second').fadeOut();
        }

        console.log('head color');
    });
    $(document).ready(() => {
        $('#submenu').css('display', 'none');
        $('#serviceMenu').mouseover(() => {
            $('#submenu').fadeIn(300);
        });
        $('#serviceMenu').mouseleave(() => {
            $('#submenu').fadeOut(300);
        });
    });
    const dispatch = useDispatch();
    const isModal = useSelector((state: RootState) => {
        return state.onModal.modal;
    });
    const handleModal = () => {
        const main = document.getElementsByClassName('main')[0];
        const nav = document.getElementById('fp-nav');
        const background = document.getElementById('root')?.lastElementChild;
        const head = document.getElementsByClassName('head')[0];

        dispatch(setModal(!isModal));
        if (isModal === false) {
            console.log('check');
            if (main) {
                main.className = 'main is-blurred';
            } else if (background) {
                background.id = 'is-blurred';
            }
            head.className = 'head is-blurred';
            if (nav) {
                nav.className = 'right is-blurred';
            }

            $('body').on('scroll mousewheel', (event) => {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        } else {
            console.log('close');
            if (main) {
                main.className = 'main';
            } else if (background) {
                background.id = '';
            }
            head.className = 'head';
            if (nav) {
                nav.className = 'right';
            }

            $('body').off('scroll mousewheel');
        }
    };

    const logoutHandler = () => {
        deleteAccessToken();
        deleteUserLocalStorage();
        localStorage.removeItem('token');
        window.location.replace('/');
    };

    return (
        <HeaderStyle data-html2canvas-ignore="true">
            <div className="head">
                <LeftHeaed>
                    <div>
                        <svg
                            width="49"
                            height="49"
                            viewBox="0 0 49 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.6021 18.9626H35.2053"
                                stroke="#675B4F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12.6021 32.9626H35.2053"
                                stroke="#675B4F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12.6021 25.9626H35.2053"
                                stroke="#675B4F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <img
                        className="logo_img"
                        src={`${process.env.PUBLIC_URL}/images/yetsul_logo1.png`}
                        alt="main logo"
                    />
                    <img
                        className="logo_text"
                        src={`${process.env.PUBLIC_URL}/images/yetsul_logo2.png`}
                        alt="main text"
                    />
                    <img
                        className="logo_second"
                        src={`${process.env.PUBLIC_URL}/images/yetsul_logo3.png`}
                        alt="logo_second"
                    />
                </LeftHeaed>
                <HeaderCategory>
                    <HeaderUl>
                        <li>
                            <NavLink
                                to="/"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                홈
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/service"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                서비스 소개
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tradition"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                전통주 역사
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/AllDrinkRecommend"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                전통주 추천
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/list"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                옛술 리스트
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/month"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                이달의 옛술
                            </NavLink>
                        </li>
                    </HeaderUl>
                </HeaderCategory>
                <RightHeaed click={isModal}>
                    {!localStorage.getItem('user') ? (
                        <div>
                            <p onClick={handleModal} onKeyDown={handleModal}>
                                로그인
                            </p>
                            <span id="centerBlock">ㅣ</span>
                            <NavLink
                                to="/profile"
                                className={(navData) =>
                                    navData.isActive ? 'active' : 'link'
                                }
                            >
                                내정보
                            </NavLink>
                        </div>
                    ) : (
                        <div>
                            <p onClick={logoutHandler} aria-hidden>
                                로그아웃
                            </p>
                            <span id="centerBlock">ㅣ</span>
                            <Link to="/profile">
                                {getUserLocalStorage().nickname}님
                            </Link>
                        </div>
                    )}
                    <div>
                        <svg
                            width="22"
                            height="26"
                            viewBox="0 0 22 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 25.0347C1 19.5987 5.40676 15.1919 10.8428 15.1919V15.1919C16.2788 15.1919 20.6855 19.5987 20.6855 25.0347V25.0347H1V25.0347Z"
                                stroke="#675B4F"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            <ellipse
                                cx="10.843"
                                cy="6.60809"
                                rx="5.72254"
                                ry="5.60809"
                                stroke="#675B4F"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                </RightHeaed>
            </div>
            {isModal && <LoginModal modal={handleModal} />}
        </HeaderStyle>
    );
};

export default Header;

const HeaderStyle = styled.header`
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 999;
    .head {
        width: 100%;
        height: 9.1875em;
        transition: all 0.3s ease-out;
        @media (max-width: 767px) {
            height: 6.0625em;
        }
    }
`;

const HeaderCategory = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: flex-start;
    > li {
        margin-right: 5em;
        display: flex;
        align-items: center;
        position: relative;
        #serviceMenu {
            p {
                font-size: 1.25em;
                font-family: 'GmarketSansBold';
                font-weight: 500;
                color: #bbb6a8;
                cursor: pointer;
            }
        }
        > a {
            font-size: 1.25em;
            font-family: 'GmarketSansMedium';
            font-weight: 400;
            color: #bbb6a8;
            text-decoration: none;
            transition: 0.5s;
            line-height: 0;
        }
        > a.active {
            color: #8e8372;
        }
    }
    > li:last-of-type {
        margin-right: 0;
    }
`;

const LeftHeaed = styled.div`
    @media (max-width: 767px) {
        margin-left: 1em;
        margin-top: 2.375em;
        display: flex;
        flex-direction: row;
        > div {
            display: block !important;
        }
        .logo_text {
            width: 5.68625em !important;
            height: 1.35125em !important;
            margin-top: 0.875em !important;
        }
    }

    > div {
        display: none;
    }
    position: absolute;
    margin-left: 5.5em;
    margin-top: 4.8125em;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-out;
    .logo_img {
        width: 7em;
        height: 6.625em;
        margin-bottom: 0.9375em;
        @media (max-width: 767px) {
            display: none;
        }
    }
    .logo_text {
        width: 7em;
        height: 1.6875em;
    }
    .logo_second {
        display: none;
        position: absolute;
        margin-top: -1.375em;
        margin-right: -0.21875em;
        width: 11.875em;
        height: 2.875em;
    }
`;

type clickLogintype = {
    click: boolean;
};

const RightHeaed = styled.div<clickLogintype>`
    @media (max-width: 767px) {
        margin-top: 3.3125em;
        margin-right: 1.706875em;
        > div:nth-of-type(2) {
            display: block !important;
        }
    }
    position: absolute;
    right: 0;
    display: flex;
    margin-right: 4.8125em;
    margin-top: 5em;

    > div:first-of-type {
        display: flex;
    }

    div:nth-of-type(2) {
        display: none;
    }
    a,
    p {
        margin: 0;
        font-size: 1.125em;
        line-height: 1.125em;
        color: #8e8372;
        text-decoration: none;
        transition: 0.5s;
        @media (max-width: 767px) {
            display: none;
        }
    }
    a.active {
        color: #454038;
    }
    p {
        background: none;
        border: none;
        color: ${(props) => (props.click ? `#454038` : `#8e8372`)};
        cursor: pointer;
    }
    #centerBlock {
        font-size: 1.125em;
        line-height: 1.125em;
        margin-left: 0.75em;
        margin-right: 0.75em;
        width: 1.125em;
        height: 1.125em;
        @media (max-width: 767px) {
            display: none;
        }
    }
`;
