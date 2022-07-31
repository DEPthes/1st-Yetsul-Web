import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setModal } from '../../store/slices/onModalSlice';
import LoginModal from '../Login/LoginModal';

const Header: React.FC = () => {
    $(document).ready(() => {
        $('#serviceMenu').mouseover(() => {
            $('#submenu').fadeIn(300);
            $('#serviceMenu').height(50);
        });
        $('#serviceMenu').mouseleave(() => {
            $('#submenu').fadeOut(300);
            $('#serviceMenu').height(0);
        });
    });
    const dispatch = useDispatch();
    const isModal = useSelector((state: RootState) => {
        return state.onModal.modal;
    });
    const handleModal = () => {
        const main = document.getElementsByClassName('main')[0];
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav') || document.body;
        dispatch(setModal(!isModal));
        if (isModal === false) {
            main.className = 'main is-blurred';
            head.className = 'head is-blurred';
            nav.className = 'right is-blurred';
            $('body').on('scroll mousewheel', (event) => {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        } else {
            main.className = 'main';
            head.className = 'head';
            nav.className = 'right';
            $('body').off('scroll mousewheel');
        }
    };
    return (
        <HeaderStyle>
            <div className="head">
                <LeftHeaed>
                    <img
                        className="logo_img"
                        src="https://s3-alpha-sig.figma.com/img/c720/1fc5/65001d3c20ef9c48659dbec5b8379901?Expires=1659312000&Signature=R~EEeDKNfUfk6v~VGGZFXSH-UgtMElsPATKJMWdTZWu3bumd4y3Qmhn8AyGMIOJgMbGoNC3gJVc-u1WEd11Ot9crY9FzD8ncHp7WYSHLPLiiFgYejtH7dwb5jZI~VxyhrWJzVDykmnS4s8apIf65ehjhryLL4urNUCEe~2DzXLj6YZ117bIF4j9cCCIIqDcHmQ0Xp6waz9MVQL2I2-93qKl6anB~kaISgP4OTEh1-h8U9-RsjkOYUVE5JmLM185CYp19buYqTMoCo7HCtIcZwZlcyFoQL~LH6Nmy-IWKPpsOHrthlM11VJC1GBBJvf2QRYI59XZo7gMT23WGnQhrog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="main logo"
                    />
                    <img
                        className="logo_text"
                        src="https://s3-alpha-sig.figma.com/img/9585/6086/111126df2f993ddcd0e020839b351d4a?Expires=1659312000&Signature=JhIkb0qQSFyYlpc9sLtbNeq2IvfmAFPZyjVEYdBQvz94dHG3dkSXOr6X9BXpAr3E4cQTMd99R22Bh-GpAJ1xKBic0wvzjt2QZYUVCt6A8X3jbO5dzBmAaWRnc0L6vOAk55I7Ffi0wnk8gkseXe3kqH6KUnUE3kT3td3U6CwPsLIMRXQTW2xD-j~~ciNthX6YMbhftC~SM0uWCfyAmeQJOQOQak6DGaZ-XaeOcdwUKtGzpmtcQuxkDbLgIYE6fb~sn5IBy1HYaJ~bYli6bjmR4k-MiH6QcndY0AKZWiUeOvw4dK6Pysm-MEPBgHu2VKM90-oBk8DtI0o6QcgFLIX92w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="main text"
                    />
                </LeftHeaed>
                <HeaderCategory>
                    <HeaderUl>
                        <li className="active">
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
                            <div id="serviceMenu">
                                <p>서비스 소개</p>
                                <SubMenu id="submenu">
                                    <li>
                                        <NavLink
                                            to="/depth"
                                            className={(navData) =>
                                                navData.isActive
                                                    ? 'link active'
                                                    : 'link'
                                            }
                                        >
                                            Depth 소개
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/service"
                                            className={(navData) =>
                                                navData.isActive
                                                    ? 'link active'
                                                    : 'link'
                                            }
                                        >
                                            옛술의 전당 소개
                                        </NavLink>
                                    </li>
                                </SubMenu>
                            </div>
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
                                to="/recommend"
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
`;

const HeaderCategory = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-top: 80px;
    margin-bottom: 49px;
    align-items: flex-start;
    > li {
        margin-right: 80px;
        display: flex;
        align-items: center;
        position: relative;
        #serviceMenu {
            p {
                font-size: 18px;
                line-height: 18px;
                font-family: 'GmarketSansMedium';
                font-weight: 400;
                color: #8e8372;
                cursor: pointer;
            }
        }
        > a {
            font-size: 18px;
            line-height: 18px;
            font-family: 'GmarketSansMedium';
            font-weight: 400;
            color: #8e8372;
            text-decoration: none;
            transition: 0.5s;
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
    .logo_img {
        width: 112px;
        height: 106px;
        margin-bottom: 15px;
    }
    .logo_text {
        width: 112px;
        height: 27px;
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

const SubMenu = styled.ul`
    top: 37px;
    left: -48px;
    margin-right: 40px;
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 199px;
    height: 109px;
    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 42.5px;
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    li {
        margin-left: 56px;
        a {
            font-size: 15px;
            line-height: 15px;
            color: #675b4f;
            text-decoration: none;
            position: relative;
            transition: 0.5s;
        }
        &:first-of-type {
            margin-bottom: 18px;
        }
        a.active::before {
            position: absolute;
            top: 2px;
            left: -23px;
            width: 11px;
            height: 11px;
            background: #675b4f;
            border-radius: 50%;
            content: '';
            opacity: 1;
            transform: scale(1);
            transition: 0.5s;
        }
        a::before {
            opacity: 0;
            transform: scale(0);
            content: '';
        }
    }
`;
