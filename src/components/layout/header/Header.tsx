import scss from "./Header.module.scss";
// import logo from "../../../assets/menu-line.svg";
// import logo1 from "../../../assets/menu-fill.svg";
// import incon from "../../../assets/search-line.svg";
import Input from "../../ul/input/Input";
import logo2 from "../../../assets/notification-4-line.svg";
import { Button } from "../../ul/button/Button";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../../modal/Modal";
import { useDispatch } from "react-redux";
import { postBekResult } from "../../../store/tools/bekResultsSlice";
import { FC } from "react";

import { useAppSelector } from "../../../store/store";
import { useNavigate } from "react-router";
const Header: FC<{
	resultStyle1: () => void;
	resultStule2: () => void;
	updateIsResult: () => void;
}> = ({ resultStyle1, resultStule2, updateIsResult }) => {
	const todo = useAppSelector((state) => state.bekentResults.data);
	console.log(todo, "test");
	const [inputsResults, setInputsResults] = useState<string>("");
	const [modalExit, setModalExit] = useState<boolean>(false);
	// const [isResult, setIsResult] = useState([]);
	const [inputValue, setInputValue] = useState<string>("");
	// const [previousData, setPreviousData] = useState<any[]>([]);
	const [inputValue2, setInputValue2] = useState<string>("");
	const [inputValue3, setInputValue3] = useState<string>("");
	const [inputValue4, setInputValue4] = useState<string>("");
	const [inputValue5, setInputValue5] = useState<string>("");
	const [bekcolorResults, setBekcolorResults] = useState<boolean>(false);
	const navigate = useNavigate();
	const [modal, setModal] = useState<boolean>(false);
	const [modal2, setModal2] = useState<boolean>(false);
	const dispatch = useDispatch();

	function modalYess() {
		setModal(true);
	}

	const postBekents = () => {
		const newData = {
			img: inputValue,
			iframe: inputValue2,
			title: inputValue3,
			nameg: inputValue4,
			god: inputValue5,
		};
		console.log("test");
		if (
			inputValue === "" &&
			inputValue2 === "" &&
			inputValue3 === "" &&
			inputValue4 === "" &&
			inputValue5 === ""
		) {
			alert("Input ка бир нерсе жазыныз!");
		} else {
			dispatch(postBekResult(newData));
			setInputValue("");
			setInputValue2("");
			setInputValue3("");
			setInputValue4("");
			setInputValue5("");
		}
	};

	// useEffect(() => {
	//   dispatch(getBekResult())
	// }, [])
	const handleInputValueisBekents = () => {
		const filtredData = todo.filter((item) => item.nameg === inputsResults);
		updateIsResult(filtredData);
		if (filtredData) {
			navigate("/ResultsIsBekents");
		} else if (!filtredData) {
			navigate("/ErrorBek");
		} else {
			alert("error");
		}
	};

	const localStorageDelete = () => {
		localStorage.removeItem("isAuth");
		navigate("/");
	};

	// const filtredData = inputsResults ? todo.filter((item) => item.nameg === inputsResults) : previousData.length > 0 ? previousData : todo;

	// useEffect(() => {
	//   if(inputsResults === 'Все' && previousData.length === 0 ){
	//     setPreviousData(todo)
	//   }
	// }, [inputsResults, todo, previousData])

	return (
		<>
			<header className={scss.header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.div1}>
							<button>
								<img
									src="https://mifill.kz/themes/demo/assets/images/burger.svg"
									alt="burget"
								/>
							</button>
							<div className={scss.div11}>
								<img
									className={scss.img}
									src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
									alt="logo"
								/>
								<span>YouTube</span>
							</div>
						</div>
						<div className={scss.div2}>
							<Input
								type="text"
								value={inputsResults}
								setData={setInputsResults}
								placeholder="Введите запрос"
							/>
							<Button onClick={handleInputValueisBekents}>
								<img
									src="https://cdn-icons-png.flaticon.com/512/702/702886.png"
									alt="logo"
								/>
							</Button>
						</div>
						<div className={scss.div3}>
							<Button onClick={modalYess}>добавить контент!</Button>
							<Button onClick={() => setModalExit(true)}>Exit</Button>
							<img src={logo2} alt="logo2" />
							<img
								onClick={() => setModal2(true)}
								src="https://yt3.ggpht.com/yti/AGOGRCrSJD6FnZINHrtdvCjqT7Ub_QjnaSDOyJtVEuVmjA=s88-c-k-c0x00ffffff-no-rj"
								alt="logo"
							/>
						</div>
					</div>
				</div>
			</header>
			{modal &&
				createPortal(
					<Modal>
						<div className={scss.modalDiv}>
							<h2>Хотите добавить контент?</h2>
							<Input
								type="url"
								value={inputValue}
								setData={setInputValue}
								placeholder="ссылка для фото"
							/>
							<Input
								type="url"
								value={inputValue2}
								setData={setInputValue2}
								placeholder="url is vidoe"
							/>
							<Input
								type="text"
								value={inputValue3}
								setData={setInputValue3}
								placeholder="видое content"
							/>
							<Input
								type="text"
								value={inputValue4}
								setData={setInputValue4}
								placeholder="жанры"
							/>
							<Input
								type="text"
								value={inputValue5}
								setData={setInputValue5}
								placeholder="В какое время вы хотите выпустить"
							/>
							<Button onClick={postBekents}>Add Content</Button>
							<Button onClick={() => setModal(false)}>
								Закройте модальное окно
							</Button>
						</div>
					</Modal>,
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					document.getElementById("modal") as any
				)}
			{modal2 &&
				createPortal(
					<Modal>
						<div className={scss.divModal2}>
							{bekcolorResults ? (
								<>
									<div className={scss.modalButtons}>
										<Button
											onClick={() => {
												resultStyle1();
												setBekcolorResults(false);
											}}>
											режим черный
										</Button>
										<Button
											onClick={() => {
												resultStule2();
												setBekcolorResults(false);
											}}>
											режим белый
										</Button>
									</div>
								</>
							) : (
								<p onClick={() => setBekcolorResults(true)}>
									Тема: как на устройстве
								</p>
							)}
							<Button onClick={() => setModal2(false)}>
								Закройте модальное окно
							</Button>
						</div>
					</Modal>,
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					document.getElementById("modal") as any
				)}
			{modalExit &&
				createPortal(
					<Modal>
						<div className={scss.modalExit}>
							<h1>
								Вы уверены что хотите <br /> выйти из аккаунта?
							</h1>
							<div className={scss.buttonsModal}>
								<button
									className={scss.buttonBlue}
									onClick={() => setModalExit(false)}>
									Отменить
								</button>
								<button className={scss.buttonRed} onClick={localStorageDelete}>
									Выйти
								</button>
							</div>
						</div>
					</Modal>,
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					document.getElementById("modal") as any
				)}
		</>
	);
};

export default Header;
// buttonRed
