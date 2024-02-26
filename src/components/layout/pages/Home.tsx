// export default Home;
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/store";
import scss from "./Hemo.module.scss";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { getBekResult } from "../../../store/tools/bekResultsSlice";
import { Link } from "react-router-dom";
// import {deleteBekResult} from '../../../store/tools/bekResultsSlice'
const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [previousData, setPreviousData] = useState([]);
	const bekResult = useAppSelector((state) => state.bekentResults.data);
	const dispatch = useDispatch();
	const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);

	useEffect(() => {
		dispatch(getBekResult());
	}, []);

	const handleCategoryClick = (category: string) => {
		if (category === "Все") {
			setSelectedCategory(null);
		} else {
			setSelectedCategory(category);
		}
	};
	// const deleteVidue = (id) => {
	// 	dispatch(deleteBekResult(id))
	// }
	const filteredData = selectedCategory
		? bekResult.filter((item) => item.nameg === selectedCategory)
		: previousData.length > 0
		? previousData
		: bekResult;
  console.log(filteredData);
	
	useEffect(() => {
		if (selectedCategory === "Все" && previousData.length === 0) {
			setPreviousData(bekResult);
		}
	}, [selectedCategory, bekResult, previousData]);
	// const idUseParams = (id: number) => {
	// 	const isParams = filteredData.find((item) => item.id === id);
	// 	if (!isParams) {
	// 		<IdResult />;
	// 	} else {
	// 		alert("Error");
	// 	}
	// };
	return (
		<div className={scss.home}>
			<div className="container">
				<div className={scss.content}>
					<nav>
						<Navbar />
					</nav>
					<div className={scss.mapBekents}>
						<div className={scss.buttonsResults}>
							<button
								className={`${scss.buttons} ${!isAdvertiser && scss.active}`}
								onClick={() => {
									handleCategoryClick("Все");
									setIsAdvertiser(false);
								}}>
								Все
							</button>
							<button
								onClick={() => {
									handleCategoryClick("фудбол");
									setIsAdvertiser(true);
								}}
								className={`${scss.buttons} ${isAdvertiser && scss.active}`}>
								фудбол
							</button>
							<button
								className={`${scss.buttons} ${isAdvertiser && scss.active}`}
								onClick={() => {
									handleCategoryClick("музыка");
									setIsAdvertiser(true);
								}}>
								музыка
							</button>
							<button
								className={`${scss.buttons} ${isAdvertiser && scss.active}`}
								onClick={() => {
									handleCategoryClick("кино");
									setIsAdvertiser(true);
								}}>
								кино
							</button>
							<button
								className={`${scss.buttons} ${isAdvertiser && scss.active}`}
								onClick={() => {
									handleCategoryClick("тренировка");
									setIsAdvertiser(true);
								}}>
								тренировка
							</button>
							<button
								className={`${scss.buttons} ${isAdvertiser && scss.active}`}
								onClick={() => {
									handleCategoryClick("it");
									setIsAdvertiser(true);
								}}>
								it
							</button>
						</div>
						<div className={scss.bekCards}>
							{filteredData.map((item) => (
								<Link
									className={scss.cards}
									to={`/home/${item._id}`}
									key={item._id}>
									<img src={item.img} alt={item.title} />
									<h2>{item.title}</h2>
									<p>{item.god}</p>
									{/* <Button onClick={() => deleteVidue(item._id)}>delete</Button> */}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
