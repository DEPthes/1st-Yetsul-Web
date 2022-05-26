import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Alcoholresult from "./components/alcoholtest/alcoholresult";


import Login from "./components/login/Login";

import Home from "./Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route exact path="/Alcoholresult" element={<Alcoholresult />} />

				<Route exact path="/test" element={<Login />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
