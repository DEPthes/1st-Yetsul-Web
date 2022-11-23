import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const MonthBlock: React.FC<{
    contentName: string;
    img: string;
    contentNumber: number;
}> = ({ contentName, img, contentNumber }) => {
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
            <h1>{contentName}</h1>
            <MonthContent onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
                <DrinkImg src={img} alt="9Drink" />
                <AnimationBtnImg id={`hover-button-${contentNumber}`}>
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
                <AnimationBtnImg id={`hover-icon-${contentNumber}`}>
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
                </AnimationBtnImg>
            </MonthContent>
        </div>
    );
};

export default MonthBlock;

const AnimationBtnImg = styled.div`
    position: absolute;
    transition: 0.3s;
    z-index: 100;

    bottom: 1.6875em;
    left: 1.6875em; //27
    @media (max-width: 767px) {
        position: relative;
        width: 0.9375em; //15
        height: 0.875em; //14
        left: -8.75em; // -149
        top: 2.5em; // 40
    }
`;

const MonthContent = styled.div`
    cursor: pointer;
    position: relative;
    background-color: #eae8e4;
    width: 32.6875em;
    height: 12.8125em;
    border-radius: 1.125em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        background-color: none;

        img {
            width: 100%;
            height: 100%;
        }
        width: 21.0625em;
        height: 8.3125em;
        margin-bottom: 2.125em;
    }
    > div:first-of-type {
        transform: scale(1);
        height: 1.4375em;
        width: 1.4375em;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 767px) {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            left: -7.4375em; // -119
            top: 2.5em; // 40
        }
    }
    > div:nth-of-type(2) {
        opacity: 0;
        height: 3em;
        width: 3em;

        position: absolute;
        bottom: 16.53px;
        /* bottom: 0.9375em; //15 */
        left: 8.53px; //15
        @media (max-width: 767px) {
            position: relative;
            left: -8.87em; // -145
            top: 3.2625em; // 49
        }
    }
`;

const DrinkImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 32.6875em;
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
