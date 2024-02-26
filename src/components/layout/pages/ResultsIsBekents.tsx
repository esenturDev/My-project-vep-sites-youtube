
import scss from "./ResultsIsBekents.module.scss";
import {  useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const ResultsIsBekents = ({ isResult }) => {
	const [isResults, setIsResults] = useState([isResult]);
	const url = import.meta.env.VITE_BEK_RESULT;
	const getCardsMap = async () => {
		try {
			const response = (await axios.get(url)).data;
			console.log(response);
			
			setIsResults([...isResult]);
		} catch (error) {
			console.error(error);
		}
	};

	console.log(isResult);
	useEffect(() => {
		getCardsMap();
	}, [isResult]);

	return (
		<div className={scss.resultsBekent}>
			<div className="container">
				<div className={scss.content}>
					<nav>
						<Navbar />
					</nav>
					<div className={scss.bekentsCards}>
						{isResults.map((item) => (
							<Link
								className={scss.linksDiv}
								key={item._id}
								to={`/home/${item._id}`}>
								<img src={item.img} alt={item.title} />
								<div className={scss.divoeContent}>
									<h2>{item.title}</h2>
									<p>{item.god}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
