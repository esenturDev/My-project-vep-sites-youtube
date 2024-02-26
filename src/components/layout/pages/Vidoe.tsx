import { useParams } from "react-router";
import scss from "./Vidoe.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Vidoe = () => {
	const { sum } = useParams();
	const [arrayBek, setArrayBek] = useState([]);
	const url = `https://api.elchocrud.pro/api/v1/3453425405fa3e58ed0e62434b5e3068/YouTube/${sum}`;
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
		<div className={scss.Vidoe}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						{arrayBek.map((item) => (
							<div className={scss.irrameDidoes} key={item._id}>
								<iframe className={scss.iframe} src={item.iframe}></iframe>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vidoe;
