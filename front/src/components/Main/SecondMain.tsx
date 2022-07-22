import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config';

const SecondMain: React.FC = () => {
    const temp = useSelector((state: RootState) => {
        return state.updateBackgroundGradient.color1;
    });
    const temp2 = useSelector((state: RootState) => {
        return state.updateBackgroundGradient.color2;
    });
    return (
        <SecondMainStyle color1={temp} color2={temp2}>
            SecondMain
        </SecondMainStyle>
    );
};

export default SecondMain;

type colorType = {
    color1: string;
    color2: string;
};

const SecondMainStyle = styled.div<colorType>`
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
    --second-color: ${(props) => props.color2}
    transition: --first-color 0.3s, --second-color 0.3s;
`;
