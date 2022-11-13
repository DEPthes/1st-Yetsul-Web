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
    bottom: 27px;
    left: 27px;
    @media (max-width: 767px) {
        position: relative;
        width: 15px;
        height: 14px;
        left: -140px;
        top: 40px;
    }
`;

const MonthContent = styled.div`
    cursor: pointer;
    position: relative;
    background-color: #eae8e4;
    width: 523px;
    height: 205px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    @media (max-width: 767px) {
        width: 337px;
        height: 133px;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 34px;
    }
    > div:first-of-type {
        transform: scale(1);
        height: 23px;
        width: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 767px) {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            left: -119px;
            top: 40px;
        }
    }
    > div:nth-of-type(2) {
        opacity: 0;
        height: 48px;
        width: 48px;
        position: absolute;
        bottom: 15px;
        left: 15px;
        @media (max-width: 767px) {
            position: relative;
            left: -145px;
            top: 49px;
        }
    }
`;

const DrinkImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    position: absolute;

    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 337px;
        height: 133px;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }
`;
