import React from 'react';
import styled from '@emotion/styled';
import imgTest from './img/ham.jpg';
import { ReactComponent as Star } from './img/star-solid.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50% auto;

    width: 31.25rem;
    height: 48.75rem;
    padding: 7rem 2.5rem;
    background-color: rgba(0, 0, 0, 0.1);

    p {
        font-size: 1.125rem;
        margin-bottom: 2rem;
    }
`;

const AlcoholCharacter = styled.img`
    margin-top: 3rem;
    width: 16.25rem;
    object-fit: cover;
    border-radius: 50%;
`;

const AlcoholRecommends = styled.div`
    width: 36rem;
    height: 37rem;
    display: flex;
    justify-content: center;
`;

const AlcoholRecommend = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

function Alcoholresult() {
    return (
        <Container>
            <div>
                <AlcoholCharacter src={imgTest} alt="ham" />
            </div>

            <h1>별 헤는 밤에 갇힌 김홍도</h1>
            <p>
                담백한 당신은 어지럽고 신비한 세계에 갇혀버렸습니다. 깔끔하고
                담백한 맛을 좋아하며 새로운 시도를 해오는 술을 좋아하네요!
            </p>

            <AlcoholRecommends>
                <AlcoholRecommend>
                    <div>
                        <img src={imgTest} alt="ham" />
                        <h2>햄뿡이술</h2>
                    </div>
                    <div>
                        <div>
                            <Star fill=" #ffcd00" />
                            <Star fill=" #ffcd00" />
                            <Star fill=" rgba(0,0,0,0.2)" />
                            <Star fill=" rgba(0,0,0,0.2)" />
                            <Star fill=" rgba(0,0,0,0.2)" />
                        </div>
                    </div>
                </AlcoholRecommend>
            </AlcoholRecommends>
        </Container>
    );
}

export default Alcoholresult;
