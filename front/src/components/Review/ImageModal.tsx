import React from 'react';
import styled from 'styled-components';

type modalType = {
    modal: () => void;
    src: string;
};

const ImageModal: React.FC<modalType> = ({ modal, src }) => {
    return (
        <ModalMain aria-hidden id="modal">
            <ImageWrap aria-hidden>
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
                    <div>
                        <img src={src} alt="img" />
                    </div>
                </ModalInner>
            </ImageWrap>
        </ModalMain>
    );
};

export default ImageModal;

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
    position: absolute;
    z-index: 100002;
`;

const ImageWrap = styled.div`
    z-index: 100003;
    background: #fff;
    width: 918px;
    height: 746px;
    border-radius: 18px;
    position: relative;
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
    align-items: center;
`;
