import { debounce } from 'lodash';
import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';
import DrinkInfo from './DrinkInfo';

const drinkinformation = [
    {
        id: 41,
        img: 'images/AlcoholImg.png',
        name: '담은',
        abv: 6.5,
    },
    {
        id: 223,
        img: 'images/AlcoholImg2.png',
        name: '도원결의',
        abv: 15,
    },
    {
        id: 377,
        img: 'images/AlcoholImg3.png',
        name: '이강주',
        abv: 19,
    },
];

type drinkinfotype = {
    id: number;
    img: string;
    name: string;
    abv: number;
};

// eslint-disable-next-line react/display-name
const DrinkSwiper = forwardRef((props, ref) => {
    // 상위 컴포넌트에서 자식 컴포넌트의 함수 호출
    useImperativeHandle(ref, () => ({
        SliderHandler,
    }));

    // drink info resize 관련 함수
    const [drinkInfoWidth, setDrinkInfoWidth] = useState<number>(0);
    const handleResize = debounce(() => {
        setDrinkInfoWidth(
            document
                .getElementsByClassName('slider-wrap')[0]
                .getBoundingClientRect().width,
        );
    }, 1000);

    // 술 정보 슬라이더 관련 변수
    const carouselSlide =
        document.querySelector<HTMLElement>('.drink-info') || document.body;
    const carouselContents =
        document.querySelectorAll<HTMLElement>('.slide-item');

    const [counter, setCounter] = useState<number>(1);
    const count = useRef(0);

    if (carouselContents[3]) {
        carouselContents[3].id = 'lastClone';
    }

    // counter(index) 변화 인식해서 마지막 엘리먼트일 때 처음으로 돌아가게 하기(눈속임)
    useEffect(() => {
        if (
            carouselContents[counter] &&
            carouselContents[counter].id === 'lastClone'
        ) {
            setTimeout(() => {
                carouselSlide.style.transition = 'none';
                count.current = 0;
                setCounter(count.current);
                carouselSlide.style.transform = `translateX(${
                    -drinkInfoWidth * count.current
                }px)`;
            }, 1000);
        }
    }, [counter]);

    // drink info resize 관련 함수
    useEffect(() => {
        setDrinkInfoWidth(
            document
                .getElementsByClassName('slider-wrap')[0]
                .getBoundingClientRect().width,
        );
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 눈속임을 위해 맨 뒤에 엘리먼트 하나 추가
    const makeNewDataArray = (arr: Array<drinkinfotype>) => {
        const dataEnd = arr[0];
        const modifiedArray = [...arr, dataEnd];
        return modifiedArray;
    };

    // 술잔 버튼 클릭시 술 애니메이션
    const SliderHandler = () => {
        if (carouselContents[counter].id !== 'lastClone') {
            if (counter >= carouselContents.length) return;

            carouselSlide.style.transition = 'transform 0.8s ease-out';
            count.current += 1;
            setCounter(count.current);
            carouselSlide.style.transform = `translateX(${
                -drinkInfoWidth * count.current
            }px)`;
        }
    };

    return (
        <Slider>
            <div className="slider-wrap">
                <div className="drink-info">
                    {makeNewDataArray(drinkinformation).map((el, index) => {
                        return (
                            <div
                                className="slide-item"
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                            >
                                <DrinkInfo
                                    id={el.id}
                                    img={el.img}
                                    name={el.name}
                                    abv={el.abv}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Slider>
    );
});

export default DrinkSwiper;

const Slider = styled.div`
    @media (max-width: 767px) {
        width: 100%;
        .slider-wrap {
            margin-top: 0 !important;
            height: 15.4375em !important;
            .drink-info {
            }
        }
    }
    width: calc(100% - 18.75em);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .slider-wrap {
        width: 100%;
        height: 44.8176875em;
        margin-top: 10.125em;
        overflow: hidden;
        .drink-info {
            width: 400%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .slide-item {
                width: 100%;
                height: auto;
            }
        }
    }
`;
