import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const DrinkTicketBox: React.FC = () => {
    const [num, setNum] = useState(1);
    const [idNum, setIdNum] = useState(1);
    const [questions, setQuestions] = useState<DrinkTicketBoxType[]>([]);
    const [result, setResult] = useState<number[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://depth-server.herokuapp.com/ticketbox/test`)
            .then((res) => setQuestions(res.data))
            .catch((err) => console.log(err));
    }, []);

    const SelectionClick = (i: number) => {
        result.push(i);
        setResult(result);
        if (num === 1) {
            if (i === 1) {
                setNum(2);
                setIdNum(2);
            } else if (i === 2) {
                setNum(2);
                setIdNum(3);
            }
        } else if (num === 2) {
            setNum(3);
            setIdNum(4);
        } else if (num === 3) {
            setNum(4);
            setIdNum(5);
        } else if (num === 4) {
            setNum(5);
            setIdNum(6);
        } else if (num === 5) {
            setNum(6);
            setIdNum(7);
        } else if (num === 6) {
            setNum(7);
            setIdNum(8);
        } else if (num === 7) {
            navigate(`/ticketbox/result/${result}`, { state: result });
        }
    };

    const PrevClick = () => {
        if (num === 2) {
            result.pop();
            setNum(1);
            setIdNum(1);
        } else if (num === 3) {
            if (result[result.length - 1] === 1) {
                result.pop();
                setNum(2);
                setIdNum(2);
            } else if (result[result.length - 1] === 2) {
                result.pop();
                setNum(2);
                setIdNum(3);
            }
        } else if (num === 4) {
            result.pop();
            setNum(3);
            setIdNum(4);
        } else if (num === 5) {
            result.pop();
            setNum(4);
            setIdNum(5);
        } else if (num === 6) {
            result.pop();
            setNum(5);
            setIdNum(6);
        } else if (num === 7) {
            result.pop();
            setNum(6);
            setIdNum(7);
        }
    };

    return (
        <BackgroundTemplate heightValue="100%">
            <Center>
                {questions.map((data) => {
                    return (
                        <div key={data.questionID}>
                            {data.questionID === idNum ? (
                                <div>
                                    <PrevButton
                                        type="button"
                                        margin={
                                            data.selection3 === null
                                                ? 23.3333
                                                : 21.2037
                                        }
                                        onClick={() => PrevClick()}
                                    >
                                        <PrevImg
                                            src="/images/Prev.png"
                                            alt="prev"
                                        />
                                    </PrevButton>
                                    <Question
                                        margin={
                                            data.selection3 === null
                                                ? 2.3148
                                                : 1.8519
                                        }
                                    >
                                        <QuestionText
                                            width={(() => {
                                                if (data.questionID === 5) {
                                                    return 42;
                                                }
                                                if (data.questionID === 6) {
                                                    return 44;
                                                }
                                                return 59.7396;
                                            })()}
                                        >
                                            Q{num}. {data.question}
                                        </QuestionText>
                                    </Question>
                                    <Selection
                                        type="button"
                                        margin={
                                            data.selection3 === null
                                                ? 7.963
                                                : 8.1481
                                        }
                                        onClick={() => SelectionClick(1)}
                                    >
                                        A1. {data.selection1}
                                    </Selection>
                                    <Selection
                                        type="button"
                                        margin={
                                            data.selection3 === null
                                                ? 7.963
                                                : 8.1481
                                        }
                                        onClick={() => SelectionClick(2)}
                                    >
                                        A2. {data.selection2}
                                    </Selection>
                                    <Selection3
                                        type="button"
                                        display={
                                            data.selection3 === null
                                                ? 'none'
                                                : 'flex'
                                        }
                                        onClick={() => SelectionClick(3)}
                                    >
                                        A3. {data.selection3}
                                    </Selection3>
                                    <Progress>
                                        <GlassImg
                                            src="/images/Glass.png"
                                            alt="glass"
                                            margin={
                                                data.selection3 === null
                                                    ? 5.5556
                                                    : 3.5185
                                            }
                                        />
                                        <ProgressBar
                                            margin={
                                                data.selection3 === null
                                                    ? 7.6852
                                                    : 5.5556
                                            }
                                        >
                                            <ProgressBarFill
                                                width={num * 7.8906}
                                            />
                                        </ProgressBar>
                                    </Progress>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </Center>
        </BackgroundTemplate>
    );
};

export default DrinkTicketBox;

const Center = styled.div`
    text-align: center;
`;

const PrevButton = styled.button<{ margin: number }>`
    margin-top: ${(props) => props.margin}vh;
    margin-right: 58.3333vw;
    width: 3.0208vw;
    height: 4.5vh;

    background-color: transparent;
    border: none;

    :hover {
        cursor: pointer;
    }
`;

const PrevImg = styled.img`
    width: 3.0208vw;
    height: 4.5vh;
`;

const Question = styled.div<{ margin: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.margin}vh;
    width: 59.7396vw;
    height: 15.6481vh;

    background: #fbfbfa;
    border: 1px solid #675b4f;
    border-radius: 18px;
`;

const QuestionText = styled.div<{ width: number }>`
    width: ${(props) => props.width}vw;
    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    color: #675b4f;
`;

const Selection = styled.button<{ margin: number }>`
    margin-top: ${(props) => props.margin}vh;
    margin-right: 1.4021vw;
    width: 28.924vw;
    height: 13.0556vh;

    border: 1px solid #675b4f;
    border-radius: 18px;
    background-color: transparent;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 0.01em;
    color: #675b4f;
    word-break: keep-all;

    :hover {
        cursor: pointer;
        background: #675b4f;
        color: #ffffff;
        border: 3px solid #675b4f;
    }
`;

const Selection3 = styled.button<{ display: string }>`
    display: ${(props) => props.display};
    position: relative;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 2.7778vh;
    width: 28.924vw;
    height: 13.0556vh;
    border: 1px solid #675b4f;
    border-radius: 18px;
    background-color: transparent;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 0.01em;
    color: #675b4f;
    word-break: keep-all;

    :hover {
        cursor: pointer;
        background: #675b4f;
        color: #ffffff;
        border: 3px solid #675b4f;
    }
`;

const Progress = styled.div`
    position: absolute;
`;

const ProgressBar = styled.div<{ margin: number }>`
    margin-top: ${(props) => props.margin}vh;
    width: 59.7396vw;
    height: 3.4259vh;

    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 18px;
`;

const ProgressBarFill = styled.div<{ width: number }>`
    margin-top: 0.9259vh;
    margin-left: 0.9896vw;
    width: ${(props) => props.width}vw;
    height: 1.3889vh;

    background: #675b4f;
    border: 1px solid #675b4f;
    border-radius: 18px;
`;

const GlassImg = styled.img<{ margin: number }>`
    position: absolute;
    width: 4.1167vw;
    height: 8.4074vh;
    margin-top: ${(props) => props.margin}vh;
    margin-left: 26.0417vw;
`;

type DrinkTicketBoxType = {
    questionID: number;
    question: string;
    selection1: string;
    selection2: string;
    selection3: string;
};
