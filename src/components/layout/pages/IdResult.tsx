import { useParams } from "react-router";
import scss from "./IdResult.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/store";
import { useDispatch } from "react-redux";
import { getBekResult } from "../../../store/tools/bekResultsSlice";
import { Button } from "../../ul/button/Button";
import { Link } from "react-router-dom";
const IdResult = () => {
	const todoBek = useAppSelector((state) => state.bekentResults.data);
	const [vidoe, setVidoe] = useState(false);
	console.log(todoBek);
	const dispatch = useDispatch();
	const { id } = useParams();
	const [arrayBek, setArrayBek] = useState([]);
	const url = `https://api.elchocrud.pro/api/v1/3453425405fa3e58ed0e62434b5e3068/YouTube/${id}`;
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
		dispatch(getBekResult());
	}, []);
	const handleVidoe = () => {
		setVidoe(!vidoe);
	};
	return (
		<div className={scss.idCards}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						{arrayBek.map((item) => (
							<div className={scss.irrameDidoes} key={item._id}>
								<iframe className={scss.iframe} src={item.iframe}></iframe>
								<h3>{item.title}</h3>
								<p>{item.god}</p>
								<Button onClick={handleVidoe}>Все!</Button>
							</div>
						))}
					</div>
					{vidoe ? (
						""
					) : (
						<>
							<div className={scss.div2}>
								{todoBek.map((item) => (
									<Link to={`/home/:id/${item._id}`}  className={scss.div22} key={item._id}>
										<img src={item.img} alt={item.title} />
										<div className={scss.cardsVidoeContents}>
											<h2>{item.title}</h2>
											<p>{item.god}</p>
										</div>
									</Link>
								))}
							</div>
						</>
					)}

					{/* {vidoe ? (
						""
					) : (
						// <div className={vidoe ? `${scss.div2}` : `${scss.div2Nome}`}>
						// 	{todoBek.map((item) => (
						// 		<div className={scss.div22} key={item._id}>
						// 			<img src={item.img} alt={item.title} />
						// 			<div className={scss.cardsVidoeContents}>
						// 				<h2>{item.title}</h2>
						// 				<p>{item.god}</p>
						// 			</div>
						// 		</div>
						// 	))}
						// </div>
					)} */}
				</div>
			</div>
		</div>
	);
};

export default IdResult;
