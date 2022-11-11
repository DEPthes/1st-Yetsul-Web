import React from 'react';
import styled from 'styled-components';

const MonthBlock: React.FC<{ month: string; img: string }> = ({
    month,
    img,
}) => {
    const onMouseOver = () => {
        $(`#hover-button-${month}`).css('transform', 'scale(2)');
        $(`#hover-icon-${month}`).css('opacity', '1');
    };
    const onMouseOut = () => {
        $(`#hover-button-${month}`).css('transform', 'scale(1)');
        $(`#hover-icon-${month}`).css('opacity', '0');
    };
    return (
        <div>
            <h1>{month}월</h1>
            <MonthContent onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
                <DrinkImg src={img} alt="9Drink" />
                <AnimationBtnImg id={`hover-button-${month}`}>
                    <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="11.5" cy="11.5" r="11.5" fill="#EDEBE8" />
                    </svg>
                </AnimationBtnImg>
                <AnimationBtnImg id={`hover-icon-${month}`}>
                    <svg
                        width="48"
                        height="48"
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
    > div:first-of-type {
        transform: scale(1);
        height: 23px;
        width: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > div:nth-of-type(2) {
        opacity: 0;
        height: 48px;
        width: 48px;
        position: absolute;
        bottom: 15px;
        left: 15px;
    }
`;

const DrinkImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    position: absolute;
`;
