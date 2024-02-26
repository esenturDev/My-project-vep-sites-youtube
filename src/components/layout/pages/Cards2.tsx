import { useEffect, useState } from "react";
import scss from "./Cards2.module.scss";
import { useParams } from "react-router";

const Cards2 = () => {
	const { id } = useParams();
	const [arrayBek, setArrayBek] = useState([]);
	const url = `https://api.elchocrud.pro/api/v1/3453425405fa3e58ed0e62434b5e3068/YouTube/ResultsIsBekents/${id}`;
	const getBekentsResultsParams = async () => {
		try {
			const response = (await axios.get(url)).data;
			setArrayBek([response]);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getBekentsResultsParams();
	}, []);
	return (
		<div>
			<div>
				<div>
					{arrayBek.map((item) => (
						<div key={item._id}>
							<iframe src={item.iframe}></iframe>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cards2;
