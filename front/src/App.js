import React from "react";
import "./App.css";
import Header from "./components/Header"

function App() {
	return (
		<div className="main">
			<Header />
			<main>
				<h1>프론트 세팅 완료</h1>
				<p>프로젝트 같이 잘 해봐요!!!</p>
			</main>
			<footer>DEPth, 2022</footer>
		</div>
	);
}

export default App;
