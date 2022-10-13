import React from 'react';
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
    return (
        <ModalMain aria-hidden id="modal">
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
    width: 1081px;
    height: 746px;
    border-radius: 18px;
    position: relative;
    > p {
        position: absolute;
        top: -49px;
        z-index: 100001;
        color: #fff;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
    }
`;

const CloseBtn = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    cursor: pointer;
    position: absolute;
`;

const ModalInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const PhotoListScroll = styled.div`
    height: 610px;
    width: 942px;
    overflow-y: scroll;
    margin-top: 71px;
    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #675b4f; /* 스크롤바의 색상 */

        border-radius: 10px;
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
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-of-type(6n) {
        margin-right: 0;
    }
`;
