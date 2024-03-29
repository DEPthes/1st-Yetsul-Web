import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const MonthBlock: React.FC<{
    img: string;
    contentNumber: number;
    contentWidth: number;
    imgWidth: number;
    btnImgLF: number;
    btnImgBT: number;
    btnArrowLF: number;
    btnArrowBT: number;
    mBtnImgLF: number;
    mBtnImgBT: number;
    mBtnArrowBT: number;
    mBtnArrowLF: number;
}> = ({
    img,
    contentNumber,
    contentWidth,
    imgWidth,
    btnImgLF,
    btnImgBT,
    btnArrowLF,
    btnArrowBT,
    mBtnImgLF,
    mBtnImgBT,
    mBtnArrowBT,
    mBtnArrowLF,
}) => {
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });
    const onMouseOver = () => {
        $(`#hover-button-${contentNumber}`).css('transform', 'scale(2)');
        $(`#hover-icon-${contentNumber}`).css('opacity', '1');
    };
    const onMouseOut = () => {
        $(`#hover-button-${contentNumber}`).css('transform', 'scale(1)');
        $(`#hover-icon-${contentNumber}`).css('opacity', '0');
    };
    return (
        <div>
            <MonthContent
                contentWidth={contentWidth}
                onMouseEnter={onMouseOver}
                onMouseLeave={onMouseOut}
            >
                <DrinkImg src={img} alt="9Drink" imgWidth={imgWidth} />
                <AnimationBtnImg
                    id={`hover-button-${contentNumber}`}
                    btnImgLF={btnImgLF}
                    btnImgBT={btnImgBT}
                    mBtnImgLF={mBtnImgLF}
                    mBtnImgBT={mBtnImgBT}
                >
                    <svg
                        width={isMobile ? '15' : '23'}
                        height={isMobile ? '15' : '23'}
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="11.5" cy="11.5" r="11.5" fill="#EDEBE8" />
                    </svg>
                </AnimationBtnImg>
                <AnimationArrowImg
                    id={`hover-icon-${contentNumber}`}
                    btnArrowLF={btnArrowLF}
                    btnArrowBT={btnArrowBT}
                    mBtnArrowLF={mBtnArrowLF}
                    mBtnArrowBT={mBtnArrowBT}
                >
                    <svg
                        width={isMobile ? '30' : '48'}
                        height={isMobile ? '30' : '48'}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.5083 32.175L29.8083 25.125V22.6L18.5083 15.525V18.175L27.5583 23.85L18.5083 29.5V32.175Z"
                            fill="#9B9082"
                        />
                    </svg>
                </AnimationArrowImg>
            </MonthContent>
        </div>
    );
};

export default MonthBlock;

const AnimationBtnImg = styled.div<{
    btnImgLF: number;
    btnImgBT: number;
    mBtnImgLF: number;
    mBtnImgBT: number;
}>`
    position: absolute;
    transition: 0.3s;
    z-index: 100;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 1.4375em;
    width: 1.4375em;
    bottom: ${(props) => props.btnImgBT}em;
    left: ${(props) => props.btnImgLF}em;
    /* bottom: 1.8875em;
    left: 1.8875em; //27 */
    > svg {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 0.9375em; //15
        height: 0.9375em; //14
        bottom: ${(props) => props.mBtnImgBT}em;
        left: ${(props) => props.mBtnImgLF}em;
        /* 
        bottom: 1.2875em;
        left: 1.2875em; //27 */
    }
`;

const AnimationArrowImg = styled.div<{
    btnArrowLF: number;
    btnArrowBT: number;
    mBtnArrowLF: number;
    mBtnArrowBT: number;
}>`
    position: absolute;
    transition: 0.3s;
    z-index: 101;

    height: 1.4375em;
    width: 1.4375em;
    transform: scale(2);
    opacity: 0;

    bottom: ${(props) => props.btnArrowBT}em;
    left: ${(props) => props.btnArrowLF}em;
    /* bottom: 1.8875em;
    left: 1.8875em; //27 */

    > svg {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 0.9375em; //15
        height: 0.9375em; //14
        bottom: ${(props) => props.mBtnArrowBT}em;
        left: ${(props) => props.mBtnArrowLF}em;
        /* bottom: 1.2875em;
        left: 1.2875em; //27 */
    }
`;

const MonthContent = styled.div<{ contentWidth: number }>`
    cursor: pointer;
    position: relative;
    background-color: #eae8e4;
    width: ${(props) => props.contentWidth}em;
    /* width: 32.6875em; */
    height: 12.8125em;
    border-radius: 1.125em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        background-color: none;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        width: 21.0625em;
        height: 8.3125em;
        margin-bottom: 2.125em;
    }
`;

const DrinkImg = styled.img<{ imgWidth: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${(props) => props.imgWidth}em;
    /* width: 32.6875em; */
    height: 12.8125em;

    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 21.0625em;
        height: 8.3125em;
    }
`;
