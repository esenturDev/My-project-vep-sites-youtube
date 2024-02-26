import scss from "./Navbar.module.scss";
import logo from "../../../assets/home-2-fill.svg";
import logo2 from "../../../assets/store-fill.svg";
import logo3 from "../../../assets/mail-volume-fill.svg";
import logo4 from "../../../assets/tent-fill.svg";
import logo5 from "../../../assets/chat-history-fill.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
	const navbarResult = [
		{
			icon: logo,
			title: "Главная",
			href: "/home",
		},
		{
			icon: logo2,
			title: "Shorts",
			href: "/Shorts",
		},
		{
			icon: logo3,
			title: "Подписки",
			href: "/Подписки",
		},
		{
			icon: logo4,
			title: "Мой канал",
			href: "/Мой канал",
		},
		{
			icon: logo5,
			title: "История",
			href: "/История",
		},
		{
			icon: logo5,
			title: "Ваши видео",
			href: "/Ваши видео",
		},
		{
			icon: logo5,
			title: "Смотреть позже",
			href: "/Смотреть позже",
		},
	];
	return (
		<div className={scss.navbar}>
			<>
				{navbarResult.map((item, index) => (
					<Link className={scss.link} key={index} to={item.href}>
						<div className={scss.div}>
							<img src={item.icon} alt={item.title} />
							<span>{item.title}</span>
						</div>
					</Link>
				))}
			</>
		</div>
	);
};

export default Navbar;
