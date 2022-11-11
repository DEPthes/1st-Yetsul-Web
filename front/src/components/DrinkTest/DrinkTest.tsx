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
    const [resultStr, setResultStr] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/ticketbox/test`,
            )
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
            setResultStr(result.join(''));
        } else if (num === 7) {
            navigate(`/ticketbox/result/${resultStr}`);
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
                                                ? 15.75
                                                : 14.3125
                                        }
                                        onClick={() => PrevClick()}
                                    >
                                        <PrevImg
                                            src="/images/Prev.svg"
                                            alt="prev"
                                        />
                                    </PrevButton>
                                    <Question
                                        margin={
                                            data.selection3 === null
                                                ? 1.5625
                                                : 1.25
                                        }
                                    >
                                        <QuestionText
                                            width={(() => {
                                                if (data.questionID === 5) {
                                                    return 850;
                                                }
                                                if (data.questionID === 6) {
                                                    return 930;
                                                }
                                                return 1140;
                                            })()}
                                        >
                                            Q{num}. {data.question}
                                        </QuestionText>
                                    </Question>
                                    <Selection
                                        type="button"
                                        margintop={
                                            data.selection3 === null ? 4.3 : 4.4
                                        }
                                        marginleft={0}
                                        marginright={0.78125}
                                        width={28.1}
                                        padding={(() => {
                                            if (data.questionID === 2) {
                                                return 0;
                                            }
                                            return 0.5;
                                        })()}
                                        onClick={() => SelectionClick(1)}
                                    >
                                        A1. {data.selection1}
                                    </Selection>
                                    <Selection
                                        type="button"
                                        margintop={
                                            data.selection3 === null ? 4.3 : 4.4
                                        }
                                        marginleft={0.78125}
                                        marginright={0}
                                        width={28}
                                        padding={(() => {
                                            if (data.questionID === 2) {
                                                return 0;
                                            }
                                            return 0.5;
                                        })()}
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
                                            src="/images/Glass.svg"
                                            alt="glass"
                                            margin={
                                                data.selection3 === null
                                                    ? 3.8125
                                                    : 2.625
                                            }
                                        />
                                        <ProgressBar
                                            margin={
                                                data.selection3 === null
                                                    ? 5.1875
                                                    : 4
                                            }
                                        >
                                            <ProgressBarFill
                                                width={num * 8.4375}
                                                mediawidth={num * 2.3125}
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
    margin-top: ${(props) => props.margin}em;
    margin-right: 875px;
    width: 3.625em;
    height: 2.6875em;

    background-color: transparent;
    border: none;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 767px) {
        margin-top: 9.375em;
        margin-right: 22em;
        width: 2.4375em;
        height: 1.8125em;
    }
`;

const PrevImg = styled.img`
    width: 3.625em;
    height: 2.6875em;

    @media (max-width: 767px) {
        width: 2.4375em;
        height: 1.8125em;
    }
`;

const Question = styled.div<{ margin: number }>`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.margin}em;
    width: 71.6875em;
    height: 10.5625em;

    background: #fbfbfa;
    border: 1px solid #675b4f;
    border-radius: 18px;

    @media (max-width: 767px) {
        margin-top: 0.8125em;
        margin-bottom: 2.9375em;
        width: 20.9375em;
        height: 7.625em;
    }
`;

const QuestionText = styled.div<{ width: number }>`
    width: ${(props) => props.width}px;
    text-align: center;
    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: 500;
    font-size: 2.1875em;
    color: #675b4f;
    word-break: keep-all;

    @media (max-width: 767px) {
        font-size: 1.125em;
        width: 251px;
    }
`;

const Selection = styled.button<{
    margintop: number;
    marginleft: number;
    marginright: number;
    width: number;
    padding: number;
}>`
    margin-top: ${(props) => props.margintop}em;
    margin-left: ${(props) => props.marginleft}em;
    margin-right: ${(props) => props.marginright}em;
    width: ${(props) => props.width}em;
    height: 7.05em;

    border: 1px solid #675b4f;
    padding: ${(props) => props.padding}em;
    border-radius: 18px;
    background-color: transparent;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    letter-spacing: 0.01em;
    color: #675b4f;
    word-break: keep-all;

    :hover {
        cursor: pointer;
        background: #675b4f;
        color: #ffffff;
        border: 3px solid #675b4f;
    }

    @media (max-width: 767px) {
        display: block;
        margin: auto;
        margin-bottom: 0.9375em;
        width: 22.466666666666665em;
        height: 6.333333333333333em;
        font-size: 0.9375em;
    }
`;

const Selection3 = styled.button<{ display: string }>`
    display: ${(props) => props.display};
    position: relative;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.15em;
    width: 28em;
    height: 7.05em;
    border: 1px solid #675b4f;
    border-radius: 18px;
    background-color: transparent;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    letter-spacing: 0.01em;
    color: #675b4f;
    word-break: keep-all;

    :hover {
        cursor: pointer;
        background: #675b4f;
        color: #ffffff;
        border: 3px solid #675b4f;
    }

    @media (max-width: 767px) {
        margin-bottom: 0.9375em;
        width: 22.466666666666665em;
        height: 6.333333333333333em;
        font-size: 0.9375em;
    }
`;

const Progress = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const ProgressBar = styled.div<{ margin: number }>`
    margin-top: ${(props) => props.margin}em;
    width: 71.6875em;
    height: 2.3125em;

    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 18px;

    @media (max-width: 767px) {
        margin-top: 2.9375em;
        width: 21.0625em;
        height: 1.4375em;
    }
`;

const ProgressBarFill = styled.div<{ width: number; mediawidth: number }>`
    margin-top: 0.625em;
    margin-left: 1.1875em;
    width: ${(props) => props.width}em;
    height: 0.9375em;

    background: #675b4f;
    border: 1px solid #675b4f;
    border-radius: 18px;

    @media (max-width: 767px) {
        margin-top: 0.375em;
        margin-left: 0.5625em;
        width: ${(props) => props.mediawidth}em;
        height: 0.5625em;
    }
`;

const GlassImg = styled.img<{ margin: number }>`
    position: absolute;
    width: 4.94em;
    margin-top: ${(props) => props.margin}em;
    margin-left: 31.25em;

    @media (max-width: 767px) {
        margin-top: 2.1875em;
        margin-left: 7.375em;
        width: 3.2725em;
    }
`;

type DrinkTicketBoxType = {
    questionID: number;
    question: string;
    selection1: string;
    selection2: string;
    selection3: string;
};
