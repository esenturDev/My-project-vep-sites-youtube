import { Route, Routes, useLocation } from "react-router";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Home from "./pages/Home";
import { Erroe } from "./pages/Erroe";
import IdResult from "./pages/IdResult";
import { SetStateAction, useState } from "react";
import { ResultsIsBekents } from "./pages/ResultsIsBekents";
import Cards2 from "./pages/Cards2";
import Vidoe from "./pages/Vidoe";
import Login from "./pages/Login";
import Registr from "./pages/Registr";
import RegistrHome from "../RegistrHome/RegistrHome";

export const Layout = () => {
	const { pathname } = useLocation();
	const [styleResults, setStyleResult] = useState<string | void>(
		`${scss.layout}`
	);
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<Registr />} />
			</Routes>
		);
	} else if (pathname === "/") {
		return (
			<Routes>
				<Route path="/" element={<RegistrHome />} />
			</Routes>
		);
	}
	// const  {pathname} =  useLocation();
	// if(pathname === '/:id') {
	//   return (
	//     <Routes>
	//       <Route path="/:id" element={<IdResult/>}/>
	//     </Routes>
	//   )
	// }
	console.log(styleResults);

	// eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-explicit-any
	const [isResult, setIsResult] = useState<any>([]);
	const resultStule2 = () => {
		setStyleResult(`${scss.layout2}`);
	};
	function resultStyle1() {
		setStyleResult(`${scss.layout}`);
	}

	const updateIsResult = (data: SetStateAction<never[]>) => {
		setIsResult(data);
	};

	return (
		<div className={`${styleResults}`}>
			<Header
				updateIsResult={updateIsResult}
				resultStyle1={resultStyle1}
				resultStule2={resultStule2}
			/>
			<main>
				<Routes>
					<Route path="/home" element={<Home />} /> // /
					<Route
						path="/ResultsIsBekents"
						element={<ResultsIsBekents isResult={isResult} />}
					/>
					<Route path="/ResultsIsBekents/:id" element={<Cards2 />} />
					<Route path="/home/:id/:sum" element={<Vidoe />} />
					<Route path="*" element={<Erroe />} />
					<Route path="/home/:id" element={<IdResult />} /> // /:id
				</Routes>
			</main>
		</div>
	);
};
