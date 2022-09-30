import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setModal } from '../../store/slices/onModalSlice';
import LoginModal from '../Login/LoginModal';

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
        const background = document.getElementById('root')?.lastElementChild;
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav');
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
    return (
        <HeaderStyle data-html2canvas-ignore="true">
            <div className="head">
                <LeftHeaed>
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
        height: 147px;
        transition: all 0.3s ease-out;
    }
`;

const HeaderCategory = styled.div`
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
        margin-right: 80px;
        display: flex;
        align-items: center;
        position: relative;
        #serviceMenu {
            p {
                font-size: 23px;
                font-family: 'GmarketSansMedium';
                font-weight: 400;
                color: #8e8372;
                cursor: pointer;
            }
        }
        > a {
            font-size: 23px;
            font-family: 'GmarketSansMedium';
            font-weight: 400;
            color: #8e8372;
            text-decoration: none;
            transition: 0.5s;
            line-height: 0;
        }
        > a.active {
            color: #454038;
        }
    }
    > li:last-of-type {
        margin-right: 0;
    }
`;

const LeftHeaed = styled.div`
    position: absolute;
    margin-left: 88px;
    margin-top: 77px;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-out;
    .logo_img {
        width: 112px;
        height: 106px;
        margin-bottom: 15px;
    }
    .logo_text {
        width: 112px;
        height: 27px;
    }
    .logo_second {
        display: none;
        position: absolute;
        margin-top: -22px;
        margin-right: -3.5px;
        width: 190px;
        height: 46px;
    }
`;

type clickLogintype = {
    click: boolean;
};

const RightHeaed = styled.div<clickLogintype>`
    position: absolute;
    right: 0;
    display: flex;
    margin-right: 77px;
    margin-top: 80px;
    a,
    p {
        margin: 0;
        font-size: 18px;
        line-height: 18px;
        color: #8e8372;
        text-decoration: none;
        transition: 0.5s;
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
        font-size: 18px;
        line-height: 18px;
        margin-left: 12px;
        margin-right: 12px;
        width: 18px;
        height: 18px;
    }
`;
