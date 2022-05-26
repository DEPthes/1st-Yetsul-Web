import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "./App.css";

const Sangwon = styled.header`
	width: 100%;
	height: 100px;
	background-color: #60666b;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 35px;
	font-weight: 700;
	color: white;
`;

const H1text = styled.h1`
	color: red;
`;
function Home() {
	return (
		<div className="main">
			<Sangwon>여기는 헤더</Sangwon>
			<main>
				<H1text>프론트 세팅 완료</H1text>
				<p>프로젝트 같이 잘 해봐요!!!</p>
			</main>
			<Link to="/test">DEPth, 2022</Link>
		</div>
	);
}

export default Home;
