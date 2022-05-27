import React from "react";
import styled from "@emotion/styled";
import imgInstagram from "./img/imgInstagram.jpeg";
import imgBtnL from "./img/imgBtnL.jpg";
import imgBtnR from "./img/imgBtnR.jpg";

const Header = styled.header`
	border: 1px solid gray;
	padding: 15px;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr;
	align-items: center;
`;

const Logo = styled.p`
	font-size: xx-large;
	font-weight: 600;
	display: inline-block;
	text-align: center;
	margin-left: 120px;
`;

const Login = styled.p`
	font-size: medium;
	font-weight: 400;
	display: inline-block;
`;

const LoginImg = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 10px;
`;

const Titles = styled.div`
	margin-top: 60px;
	text-align: center;
`;

const BigTitle = styled.p`
	font-size: xx-large;
	font-weight: 500;
`;

const SmallTitle = styled.p`
	font-size: large;
	font-weight: 500;
	margin-top: 10px;
`;

const Ask = styled.div`
	text-align: center;
`;

const Questions = styled.p`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	margin-top: 60px;
	width: 650px;
	height: 70px;
	border-radius: 40px;
	background-color: rgb(162, 162, 162);
	font-size: x-large;
	font-weight: 500;
	line-height: 70px;
`;

const ButtonLeft = styled.button`
	border: none;
	margin-top: 50px;
	margin-right: 30px;
	background-color: white;
`;

const ButtonRight = styled.button`
	border: none;
	background-color: white;
`;

const ButtonImg = styled.img`
	width: 250px;
	height: 250px;
`;

const ProgressBar = styled.div`
	text-align: center;
`;

const Progress = styled.progress`
	width: 540px;
	height: 12px;
	margin-top: 30px;
	appearance: none;

	::-webkit-progress-bar {
		background-color: rgb(222, 222, 222);
	}

	::-webkit-progress-value {
		background-color: rgb(93, 93, 93);
	}
`;

const Move = styled.div`
	text-align: center;
	margin-top: 10px;
`;

const Prev = styled.button`
	width: 50px;
	height: 30px;
	margin-right: 460px;
	display: inline-block;
	border: none;
	background-color: white;
	font-size: medium;
	font-weight: 500;
`;

const Next = styled.button`
	width: 50px;
	height: 30px;
	display: inline-block;
	border: none;
	background-color: white;
	font-size: medium;
	font-weight: 500;
`;

const ProgressBarNum = styled.p`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	width: 90px;
	height: 28px;
	background-color: white;
	border: 1px solid gray;
	border-radius: 30px;
	margin-top: 20px;
	line-height: 28px;
`;

function Alcoholask() {
	return (
		<div>
			<Header>
				<Logo>로고</Logo>
				<LoginImg src={imgInstagram} />
				<Login>&nbsp;MY | LOGIN</Login>
			</Header>
			<Titles>
				<BigTitle>옛술의 전당 매표소</BigTitle>
				<SmallTitle>전통주 취향 테스트</SmallTitle>
			</Titles>
			<Ask>
				<Questions>질문</Questions>
				<ButtonLeft>
					<ButtonImg src={imgBtnL} />
				</ButtonLeft>
				<ButtonRight>
					<ButtonImg src={imgBtnR} />
				</ButtonRight>
				<ProgressBar>
					<Progress value="20" max="100" id="progress" />
				</ProgressBar>
				<Move>
					<Prev>이전</Prev>
					<Next>다음</Next>
				</Move>
				<ProgressBarNum>1/8</ProgressBarNum>
			</Ask>
		</div>
	);
}

export default Alcoholask;
