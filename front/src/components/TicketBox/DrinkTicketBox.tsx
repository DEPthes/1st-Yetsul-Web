import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

type DrinkTicketBoxType = {
    questionID: number;
    question: number;
    selection1: string;
    selection2: string;
    selection3: string | null;
};

const DrinkTicketBox: React.FC = () => {
    const [num, setNum] = useState(1);
    const [questions, setQuestions] = useState<DrinkTicketBoxType>(Object);
    const [questionList, setQuestionList] = useState([]);
    const Result: number[] = [];

    useEffect(() => {
        axios
            .post(`https://depth-server.herokuapp.com/ticketbox/test`)
            .then((res) => {
                setQuestionList(res.data);
                setQuestions(questionList[0]);
            })
            .catch((err) => console.log(err));
    }, []);

    const SelectionClick = (i: number) => {
        Result.push(i);
        if (num === 1) {
            if (i === 1) {
                setNum(2);
                setQuestions(questionList[1]);
            } else if (i === 2) {
                setNum(2);
                setQuestions(questionList[2]);
            }
        } else if (num === 2) {
            setNum(num + 1);
            setQuestions(questionList[3]);
        } else if (num === 3) {
            setNum(num + 1);
            setQuestions(questionList[4]);
        } else if (num === 4) {
            setNum(num + 1);
            setQuestions(questionList[5]);
        } else if (num === 5) {
            setNum(num + 1);
            setQuestions(questionList[6]);
        } else if (num === 6) {
            setNum(num + 1);
            setQuestions(questionList[7]);
        } else if (num === 7) {
            setNum(1);
            setQuestions(questionList[0]);
        }
    };

    const PrevClick = () => {
        if (num === 2) {
            setNum(num - 1);
            setQuestions(questionList[0]);
        } else if (num === 3) {
            if (Result[Result.length - 1] === 1) {
                setNum(num - 1);
                setQuestions(questionList[1]);
            } else if (Result.pop() === 2) {
                setNum(num - 1);
                setQuestions(questionList[2]);
            }
        } else if (num === 4) {
            setNum(num - 1);
            setQuestions(questionList[3]);
        } else if (num === 5) {
            setNum(num - 1);
            setQuestions(questionList[4]);
        } else if (num === 6) {
            setNum(num - 1);
            setQuestions(questionList[5]);
        } else if (num === 7) {
            setNum(num - 1);
            setQuestions(questionList[6]);
        }
        Result.pop();
    };

    return (
        <BackgroundTemplate heightValue="100%">
            <Center>
                <PrevButton
                    type="button"
                    margin={questions.selection3 === null ? 210 : 160}
                    onClick={() => PrevClick()}
                >
                    <PrevImg src="/images/Prev.png" alt="prev" />
                </PrevButton>
                <Question>
                    Q{num}. {questions.question}
                </Question>
                <Selection type="button" onClick={() => SelectionClick(1)}>
                    A1. {questions.selection1}
                </Selection>
                <Selection type="button" onClick={() => SelectionClick(2)}>
                    A2. {questions.selection2}
                </Selection>
                <Selection3
                    type="button"
                    display={questions.selection3 === null ? 'none' : 'flex'}
                    onClick={() => SelectionClick(3)}
                >
                    A3. {questions.selection3}
                </Selection3>
                <Progress>
                    <GlassImg src="/images/Glass.png" alt="glass" />
                    <ProgressBar>
                        <ProgressBarFill />
                    </ProgressBar>
                </Progress>
            </Center>
        </BackgroundTemplate>
    );
};

export default DrinkTicketBox;

const Center = styled.div`
    text-align: center;
`;

const PrevButton = styled.button<{ margin: number }>`
    margin-top: ${(props) => props.margin}px;
    margin-right: 1120px;
    width: 58px;
    height: 43px;
    background-color: transparent;
    border: none;

    :hover {
        cursor: pointer;
    }
`;

const PrevImg = styled.img`
    width: 58px;
    height: 43px;
`;

const Question = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 1147px;
    height: 169px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

    background: #fbfbfa;
    border: 1px solid #675b4f;
    border-radius: 18px;

    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    color: #675b4f;
`;

const Selection = styled.button`
    margin-top: 70px;
    margin-right: 28px;
    width: 562px;
    height: 141px;

    border: 1px solid #675b4f;
    border-radius: 18px;
    background-color: transparent;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    letter-spacing: 0.01em;
    color: #675b4f;

    :hover {
        cursor: pointer;
        background: #675b4f;
        color: #ffffff;
        border: 3px solid #675b4f;
    }
`;

const Selection3 = styled.button<{ display: string }>`
    display: ${(props) => props.display};
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 562px;
    height: 141px;

    border: 1px solid #675b4f;
    border-radius: 18px;
    background-color: transparent;

    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    letter-spacing: 0.01em;
    color: #675b4f;

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

const ProgressBar = styled.div`
    margin-top: 60px;
    width: 1147px;
    height: 30px;

    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 18px;
`;

const ProgressBarFill = styled.div`
    margin-top: 8px;
    margin-left: 15px;
    width: 144px;
    height: 13px;

    background: #675b4f;
    border: 1px solid #675b4f;
    border-radius: 18px;
`;

const GlassImg = styled.img`
    position: absolute;
    margin-top: 35px;
    margin-left: 500px;
`;
