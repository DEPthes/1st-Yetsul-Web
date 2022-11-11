import React from 'react';
import CarouselTemplate from './CarouselTemplate';

export const placeArr = [
    {
        id: 0,
        img: <></>,
        name: '개강파티',
        des: 'party',
    },
    {
        id: 1,
        img: <></>,
        name: '축제',
        des: 'festival',
    },
    {
        id: 2,
        img: <></>,
        name: '체육대회',
        des: 'sports',
    },
    {
        id: 3,
        img: <></>,
        name: 'MT',
        des: 'mt',
    },
    {
        id: 4,
        img: <></>,
        name: '시험기간',
        des: 'exam',
    },
    {
        id: 5,
        img: <></>,
        name: '과제지옥',
        des: 'homework',
    },
    {
        id: 6,
        img: <></>,
        name: '미팅',
        des: 'meeting',
    },
    {
        id: 7,
        img: <></>,
        name: '여행',
        des: 'travel',
    },
    {
        id: 8,
        img: <></>,
        name: '한강피크닉',
        des: 'picnic',
    },
    {
        id: 9,
        img: <></>,
        name: '종강',
        des: 'endCourse',
    },
];

const PlaceCarousel: React.FC = () => {
    return (
        <div>
            <CarouselTemplate dataArr={placeArr} type="situation" ref={null} />
        </div>
    );
};

export default PlaceCarousel;
