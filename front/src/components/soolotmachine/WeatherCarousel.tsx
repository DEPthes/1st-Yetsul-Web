import React from 'react';
import styled from 'styled-components';
import CarouselTemplate from './CarouselTemplate';

export const weatherArr = [
    {
        id: 0,
        img: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.65 155.65">
                <g id="Object">
                    <circle
                        className="cls-1"
                        cx="468.83"
                        cy="373.35"
                        r="30.67"
                        transform="translate(-508.58 -45.97) rotate(-26.61)"
                    />
                    <path
                        className="cls-1"
                        d="M468.83,331h0a3.67,3.67,0,0,1-3.68-3.67V301.2a3.67,3.67,0,0,1,3.68-3.67h0a3.67,3.67,0,0,1,3.67,3.67v26.16A3.67,3.67,0,0,1,468.83,331Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M468.83,449.17h0a3.67,3.67,0,0,1-3.68-3.67V419.34a3.67,3.67,0,0,1,3.68-3.67h0a3.67,3.67,0,0,1,3.67,3.67V445.5A3.67,3.67,0,0,1,468.83,449.17Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M498.75,343.43h0a3.67,3.67,0,0,1,0-5.2l18.49-18.5a3.69,3.69,0,0,1,5.2,0h0a3.67,3.67,0,0,1,0,5.2L504,343.43A3.69,3.69,0,0,1,498.75,343.43Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M415.21,427h0a3.69,3.69,0,0,1,0-5.2l18.5-18.5a3.68,3.68,0,0,1,5.19,0h0a3.67,3.67,0,0,1,0,5.2L420.41,427A3.69,3.69,0,0,1,415.21,427Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M511.14,373.35h0a3.68,3.68,0,0,1,3.68-3.68H541a3.68,3.68,0,0,1,3.68,3.68h0A3.68,3.68,0,0,1,541,377H514.82A3.68,3.68,0,0,1,511.14,373.35Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M393,373.35h0a3.68,3.68,0,0,1,3.68-3.68h26.15a3.68,3.68,0,0,1,3.68,3.68h0a3.68,3.68,0,0,1-3.68,3.68H396.68A3.68,3.68,0,0,1,393,373.35Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M498.75,403.27h0a3.69,3.69,0,0,1,5.2,0l18.49,18.5a3.67,3.67,0,0,1,0,5.2h0a3.69,3.69,0,0,1-5.2,0l-18.49-18.5A3.67,3.67,0,0,1,498.75,403.27Z"
                        transform="translate(-391 -295.53)"
                    />
                    <path
                        className="cls-1"
                        d="M415.21,319.73h0a3.69,3.69,0,0,1,5.2,0l18.49,18.5a3.67,3.67,0,0,1,0,5.2h0a3.68,3.68,0,0,1-5.19,0l-18.5-18.5A3.69,3.69,0,0,1,415.21,319.73Z"
                        transform="translate(-391 -295.53)"
                    />
                </g>
            </svg>
        ),
        name: '맑음',
        des: 'clean',
    },
    {
        id: 1,
        img: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.14 188.83">
                <g id="Object">
                    <path
                        className="cls-1"
                        d="M840,684.85c-.09,0-.16,0-.25,0a29.31,29.31,0,0,0-42.51-36.47,40.82,40.82,0,0,0-78.59,15.51,41.65,41.65,0,0,0,.34,5l-.34,0a27.38,27.38,0,1,0,0,54.75H840a19.42,19.42,0,0,0,0-38.83Z"
                        transform="translate(-689.25 -621.09)"
                    />
                    <polygon
                        className="cls-1"
                        points="76.91 114.32 66.4 146.33 80.89 146.33 71.5 178.82 105.74 132.95 88.06 132.95 94.75 114.32 76.91 114.32"
                    />
                </g>
            </svg>
        ),
        name: '천둥번개',
        des: 'thunderstorm',
    },
    {
        id: 3,
        img: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.14 160.24">
                <g id="Object">
                    <path
                        className="cls-1"
                        d="M561.39,684.85l-.24,0a29.32,29.32,0,0,0-42.52-36.47A40.82,40.82,0,0,0,440,663.92a41.65,41.65,0,0,0,.34,5l-.34,0a27.38,27.38,0,0,0,0,54.75H561.39a19.42,19.42,0,0,0,0-38.83Z"
                        transform="translate(-410.67 -621.09)"
                    />
                    <path
                        className="cls-1"
                        d="M466.47,771.52a13.79,13.79,0,1,1-24.85-11.95c3.3-6.86,24.63-19.41,24.63-19.41S469.77,764.66,466.47,771.52Z"
                        transform="translate(-410.67 -621.09)"
                    />
                    <path
                        className="cls-1"
                        d="M500.75,771.52a13.79,13.79,0,0,1-24.85-11.95c3.3-6.86,24.62-19.41,24.62-19.41S504,764.66,500.75,771.52Z"
                        transform="translate(-410.67 -621.09)"
                    />
                    <path
                        className="cls-1"
                        d="M535.5,771.52a13.78,13.78,0,1,1-24.84-11.95c3.3-6.86,24.62-19.41,24.62-19.41S538.8,764.66,535.5,771.52Z"
                        transform="translate(-410.67 -621.09)"
                    />
                </g>
            </svg>
        ),
        name: '비',
        des: 'rain',
    },
    {
        id: 4,
        img: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.66 129.69">
                <g id="Object">
                    <path
                        className="cls-1"
                        d="M157.64,755.92a13.78,13.78,0,0,0,24.85,11.94c3.3-6.86-.22-31.36-.22-31.36S160.94,749.06,157.64,755.92Z"
                        transform="translate(-154.28 -647.99)"
                    />
                    <path
                        className="cls-1"
                        d="M194.42,755.92a13.78,13.78,0,0,0,24.84,11.94c3.3-6.86-.22-31.36-.22-31.36S197.72,749.06,194.42,755.92Z"
                        transform="translate(-154.28 -647.99)"
                    />
                    <path
                        className="cls-1"
                        d="M210.11,723.45c3.3-6.86-.22-31.36-.22-31.36s-21.33,12.56-24.63,19.42a13.78,13.78,0,0,0,24.85,11.94Z"
                        transform="translate(-154.28 -647.99)"
                    />
                    <path
                        className="cls-1"
                        d="M231.74,729.9a13.79,13.79,0,0,0,18.4-6.45c3.3-6.86-.22-31.36-.22-31.36s-21.33,12.56-24.63,19.42A13.78,13.78,0,0,0,231.74,729.9Z"
                        transform="translate(-154.28 -647.99)"
                    />
                    <path
                        className="cls-1"
                        d="M244,682.59c3.3-6.87-.22-31.36-.22-31.36s-21.33,12.55-24.62,19.41a13.78,13.78,0,1,0,24.84,12Z"
                        transform="translate(-154.28 -647.99)"
                    />
                    <path
                        className="cls-1"
                        d="M253.3,736.5S232,749.06,228.68,755.92a13.78,13.78,0,0,0,24.84,11.94C256.82,761,253.3,736.5,253.3,736.5Z"
                        transform="translate(-154.28 -647.99)"
                    />
                </g>
            </svg>
        ),
        name: '소나기',
        des: 'shower rain',
    },
    {
        id: 5,
        img: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.17 145.53">
                <g id="Object">
                    <path
                        className="cls-1"
                        d="M1103.87,683.16l-.19,0a22.87,22.87,0,0,0-33.17-28.45,31.85,31.85,0,0,0-61.31,12.1,33.8,33.8,0,0,0,.26,3.92h-.26a21.36,21.36,0,1,0,0,42.71h94.67a15.15,15.15,0,0,0,0-30.29Z"
                        transform="translate(-985.84 -632.98)"
                    />
                    <circle className="cls-1" cx="38.29" cy="101.3" r="4.68" />
                    <circle className="cls-1" cx="67.59" cy="101.3" r="4.68" />
                    <circle className="cls-1" cx="67.59" cy="138.86" r="4.68" />
                    <circle className="cls-1" cx="52" cy="119.69" r="4.68" />
                    <path
                        className="cls-1"
                        d="M1074,752.67a4.68,4.68,0,1,1-4.68-4.68A4.67,4.67,0,0,1,1074,752.67Z"
                        transform="translate(-985.84 -632.98)"
                    />
                    <circle className="cls-1" cx="96.88" cy="101.3" r="4.68" />
                </g>
            </svg>
        ),
        name: '눈',
        des: 'snow',
    },
];

const WeatherCarousel: React.FC = () => {
    return (
        <Wrap>
            <CarouselTemplate dataArr={weatherArr} type="weather" ref={null} />
        </Wrap>
    );
};

export default WeatherCarousel;

const Wrap = styled.div`
    .cls-1 {
        fill: none;
        stroke: #a9a09c;
        stroke-miterlimit: 10;
        stroke-width: 4px;
    }
    .cls-2 {
        fill: none;
    }
`;
