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
        id: 0,
        img: 'https://s3-alpha-sig.figma.com/img/a2d7/f1fd/68c9f1e40c24846da055eebadf32c769?Expires=1660521600&Signature=VRcVnZB1mBo0zUqGxtJBp7TZswqDZl4dz~8jYqLSS1y~OvsV08MTVG2BLcxy01lWcaOg~6vplCkyG17kogtyB0K1xPHTdZ07mV1eGHuCPsiy0LUXjcWri9NN8V7F840PeegEQasdY0k9~1T0gJaDBjtaOU0nazxYDOgU~2A1aH4dC-IAPclavB5cZ53udcEa3EZNHU7u4IK8ySYpnvYOxMEx-e90qYXoY5jjZpbTgFXJKTbtCnjMQrrlv0waAWZJLgQ~o9m0tub4wKDzvF4UmY6lyE2wVXRmsxgZ1CFARAQt087oEIKCTHYwgdAr9sLUsBLU1s0rB2XuRulfEt2bVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        name: '이감주',
        abv: 6.5,
    },
    {
        id: 1,
        img: 'https://s3-alpha-sig.figma.com/img/7f3d/d45c/f8a8eda25c44cf3137d18ccd5098fc86?Expires=1660521600&Signature=CyWYAP7S90RZ~n6xcjzzZG0QCox7GtkdA9PMisBIvOOlsFqg6-ia~H2dDVxciraEnFtc3dRi6DuPEEEk7~qapZ-Pajjyp0Gmus3sfeDydKn~EqVqXUrlHtjjv7x9tYQxbSG6WJJe2zHfjBOHGvvcOJ7LqLcOF5KCkEM8R45Cpj-aPlSJ18zPF-LQ8IC8nS~TcEUhP6W419Ibq9y3EDFiTtv2HLvjNqiYhFM2kjf~D768fV6T-8IpXktxt-ny7VxyWnQu04Yb-D0E5vcqoD6Upxw3~bmp-Dxty9R02~wMI9SdnIdB8rAxkOscoRTN54xI6MvvKuP~rT1bQK62eq897w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        name: '도원결의',
        abv: 15,
    },
    {
        id: 2,
        img: 'https://s3-alpha-sig.figma.com/img/f5a0/b415/5d908b6a4b9c97c7e2db1d706eafc0b0?Expires=1660521600&Signature=dp~F5NuW42hbr-jo9J3cwae5VOwRIr5ij9vQEI6jh2GR~XrvOEMncuklPkhCSsOJv91NnPNuRWl2Tfdh7b4db4S08667IeIKUv~94P5k63cuPrybSa8gRTRWDI7aP9EihxMHP0by5GTtensB3tcglM4n54B884n-wcXWYQlo4M~gUdGIbTQMzeKnGDY-fzIgDrFNUgThQShfzXktldhMjg02c8dF9HbTBLXFK~Emk0SlBDkWwqmX85Ld~-spAiwIfIi7obO8RQCU76qZcLAbsaOGo3jH-QgHlGUVdokLoKzCG5NqC0g1-o0HMOXWx141oEIATfw1EvXVosk5i1zBvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        name: '이감주',
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
    width: calc(100% - 300px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .slider-wrap {
        width: 100%;
        height: 717.083px;
        margin-top: 162px;
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
