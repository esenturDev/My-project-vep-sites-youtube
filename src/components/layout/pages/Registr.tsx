import { useNavigate } from 'react-router';
import scss from './Registr.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../../../store/tools/bekResultsSlice';
import { Button } from '../../ul/button/Button';

const Registr = () => {
  const dispatch =  useDispatch();
  const navigate =  useNavigate();
  const [userLogin, setUserLogin] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const addPostUsers = () => {
    const newData = {
      login: userLogin,
      password: userPassword
    }
    dispatch(postUser(newData))
    navigate('/login')
  }
  return (
    <div className={scss.passworddiv}>
      <div className='container'>
        <div className={scss.content}>
          <label>Регистрация</label>
          <input className={scss.input} type='email' value={userLogin} setData={setUserLogin} placeholder='Email'/>
          <input className={scss.input} type='password' value={userPassword} setData={setUserPassword} placeholder='Password'/>
          <Button onClick={addPostUsers}>Регистрация</Button>
        </div>
      </div>
    </div>
  )
}

export default Registr