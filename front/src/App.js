import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./App.css";
import Alcoholask from "./components/alcoholtest/Alcoholask";

const GlobalStyles = createGlobalStyle`
    ${reset};
`;

function App() {
	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Alcoholask />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
