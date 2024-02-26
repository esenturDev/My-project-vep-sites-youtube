import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const Providers: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuth = localStorage.getItem("isAuth");
	const localStorageResult = !!isAuth;
	useEffect(() => {
		if (localStorageResult && pathname === "/login") {
			navigate("/home");
		} else if (localStorageResult && pathname === "/registr") {
			navigate("/home");
		} else if (!localStorageResult && pathname === "/home") {
			navigate("/");
		} else if (localStorageResult && pathname === "/") {
			navigate("/home");
		}
	}, [pathname]);
	return children;
};
