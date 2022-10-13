import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setModal } from '../../store/slices/onModalSlice';
import LoginModal from '../Login/LoginModal';
import {
    deleteUserLocalStorage,
    getUserLocalStorage,
} from '../../services/userControl';
import { deleteAccessToken } from '../../services/tokenControl';
import { setMobileMenu } from '../../store/slices/mobileMenuSlice';

const Header: React.FC = () => {
    $(window).scroll(() => {
        const scroll = $(window).scrollTop() || 0;
        if (scroll > 1) {
            $('.head').css('background', '#fff');
        } else {
            $('.head').css('background', 'rgba(0, 0, 0, 0)');
        }
    });
    if (window.innerWidth >= 768) {
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
    }

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

    const mobileMenuOn = useSelector((state: RootState) => {
        return state.mobileMenu.modal;
    });

    const onMobileMenu = () => {
        dispatch(setMobileMenu(true));
        setTimeout(() => {
            $('#mobileMenu').css('transform', 'translateX(0%)');
            $('#mobileMenuWrap').css('opacity', '1');
        }, 10);
    };
    const closeMobileMenu = () => {
        $('#mobileMenu').css('transform', 'translateX(-100%)');
        $('#mobileMenuWrap').css('opacity', '0');

        setTimeout(() => {
            $('#mobileMenuWrap').css('display', 'none');
            dispatch(setMobileMenu(false));
        }, 400);
    };

    const navigate = useNavigate();
    const onClickMenu = (to: string) => {
        closeMobileMenu();
        navigate(to);
    };

    const profileMobile = () => {
        if (localStorage.getItem('user')) {
            navigate('/profile');
        } else {
            handleModal();
        }
    };

    return (
        <HeaderStyle data-html2canvas-ignore="true">
            <div className="head">
                <LeftHeaed>
                    <div aria-hidden>
                        <svg
                            onClick={onMobileMenu}
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
                    <div onClick={profileMobile} aria-hidden>
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
            {mobileMenuOn && (
                <MobileMenuWrap id="mobileMenuWrap">
                    <MobileMenuInner id="mobileMenu">
                        <CloseBtn>
                            <svg
                                onClick={closeMobileMenu}
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.34766 22.4608L21.8144 9.99404"
                                    stroke="#675B4F"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M9.34766 9.99402L21.8144 22.4608"
                                    stroke="#675B4F"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </CloseBtn>
                        <MobileHeadLogoMenu>
                            <img
                                onClick={() => onClickMenu('/')}
                                aria-hidden
                                className="logo_text"
                                src={`${process.env.PUBLIC_URL}/images/yetsul_logo2.png`}
                                alt="main text"
                            />
                        </MobileHeadLogoMenu>
                        <MenuLoginBlock>
                            {!localStorage.getItem('user') ? (
                                <>
                                    <button type="button" onClick={handleModal}>
                                        <p>로그인</p>
                                    </button>
                                    <button type="button" onClick={handleModal}>
                                        <p>내정보</p>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button type="button">
                                        <p>
                                            {getUserLocalStorage().nickname}님
                                        </p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={logoutHandler}
                                    >
                                        <p>로그아웃</p>
                                    </button>
                                </>
                            )}
                        </MenuLoginBlock>
                        <MenuElemBlock onClick={() => onClickMenu('/service')}>
                            <h1>서비스 소개</h1>
                        </MenuElemBlock>
                        <MenuElemBlock
                            onClick={() => onClickMenu('/tradition')}
                        >
                            <h1>전통주 역사</h1>
                        </MenuElemBlock>
                        <MenuElemBlock>
                            <h1
                                onClick={() =>
                                    onClickMenu('/AllDrinkRecommend')
                                }
                                aria-hidden
                            >
                                옛술 추천
                            </h1>
                            <p
                                onClick={() => onClickMenu('/RecommendTicket')}
                                aria-hidden
                            >
                                옛술의 전당
                            </p>
                            <p
                                onClick={() => onClickMenu('/RecommendSlot')}
                                aria-hidden
                            >
                                술롯 머신
                            </p>
                        </MenuElemBlock>
                        <MenuElemBlock onClick={() => onClickMenu('/list')}>
                            <h1>옛술 리스트</h1>
                        </MenuElemBlock>
                        <MenuElemBlock onClick={() => onClickMenu('/month')}>
                            <h1>이달의 옛술</h1>
                        </MenuElemBlock>
                    </MobileMenuInner>
                </MobileMenuWrap>
            )}
        </HeaderStyle>
    );
};

export default Header;

const CloseBtn = styled.div`
    position: absolute;
    top: 2.9375em;
    right: 1.1875em;
    cursor: pointer;
    > svg {
        height: 2em;
    }
`;

const MenuElemBlock = styled.div`
    display: flex;
    align-items: center;
    height: 4.375em;
    &:not(:last-of-type) {
        border-bottom: 1px solid #bbb6a8;
    }
    &:nth-last-of-type(3) {
        height: 8.75em;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        > h1 {
            margin-bottom: 1.375em;
        }
        > p {
            &:first-of-type {
                margin-bottom: 1.125em;
            }
            font-family: 'GmarketSansMedium';
            font-style: normal;
            font-weight: 400;
            font-size: 0.8125em;
            line-height: 1em;
            letter-spacing: -0.05em;
            color: #8b7e6a;
        }
    }

    > h1 {
        font-family: 'GmarketSansBold';
        font-style: normal;
        font-weight: 500;
        font-size: 0.9375em;
        line-height: 1em;
        letter-spacing: -0.04em;
        color: #8b7e6a;
    }
`;

const MenuLoginBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3.625em;
    border-bottom: 1px solid #bbb6a8;
    > button {
        width: 4.0625em;
        height: 1.5em;
        background: #675b4f;
        border: 0.7px solid #8b7e6a;
        border-radius: 18px;
        &:first-of-type {
            background: #fff;
            margin-right: 0.5625em;
            > p {
                color: #8b7e6a;
            }
        }
        line-height: 0.75em;
        letter-spacing: -0.04em;
        > p {
            font-family: 'GmarketSansMedium';
            font-style: normal;
            font-weight: 400;
            font-size: 0.65em;

            color: #ffffff;
        }
    }
`;

const MobileHeadLogoMenu = styled.div`
    margin-top: 3.266875em;
    > img {
        height: 1.35125em;
    }
`;

const MobileMenuWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    z-index: 100002;
    display: flex;
    justify-content: flex-start;
    opacity: 0;
    transition: all 0.4s ease;
`;

const MobileMenuInner = styled.div`
    zoom: 1.2;
    height: 100%;
    width: 15.8125em;
    background: #fff;
    transform: translateX(-100%);
    position: relative;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div:not(:first-of-type) {
        width: 12.6875em;
    }
`;

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
            border-bottom: 1px solid #bbb6a8;
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
            > svg {
                height: 3.0625em !important;
            }
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
            > svg {
                height: 1.501875em !important;
            }
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
