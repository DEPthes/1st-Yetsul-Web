import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setImageModal } from '../../store/slices/imageModalSlice';
import ImageModal from './ImageModal';
import ModalImageElement from './ModalImageElement';

type modalType = {
    modal: () => void;
    photoReview: string[];
};

const ImageListModal: React.FC<modalType> = ({ modal, photoReview }) => {
    const dispatch = useDispatch();
    const isModal = useSelector((state: RootState) => {
        return state.imageModal.modal;
    });
    const [src, setSrc] = useState('');
    const handleModal = (src?: string) => {
        const main = document.getElementsByClassName('imageModalBackground')[0];
        dispatch(setImageModal(!isModal));
        if (src) {
            setSrc(src);
        }

        if (isModal === false) {
            if (main) {
                main.id = 'is-blurred';
                $(main).hide();
            }
        } else if (main && isModal === true) {
            main.id = '';
            $(main).show();
        }
    };
    return (
        <ModalMain aria-hidden id="modal">
            <ImageListWrap aria-hidden className="imageModalBackground">
                <p>포토후기 60</p>
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
                    <PhotoList>
                        {photoReview.map((el) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                <div key={el} onClick={() => handleModal(el)}>
                                    <ModalImageElement
                                        id={photoReview.indexOf(el)}
                                        src={el}
                                    />
                                </div>
                            );
                        })}
                    </PhotoList>
                </ModalInner>
            </ImageListWrap>
            {isModal && <ImageModal modal={handleModal} src={src} />}
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
    display: flex;
    justify-content: center;
`;

const PhotoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 71px;
    width: 1020px;
    height: 610px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #675b4f; /* 스크롤바의 색상 */

        border-radius: 10px;
    }
`;
