import React, { useRef } from 'react';
import styled from 'styled-components';

type CarouselTemplateType = {
    dataArr: Array<DataType>;
};

type DataType = {
    id: number;
    img: React.ReactNode;
    name: string;
};

const CarouselTemplate: React.FC<CarouselTemplateType> = ({ dataArr }) => {
    const data = dataArr;
    const carouselContents =
        document.querySelectorAll<HTMLElement>('.carousel-el-svg');

    const count = useRef(0);
    const carouselSlideRef = useRef<HTMLDivElement>(null);

    const SliderUp = () => {
        carouselSlideRef.current.style.transition = 'transform 0.8s ease-out';
        count.current -= 1;
        carouselSlideRef.current.style.transform = `translateY(${
            -276.91 * count.current
        }px)`;
        console.log(count.current);

        if (
            carouselContents[count.current].style.width !== '83px' &&
            carouselContents
        ) {
            carouselContents[count.current].style.width = '83px';
        } else {
            carouselContents[count.current + 1].style.width = '57px';
        }
    };

    const SliderDown = () => {
        carouselSlideRef.current.style.transition = 'transform 0.8s ease-out';
        count.current += 1;
        carouselSlideRef.current.style.transform = `translateY(${
            -276.91 * count.current
        }px)`;
        console.log(count.current);
        if (
            carouselContents[count.current].style.width !== '83px' &&
            carouselContents
        ) {
            carouselContents[count.current].style.width = '83px';
        } else {
            carouselContents[count.current - 1].style.width = '57px';
        }
    };

    return (
        <Slider>
            <svg
                onClick={SliderUp}
                width="61"
                height="18"
                viewBox="0 0 61 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.238281 16.8579L31.4243 1.43499L60.1155 16.8579"
                    stroke="#8B7E6A"
                />
            </svg>

            <SliderWrap>
                <SliderInner id="slide-info" ref={carouselSlideRef}>
                    {data.map((el) => {
                        return (
                            <div key={el.id} className="carousel-el">
                                {el.img}
                            </div>
                        );
                    })}
                </SliderInner>
            </SliderWrap>

            <svg
                onClick={SliderDown}
                width="64"
                height="18"
                viewBox="0 0 64 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.17969 1.21582L33.4125 16.6876L63.0668 1.21582"
                    stroke="#8B7E6A"
                />
            </svg>
        </Slider>
    );
};

export default CarouselTemplate;

const Slider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .carousel-el {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
        svg {
            width: 57px;
        }
    }
    #temp {
        svg {
            width: 83px;
        }
    }
`;

const SliderInner = styled.div`
    width: 100%;
    height: 100%;
`;

const SliderWrap = styled.div`
    width: 100%;
    height: 65%;
    overflow: hidden;
`;
