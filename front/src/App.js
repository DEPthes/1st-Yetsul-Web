import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Alcoholresult from "./components/alcoholtest/alcoholresult";

import Home from "./Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/test" element={<Alcoholresult />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
