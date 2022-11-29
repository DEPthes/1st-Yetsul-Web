import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReviewType } from '../Detail/DrinkDetail';
import ModalImageElement from './ModalImageElement';

type modalType = {
    modal: () => void;
    photoReview: ReviewType[];
    id: string | undefined;
};

const ImageListModal: React.FC<modalType> = ({ modal, photoReview, id }) => {
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    return (
        <ModalMain aria-hidden id="modal">
            {isMobile ? (
                <ImageListWrap aria-hidden className="imageModalBackground">
                    <p>{`포토후기 (${photoReview.length})`}</p>
                    <CloseBtn>
                        <svg
                            width={isMobile ? '26' : '38'}
                            height={isMobile ? '26' : '39'}
                            viewBox={isMobile ? '0 0 26 26' : '0 0 38 39'}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={modal}
                        >
                            <path
                                d="M11.1003 26.6909L25.9046 11.8866"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M11.1003 11.8862L25.9046 26.6905"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </CloseBtn>
                    <ModalInner>
                        <PhotoListScroll>
                            <PhotoList>
                                {photoReview.reverse().map((el, index) => {
                                    return (
                                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                        <PhotoDiv
                                            to={`/review/alcohol${id}/review${el.id}`}
                                            // eslint-disable-next-line react/no-array-index-key
                                            key={index}
                                        >
                                            <ModalImageElement
                                                src={
                                                    el.reviewImgUrl
                                                        .toString()
                                                        .split(',')[0]
                                                }
                                            />
                                        </PhotoDiv>
                                    );
                                })}
                            </PhotoList>
                        </PhotoListScroll>
                    </ModalInner>
                </ImageListWrap>
            ) : (
                <ImageListWrap aria-hidden className="imageModalBackground">
                    <p>{`포토후기 ${photoReview.length}`}</p>
                    <CloseBtn>
                        <svg
                            width="38"
                            height="39"
                            viewBox="0 0 38 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={modal}
                        >
                            <path
                                d="M11.1003 26.6909L25.9046 11.8866"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M11.1003 11.8862L25.9046 26.6905"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </CloseBtn>
                    <ModalInner>
                        <PhotoListScroll>
                            <PhotoList>
                                {photoReview.map((el, index) => {
                                    return (
                                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                        <PhotoDiv
                                            to={`/review/alcohol${id}/review${el.id}`}
                                            // eslint-disable-next-line react/no-array-index-key
                                            key={index}
                                        >
                                            <ModalImageElement
                                                src={
                                                    el.reviewImgUrl
                                                        .toString()
                                                        .split(',')[0]
                                                }
                                            />
                                        </PhotoDiv>
                                    );
                                })}
                            </PhotoList>
                        </PhotoListScroll>
                    </ModalInner>
                </ImageListWrap>
            )}
        </ModalMain>
    );
};

export default ImageListModal;

const ModalMain = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100000;
`;

const ImageListWrap = styled.div`
    z-index: 100001;
    background: #fff;
    width: 67.5625em;
    height: 46.625em;
    border-radius: 1.125em;
    position: relative;

    @media (max-width: 767px) {
        width: 20.75em;
        height: 30.6875em;
    }

    > p {
        position: absolute;
        top: -3.0625em;
        z-index: 100001;
        color: #fff;
        font-weight: 400;
        font-size: 1.875em;
        line-height: 1.875em;

        @media (max-width: 767px) {
            top: 2.5em;
            left: 1.75em;
            font-size: 0.9375em;
            line-height: 0.9375em;
            color: #675b4f;
        }
    }
`;

const CloseBtn = styled.div`
    margin-top: 1.875em;
    margin-left: 1.875em;
    cursor: pointer;
    position: absolute;

    @media (max-width: 767px) {
        top: -1.25em;
        right: 1.25em;
    }
`;

const ModalInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 0.625em;
`;

const PhotoListScroll = styled.div`
    height: 38.125em;
    width: 58.875em;
    overflow-y: scroll;
    margin-top: 4.4375em;

    @media (max-width: 767px) {
        width: 17.1875em;
        height: 22.5625em;
    }
    &::-webkit-scrollbar {
        width: 0.5em; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #675b4f; /* 스크롤바의 색상 */

        border-radius: 0.625em;
    }
`;

const PhotoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const PhotoDiv = styled(Link)`
    text-decoration: none;
    height: auto;
    margin-right: 1.25em;
    margin-bottom: 1.25em;

    @media (max-width: 767px) {
        margin-right: 0.510625em;
        margin-bottom: 0.70875em;
    }

    &:nth-of-type(3n) {
        margin-right: 0;
    }

    @media (max-width: 767px) {
        &:nth-of-type(3n) {
            margin-right: 0;
        }
    }
`;
