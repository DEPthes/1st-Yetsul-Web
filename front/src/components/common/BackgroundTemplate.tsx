import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config';

type BackgroudChidType = {
    children: React.ReactNode;
};

const BackgroundTemplate: React.FC<BackgroudChidType> = ({ children }) => {
    const temp = useSelector((state: RootState) => {
        return state.updateBackgroundGradient.color1;
    });
    const temp2 = useSelector((state: RootState) => {
        return state.updateBackgroundGradient.color2;
    });
    return (
        <Background color1={temp} color2={temp2}>
            <div id="line" />
            {children}
        </Background>
    );
};

export default BackgroundTemplate;

type colorType = {
    color1: string;
    color2: string;
};

const Background = styled.div<colorType>`
    width: 100%;
    height: 100%;
    background: radial-gradient(
        var(--first-position) var(--second-position) at var(--third-position)
            var(--fourth-position),
        var(--first-color) 0%,
        var(--second-color) 100%
    );
    --first-position: 107.4%;
    --second-position: 339.42%;
    --third-position: -7.4%;
    --fourth-position: -7.13%;
    --first-color: ${(props) => props.color1};
    --second-color: ${(props) => props.color2};
    transition: --first-color 0.3s, --second-color 0.3s;
    #line:nth-of-type(1) {
        border-bottom: 1px solid #bbb6a8;
        width: calc(100% - 266px);
        margin-top: 147px;
        right: 0;
        height: 1px;
        position: absolute;
        display: block;
        z-index: 999;
    }
`;
