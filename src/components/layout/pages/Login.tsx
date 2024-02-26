import { useNavigate } from "react-router";
import scss from "./Login.module.scss";
import { useState } from "react";
import axios from "axios";
import { createPortal } from "react-dom";
import Modal from "../../modal/Modal";
import { Button } from "../../ul/button/Button";
const url2 = import.meta.env.VITE_BEK_RESULT2;
const Login = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState<string>("");
	const [userPassword, setUserPassword] = useState<string>("");
	const [modal, setModal] = useState<boolean>(false);
	const getUsers = async () => {
		try {
			const response = (await axios.get(url2)).data;
			const findUsers = response.find(
				(item: { login: string; password: string; }) => item.login === userLogin && item.password === userPassword
			);
			if (findUsers) {
				localStorage.setItem("isAuth", findUsers._id);
				navigate("/home");
			} else {
				setModal(true);
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<div className={scss.logindiv}>
        <div className="container">
          <div className={scss.content}>
            <label>Login</label>
            <input className={scss.input} type="email" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} placeholder='Email'/>
            <input className={scss.input} type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder='Password'/>
            <Button onClick={getUsers}>Login</Button>
          </div>
        </div>
      </div>
      {modal && createPortal(
        <Modal>
          <div>
            <h1>Error</h1>
          </div>
        </Modal>,
        document.getElementById('modal')
      )}
		</>
	);
};

export default Login;
