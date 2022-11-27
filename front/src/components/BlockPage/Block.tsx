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
                <AnimationArrowImg id={`hover-icon-${contentNumber}`}>
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

const AnimationBtnImg = styled.div`
    position: absolute;
    transition: 0.3s;
    z-index: 100;
    bottom: 1.8875em;
    left: 1.8875em; //27

    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 1.4375em;
    width: 1.4375em;
    > svg {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 0.9375em; //15
        height: 0.9375em; //14

        bottom: 1.2875em;
        left: 1.2875em; //27
    }
`;

const AnimationArrowImg = styled.div`
    position: absolute;
    transition: 0.3s;
    z-index: 101;
    bottom: 1.8875em;
    left: 1.8875em; //27
    height: 1.4375em;
    width: 1.4375em;
    transform: scale(2);
    opacity: 0;

    > svg {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 0.9375em; //15
        height: 0.9375em; //14

        bottom: 1.2875em;
        left: 1.2875em; //27
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
